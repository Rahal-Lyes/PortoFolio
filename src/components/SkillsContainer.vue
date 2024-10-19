<template>
  <div
    v-for="skill in skills"
    :key="skill.name"
    ref="skill"
    class="min-w-40 min-h-40 shadow-xl rounded-2xl flex flex-col items-center justify-center z-0 my-10"
  >
    <div class="flex flex-col items-center z-0">
      <img :src="skill.icon" class="w-20 h-20" />
      <h1 class="text-xl py-2">{{ skill.name }}</h1>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { gsap } from 'gsap';

// Props
const props = defineProps({
  skills: {
    type: Array,
    required: true,
  },
});

// Références des éléments
const skill = ref([]);

// Animation GSAP : Rotation infinie sur l'axe X
onMounted(() => {
  skill.value.forEach((el) => {
    gsap.to(el, {
      x: 360,  // Rotation complète sur l'axe X
      duration: 5,     // Durée de la rotation en secondes
      repeat: -1,      // Répétition infinie
      ease: "linear",
      yoyo: true,      // Activer l'effet yoyo
     stagger: 0.2,    // Décaler chaque élément de 200ms
    });
  });
});
</script>
