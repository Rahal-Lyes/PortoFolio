<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
    <article
      v-for="cert in certificates"
      :key="cert.id"
      class="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl border border-slate-100
             overflow-hidden flex flex-col transition-all duration-500 hover:-translate-y-2"
    >
      <!-- Photo du certificat -->
      <div
        class="relative h-56 overflow-hidden bg-gradient-to-br cursor-zoom-in"
        :class="cert.gradient"
        @click="openPreview(cert)"
      >
        <img
          v-if="cert.image && !failed[cert.id]"
          :src="cert.image"
          :alt="`Certificat ${cert.title}`"
          loading="lazy"
          class="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
          @error="failed[cert.id] = true"
        />

        <!-- Placeholder si pas d'image -->
        <div
          v-else
          class="w-full h-full flex flex-col items-center justify-center text-white/90 gap-2"
        >
          <span class="text-5xl" aria-hidden="true">🎓</span>
          <span class="text-sm font-medium">Certificat</span>
        </div>

        <!-- Dégradé sombre en bas de l'image -->
        <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

        <!-- Badge émetteur -->
        <span
          class="absolute top-4 left-4 px-3 py-1 text-xs font-bold rounded-full
                 bg-white/90 backdrop-blur text-slate-800 shadow"
        >
          {{ cert.issuer }}
        </span>

        <!-- Badge date -->
        <span
          class="absolute top-4 right-4 px-3 py-1 text-xs font-semibold rounded-full
                 bg-black/40 backdrop-blur text-white"
        >
          {{ cert.date }}
        </span>

        <!-- Icône zoom -->
        <div
          class="absolute inset-0 flex items-center justify-center opacity-0
                 group-hover:opacity-100 transition-opacity duration-300"
        >
          <span class="px-4 py-2 rounded-full bg-white/90 text-slate-800 text-sm font-semibold shadow-lg">
            🔍 Agrandir
          </span>
        </div>
      </div>

      <!-- Contenu -->
      <div class="p-6 flex flex-col gap-4 flex-1">
        <div>
          <h3 class="text-xl font-bold text-slate-800 leading-snug">
            {{ cert.title }}
          </h3>
        </div>

        <!-- Identifiant -->
        <div
          v-if="cert.credentialId"
          class="flex items-start gap-2 text-xs text-slate-500 bg-slate-50 rounded-lg px-3 py-2"
        >
          <span aria-hidden="true">🪪</span>
          <span class="break-all">
            <span class="font-semibold text-slate-600">ID :</span> {{ cert.credentialId }}
          </span>
        </div>

        <!-- Compétences -->
        <div v-if="cert.skills?.length" class="flex flex-wrap gap-2">
          <span
            v-for="skill in cert.skills"
            :key="skill"
            class="px-3 py-1 text-xs font-medium rounded-full bg-slate-100 text-slate-700
                   transition-colors duration-300 hover:bg-slate-200"
          >
            {{ skill }}
          </span>
        </div>

        <!-- Lien -->
        <a
          :href="cert.link"
          target="_blank"
          rel="noopener noreferrer"
          class="mt-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm
                 font-semibold text-white bg-gradient-to-r shadow-md transition-all duration-300
                 hover:shadow-lg hover:opacity-90"
          :class="cert.gradient"
        >
          Afficher le diplôme
          <span class="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">↗</span>
        </a>
      </div>
    </article>

    <!-- Aperçu plein écran -->
    <Teleport to="body">
      <Transition name="fade">
        <div
          v-if="preview"
          class="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          @click.self="closePreview"
        >
          <button
            class="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/90 text-slate-800
                   text-xl font-bold hover:bg-white transition"
            aria-label="Fermer"
            @click="closePreview"
          >
            ✕
          </button>
          <img
            v-if="preview.image && !failed[preview.id]"
            :src="preview.image"
            :alt="`Certificat ${preview.title}`"
            class="max-w-full max-h-[90vh] rounded-xl shadow-2xl"
          />
          <div v-else class="text-white text-lg">Aucune image disponible</div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup>
import { reactive, ref, onMounted, onBeforeUnmount } from 'vue';

defineProps({
  certificates: {
    type: Array,
    required: true,
  },
});

const failed = reactive({});
const preview = ref(null);

const openPreview = (cert) => {
  preview.value = cert;
};
const closePreview = () => {
  preview.value = null;
};

const onKeydown = (e) => {
  if (e.key === 'Escape') closePreview();
};

onMounted(() => window.addEventListener('keydown', onKeydown));
onBeforeUnmount(() => window.removeEventListener('keydown', onKeydown));
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>