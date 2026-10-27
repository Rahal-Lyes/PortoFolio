<template>
  <div class="certs-timeline" :class="{ 'is-armed': armed }">
    <!-- Filtres -->
    <v-chip-group v-model="filter" mandatory selected-class="text-white bg-indigo" class="justify-center mb-8">
      <v-chip v-for="f in filters" :key="f.value" :value="f.value" variant="outlined" size="large">
        {{ f.label }}
        <span class="ml-2 text-medium-emphasis">{{ f.count }}</span>
      </v-chip>
    </v-chip-group>

    <!-- Du plus récent (haut) au plus ancien (bas) : on lit le parcours de bas en haut -->
    <v-timeline
      :side="mdAndUp ? undefined : 'end'"
      align="start"
      density="comfortable"
      line-thickness="3"
      line-color="blue-grey-lighten-4"
      truncate-line="both"
    >
      <!-- Point d'arrivée en haut -->
      <v-timeline-item
        v-if="filter === 'all'"
        dot-color="indigo"
        icon="mdi-rocket-launch"
        size="large"
        class="tl-now"
        :hide-opposite="!mdAndUp"
      >
        <!-- <template #opposite>
          <div class="tl-date">Aujourd’hui</div>
        </template> -->
        <!-- <v-card rounded="xl" variant="tonal" color="indigo" class="pa-5">
          <div class="text-h6 font-weight-bold">Le parcours continue</div>
          <div class="text-body-2 mt-1">De nouveaux certificats viendront s’ajouter ici.</div>
        </v-card> -->
      </v-timeline-item>

      <v-timeline-item
        v-for="item in visibleItems"
        :key="item.id"
        class="tl-item"
        :class="{ 'is-revealed': revealed[item.id] }"
        :dot-color="item.color"
        :icon="typeMeta[item.type].icon"
        size="large"
        :hide-opposite="!mdAndUp"
      >
        <!-- Date côté opposé (desktop) -->
        <template #opposite>
          <div class="tl-date">{{ item.date }}</div>
          <div class="text-caption text-medium-emphasis">{{ typeMeta[item.type].label }}</div>
        </template>

        <div :ref="(el) => bindEl(el, item.id)" class="tl-reveal">
        <v-card
          class="tl-card"
          rounded="xl"
          elevation="3"
          :style="{ '--accent': item.color }"
        >
          <!-- Miniature du certificat -->
          <div v-if="item.image" class="tl-thumb" @click="openPreview(item)">
            <v-img :src="item.image" :alt="`Certificat ${item.title}`" height="170" cover position="top">
              <template #error>
                <div class="d-flex align-center justify-center fill-height text-medium-emphasis">
                  <v-icon icon="mdi-image-off-outline" size="40" />
                </div>
              </template>
            </v-img>
            <div class="tl-thumb__hint">
              <v-icon icon="mdi-magnify-plus-outline" start /> Agrandir
            </div>
          </div>

          <v-card-text class="pa-5">
            <div class="d-flex flex-wrap align-center ga-2 mb-3">
              <v-chip size="small" :color="item.color" variant="flat" :prepend-icon="typeMeta[item.type].icon">
                {{ typeMeta[item.type].label }}
              </v-chip>
              <v-chip v-if="item.level" size="small" variant="outlined">{{ item.level }}</v-chip>
              <v-chip v-if="!mdAndUp" size="small" variant="text" prepend-icon="mdi-calendar">
                {{ item.date }}
              </v-chip>
            </div>

            <h3 class="tl-title">{{ item.title }}</h3>

            <div class="d-flex align-center text-body-2 text-medium-emphasis mt-2">
              <v-icon icon="mdi-domain" size="18" class="mr-2" />
              {{ item.issuer }}
            </div>

            <p v-if="item.description" class="text-body-2 mt-3 mb-0">{{ item.description }}</p>

            <!-- Compétences (repliables) -->
            <div v-if="item.skills?.length" class="d-flex flex-wrap ga-2 mt-4">
              <v-chip
                v-for="skill in shownSkills(item)"
                :key="skill"
                size="small"
                variant="tonal"
              >
                {{ skill }}
              </v-chip>
              <v-chip
                v-if="item.skills.length > maxSkills"
                size="small"
                variant="text"
                :color="item.color"
                @click="expanded[item.id] = !expanded[item.id]"
              >
                {{ expanded[item.id] ? 'Réduire' : `+${item.skills.length - maxSkills}` }}
              </v-chip>
            </div>

            <div
              v-if="item.credentialId"
              class="text-caption text-medium-emphasis mt-4 text-break"
            >
              <v-icon icon="mdi-card-account-details-outline" size="16" class="mr-1" />
              ID : {{ item.credentialId }}
            </div>
          </v-card-text>

          <v-card-actions v-if="item.link" class="px-5 pb-5 pt-0">
            <v-btn
              :href="item.link"
              target="_blank"
              rel="noopener noreferrer"
              :color="item.color"
              variant="flat"
              rounded="lg"
              block
              append-icon="mdi-open-in-new"
            >
              Afficher le diplôme
            </v-btn>
          </v-card-actions>
        </v-card>
        </div>
      </v-timeline-item>
    </v-timeline>

    <!-- Aperçu plein écran -->
    <v-dialog v-model="dialog" max-width="1000" scrim="black">
      <v-card v-if="preview" rounded="xl" class="overflow-hidden">
        <v-btn
          icon="mdi-close"
          variant="flat"
          size="small"
          class="tl-close"
          aria-label="Fermer"
          @click="dialog = false"
        />
        <v-img :src="preview.image" :alt="`Certificat ${preview.title}`" max-height="90vh" contain />
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, reactive, ref } from 'vue';
import { useDisplay } from 'vuetify';

const props = defineProps({
  // Chaque item : { id, type: 'degree' | 'certificate', title, issuer, date, sortDate,
  //                 level?, description?, skills?, credentialId?, image?, link?, color }
  items: { type: Array, required: true },
});

const { mdAndUp } = useDisplay();

const typeMeta = {
  degree: { label: 'Diplôme', icon: 'mdi-school' },
  certificate: { label: 'Certificat', icon: 'mdi-certificate' },
};

/* ---------- Filtres + tri (le plus récent en haut) ---------- */
const filter = ref('all');

const filters = computed(() => [
  { value: 'all', label: 'Tout', count: props.items.length },
  { value: 'degree', label: 'Diplômes', count: props.items.filter((i) => i.type === 'degree').length },
  { value: 'certificate', label: 'Certificats', count: props.items.filter((i) => i.type === 'certificate').length },
]);

const sorted = computed(() =>
  [...props.items].sort((a, b) => new Date(b.sortDate) - new Date(a.sortDate)),
);

const visibleItems = computed(() =>
  filter.value === 'all' ? sorted.value : sorted.value.filter((i) => i.type === filter.value),
);

/* ---------- Compétences repliables ---------- */
const maxSkills = 5;
const expanded = reactive({});
const shownSkills = (item) =>
  expanded[item.id] ? item.skills : item.skills.slice(0, maxSkills);

/* ---------- Aperçu ---------- */
const dialog = ref(false);
const preview = ref(null);
const openPreview = (item) => {
  preview.value = item;
  dialog.value = true;
};

/* ---------- Animation : les étapes montent au fil du scroll ---------- */
const revealed = reactive({});
const armed = ref(false);
const elements = new Map();
let observer = null;
let fallbackTimer = null;

const bindEl = (el, id) => {
  if (!el || elements.get(id) === el) return;
  elements.set(id, el);
  el.dataset.id = id;
  observer?.observe(el);
};

onMounted(() => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduceMotion || !('IntersectionObserver' in window)) {
    props.items.forEach((i) => (revealed[i.id] = true));
    return;
  }
  armed.value = true;
  // Filet de sécurité : si l'observateur ne se déclenche pas, tout s'affiche quand même
  fallbackTimer = setTimeout(() => props.items.forEach((i) => (revealed[i.id] = true)), 2500);
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          revealed[e.target.dataset.id] = true;
          observer.unobserve(e.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -8% 0px' },
  );
  elements.forEach((node) => observer.observe(node));
});

onBeforeUnmount(() => {
  clearTimeout(fallbackTimer);
  observer?.disconnect();
  elements.clear();
});
</script>

<style scoped>
.certs-timeline {
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
}

/* Date */
.tl-date {
  font-size: 1.05rem;
  font-weight: 700;
  color: rgb(var(--v-theme-on-surface));
}

.tl-title {
  font-size: 1.15rem;
  line-height: 1.35;
  font-weight: 700;
}

/* Carte */
.tl-card {
  border-top: 4px solid var(--accent);
  overflow: hidden;
}

/* Miniature */
.tl-thumb {
  position: relative;
  cursor: zoom-in;
  overflow: hidden;
}
.tl-thumb :deep(.v-img__img) {
  transition: transform 0.6s ease;
}
.tl-thumb:hover :deep(.v-img__img) {
  transform: scale(1.06);
}
.tl-thumb__hint {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.35);
  color: #fff;
  font-weight: 600;
  opacity: 0;
  transition: opacity 0.3s ease;
}
.tl-thumb:hover .tl-thumb__hint {
  opacity: 1;
}

.tl-close {
  position: absolute;
  top: 12px;
  right: 12px;
  z-index: 2;
}

/* ---- Entrée animée : la carte monte, le point apparaît avec un rebond ---- */
.is-armed .tl-item .tl-card {
  opacity: 0;
  transform: translateY(48px);
  transition: opacity 0.6s ease, transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
}
.is-armed .tl-item :deep(.v-timeline-divider__dot) {
  transform: scale(0);
  transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) 0.1s;
}
.is-armed .tl-item :deep(.v-timeline-item__opposite) {
  opacity: 0;
  transition: opacity 0.6s ease 0.2s;
}

.is-armed .tl-item.is-revealed .tl-card {
  opacity: 1;
  transform: translateY(0);
}
.is-armed .tl-item.is-revealed :deep(.v-timeline-divider__dot) {
  transform: scale(1);
}
.is-armed .tl-item.is-revealed :deep(.v-timeline-item__opposite) {
  opacity: 1;
}

/* Point d'arrivée : halo qui pulse */
.tl-now :deep(.v-timeline-divider__dot) {
  animation: tl-pulse 2.4s ease-out infinite;
}
@keyframes tl-pulse {
  0% { box-shadow: 0 0 0 0 rgba(63, 81, 181, 0.45); }
  70% { box-shadow: 0 0 0 16px rgba(63, 81, 181, 0); }
  100% { box-shadow: 0 0 0 0 rgba(63, 81, 181, 0); }
}

/* Accessibilité : pas d'animation si l'utilisateur la désactive */
@media (prefers-reduced-motion: reduce) {
  .is-armed .tl-item .tl-card,
  .is-armed .tl-item :deep(.v-timeline-divider__dot),
  .is-armed .tl-item :deep(.v-timeline-item__opposite) {
    opacity: 1;
    transform: none;
    transition: none;
  }
  .tl-now :deep(.v-timeline-divider__dot) {
    animation: none;
  }
}
</style>