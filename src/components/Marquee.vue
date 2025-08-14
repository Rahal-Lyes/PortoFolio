<template>
  <Container>
    <!-- Hero Section -->
    <div class="relative py-16 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-3xl"></div>
      <div class="relative z-10 text-center">
        <div class="inline-block mb-4">
          <span class="px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium">
            💻 Mon Expertise Technique
          </span>
        </div>
        <h1 class="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-cyan-100 to-blue-100 bg-clip-text text-transparent mb-6">
          Compétences & Technologies
        </h1>
        <p class="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Une palette complète de technologies modernes pour créer des expériences web exceptionnelles
        </p>
      </div>
    </div>

    <!-- Filter Buttons -->
    <div class="flex flex-wrap justify-center gap-3 mb-12">
      <button
        v-for="category in categories"
        :key="category.name"
        @click="selectedCategory = category.name"
        :class="[
          'px-6 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105',
          selectedCategory === category.name
            ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/25'
            : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white border border-gray-700 hover:border-gray-600'
        ]"
      >
        <span class="mr-2">{{ category.emoji }}</span>
        {{ category.name }}
      </button>
    </div>

    <!-- Skills Grid -->
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 mb-12">
      <transition-group
        name="skill-card"
        tag="div"
        class="contents"
        @before-enter="beforeEnter"
        @enter="enter"
      >
        <div
          v-for="(skill, index) in filteredSkills"
          :key="`${skill.name}-${selectedCategory}`"
          :data-index="index"
          class="skill-card group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 cursor-pointer"
          @click="selectSkill(skill)"
        >
          <!-- Skill Icon -->
          <div class="relative mb-4">
            <div class="w-16 h-16 mx-auto relative">
              <img
                :src="skill.icon"
                :alt="skill.name"
                class="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110 filter group-hover:brightness-110"
              />
              <div class="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>

          <!-- Skill Name -->
          <h3 class="text-center font-semibold text-gray-200 group-hover:text-white transition-colors duration-300">
            {{ skill.displayName }}
          </h3>

          <!-- Skill Level Bar -->
          <div class="mt-3 w-full bg-gray-700 rounded-full h-1.5 overflow-hidden">
            <div
              class="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full transition-all duration-1000 ease-out"
              :style="{ width: selectedCategory === 'Toutes' ? '0%' : skill.level + '%' }"
            ></div>
          </div>
          <div class="text-xs text-gray-400 text-center mt-1">
            {{ skill.level }}%
          </div>

          <!-- Hover Overlay -->
          <div class="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      </transition-group>
    </div>

    <!-- Skill Details Modal -->
    <transition name="modal">
      <div
        v-if="selectedSkill"
        class="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        @click="selectedSkill = null"
      >
        <div
          class="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 max-w-md w-full border border-gray-700 shadow-2xl"
          @click.stop
        >
          <div class="text-center">
            <img
              :src="selectedSkill.icon"
              :alt="selectedSkill.name"
              class="w-20 h-20 mx-auto mb-4 filter brightness-110"
            />
            <h3 class="text-2xl font-bold text-white mb-2">{{ selectedSkill.displayName }}</h3>
            <div class="flex justify-center mb-4">
              <div
                v-for="star in 5"
                :key="star"
                class="w-6 h-6 mx-1"
                :class="star <= Math.floor(selectedSkill.level / 20) ? 'text-yellow-400' : 'text-gray-600'"
              >
                ⭐
              </div>
            </div>
            <p class="text-gray-300 mb-4">{{ selectedSkill.description }}</p>
            <div class="w-full bg-gray-700 rounded-full h-2 mb-2">
              <div
                class="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full transition-all duration-1000"
                :style="{ width: selectedSkill.level + '%' }"
              ></div>
            </div>
            <p class="text-cyan-400 font-semibold">{{ selectedSkill.level }}% de maîtrise</p>
          </div>
        </div>
      </div>
    </transition>

    <!-- Stats Section -->
    <div class="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
      <div class="text-center p-8 bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl border border-gray-700/30">
        <div class="text-4xl font-bold text-cyan-400 mb-2">{{ skills.length }}</div>
        <div class="text-gray-300">Technologies Maîtrisées</div>
      </div>
      <div class="text-center p-8 bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl border border-gray-700/30">
        <div class="text-4xl font-bold text-blue-400 mb-2">5+</div>
        <div class="text-gray-300">Années d'Expérience</div>
      </div>
      <div class="text-center p-8 bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl border border-gray-700/30">
        <div class="text-4xl font-bold text-purple-400 mb-2">∞</div>
        <div class="text-gray-300">Passion pour l'Innovation</div>
      </div>
    </div>
  </Container>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import Container from '@/components/Container.vue';
import gsap from 'gsap';

// Import des icônes (gardez vos imports existants)
import html5 from '@/assets/social-links/programming/html5.svg';
import css from '@/assets/social-links/programming/css.svg';
import javascript from '@/assets/social-links/programming/javascript.svg';
import vuetify from '@/assets/social-links/programming/vuetify.svg'
import jquery from '@/assets/social-links/programming/jQuery_light.svg';
import c from '@/assets/social-links/programming/c.svg';
import git from '@/assets/social-links/programming/git.svg';
import intellijidea from '@/assets/social-links/programming/intellijidea.svg';
import jwt from '@/assets/social-links/programming/jwt.svg';
import mongodb from '@/assets/social-links/programming/mongodb-wordmark.svg';
import mysql from '@/assets/social-links/programming/mysql.svg';
import nodejs from '@/assets/social-links/programming/nodejs.svg';
import npm from '@/assets/social-links/programming/npm.svg';
import php from '@/assets/social-links/programming/Php_light.svg';
import phpstorm from '@/assets/social-links/programming/phpstorm.svg';
import postman from '@/assets/social-links/programming/postman.svg';
import supabase from '@/assets/social-links/programming/Supabase_wordmark_light.svg';
import tailwindcss from '@/assets/social-links/programming/tailwindcss.svg';
import vscode from '@/assets/social-links/programming/vscode.svg';
import vue from '@/assets/social-links/programming/vue.svg';
import express from '@/assets/social-links/programming/Express.js_light.svg';

const selectedCategory = ref('Toutes');
const selectedSkill = ref(null);

const categories = [
  { name: 'Toutes', emoji: '🌟' },
  { name: 'Frontend', emoji: '🎨' },
  { name: 'Backend', emoji: '⚙️' },
  { name: 'Base de Données', emoji: '💾' },
  { name: 'Outils', emoji: '🔧' },
];

const skills = ref([
  { 
    name: 'html5', 
    displayName: 'HTML5', 
    icon: html5, 
    category: 'Frontend', 
    level: 95,
    description: 'Langage de balisage pour structurer le contenu web avec les dernières fonctionnalités HTML5.'
  },
  { 
    name: 'css3', 
    displayName: 'CSS3', 
    icon: css, 
    category: 'Frontend', 
    level: 90,
    description: 'Langage de style pour créer des interfaces utilisateur modernes et responsives.'
  },
  { 
    name: 'tailwindcss', 
    displayName: 'Tailwind CSS', 
    icon: tailwindcss, 
    category: 'Frontend', 
    level: 85,
    description: 'Framework CSS utility-first pour un développement rapide et flexible.'
  },
  { 
    name: 'vue', 
    displayName: 'Vue.js', 
    icon: vue, 
    category: 'Frontend', 
    level: 90,
    description: 'Framework JavaScript progressif pour créer des interfaces utilisateur interactives.'
  },
  { 
    name: 'vuetify', 
    displayName: 'Vuetify', 
    icon: vuetify, 
    category: 'Frontend', 
    level: 80,
    description: 'Bibliothèque de composants Vue.js basée sur Material Design.'
  },
  { 
    name: 'javascript', 
    displayName: 'JavaScript', 
    icon: javascript, 
    category: 'Frontend', 
    level: 88,
    description: 'Langage de programmation dynamique pour le développement web moderne.'
  },
  { 
    name: 'jquery', 
    displayName: 'jQuery', 
    icon: jquery, 
    category: 'Frontend', 
    level: 75,
    description: 'Bibliothèque JavaScript pour simplifier la manipulation du DOM.'
  },
  { 
    name: 'nodejs', 
    displayName: 'Node.js', 
    icon: nodejs, 
    category: 'Backend', 
    level: 85,
    description: 'Environnement d\'exécution JavaScript côté serveur pour des applications scalables.'
  },
  { 
    name: 'express', 
    displayName: 'Express.js', 
    icon: express, 
    category: 'Backend', 
    level: 80,
    description: 'Framework web minimaliste et flexible pour Node.js.'
  },
  { 
    name: 'php', 
    displayName: 'PHP', 
    icon: php, 
    category: 'Backend', 
    level: 82,
    description: 'Langage de programmation côté serveur pour le développement web dynamique.'
  },
  { 
    name: 'c', 
    displayName: 'C', 
    icon: c, 
    category: 'Backend', 
    level: 70,
    description: 'Langage de programmation système puissant et performant.'
  },
  { 
    name: 'mongodb', 
    displayName: 'MongoDB', 
    icon: mongodb, 
    category: 'Base de Données', 
    level: 78,
    description: 'Base de données NoSQL flexible et scalable pour applications modernes.'
  },
  { 
    name: 'mysql', 
    displayName: 'MySQL', 
    icon: mysql, 
    category: 'Base de Données', 
    level: 85,
    description: 'Système de gestion de base de données relationnelle open source.'
  },
  { 
    name: 'supabase', 
    displayName: 'Supabase', 
    icon: supabase, 
    category: 'Base de Données', 
    level: 75,
    description: 'Alternative open source à Firebase avec base de données PostgreSQL.'
  },
  { 
    name: 'git', 
    displayName: 'Git', 
    icon: git, 
    category: 'Outils', 
    level: 90,
    description: 'Système de contrôle de version distribué pour gérer le code source.'
  },
  { 
    name: 'vscode', 
    displayName: 'VS Code', 
    icon: vscode, 
    category: 'Outils', 
    level: 95,
    description: 'Éditeur de code source léger et puissant avec de nombreuses extensions.'
  },
  { 
    name: 'intellijidea', 
    displayName: 'IntelliJ IDEA', 
    icon: intellijidea, 
    category: 'Outils', 
    level: 70,
    description: 'IDE Java puissant avec support pour de nombreux langages.'
  },
  { 
    name: 'phpstorm', 
    displayName: 'PhpStorm', 
    icon: phpstorm, 
    category: 'Outils', 
    level: 75,
    description: 'IDE spécialisé pour le développement PHP avec des outils avancés.'
  },
  { 
    name: 'postman', 
    displayName: 'Postman', 
    icon: postman, 
    category: 'Outils', 
    level: 85,
    description: 'Plateforme de test et documentation d\'API pour développeurs.'
  },
  { 
    name: 'npm', 
    displayName: 'NPM', 
    icon: npm, 
    category: 'Outils', 
    level: 88,
    description: 'Gestionnaire de paquets pour JavaScript et Node.js.'
  },
  { 
    name: 'jwt', 
    displayName: 'JWT', 
    icon: jwt, 
    category: 'Backend', 
    level: 80,
    description: 'Standard ouvert pour la transmission sécurisée d\'informations entre parties.'
  },
]);

const filteredSkills = computed(() => {
  if (selectedCategory.value === 'Toutes') {
    return skills.value;
  }
  return skills.value.filter(skill => skill.category === selectedCategory.value);
});

const selectSkill = (skill) => {
  selectedSkill.value = skill;
};

// Animations GSAP
const beforeEnter = (el) => {
  el.style.opacity = 0;
  el.style.transform = 'translateY(30px) scale(0.8)';
};

const enter = (el, done) => {
  const index = el.dataset.index;
  gsap.to(el, {
    opacity: 1,
    y: 0,
    scale: 1,
    duration: 0.6,
    ease: 'back.out(1.7)',
    delay: index * 0.1,
    onComplete: done,
  });
};

onMounted(() => {
  // Animation d'entrée pour les éléments principaux
  gsap.from('h1', {
    duration: 1.2,
    y: 50,
    opacity: 0,
    ease: 'power3.out',
  });
  
  gsap.from('.filter-btn', {
    duration: 0.8,
    y: 30,
    opacity: 0,
    stagger: 0.1,
    delay: 0.3,
    ease: 'power2.out',
  });
});
</script>

<style scoped>
/* Transitions des cartes de compétences */
.skill-card-move,
.skill-card-enter-active,
.skill-card-leave-active {
  transition: all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.skill-card-enter-from {
  opacity: 0;
  transform: translateY(30px) scale(0.8);
}

.skill-card-leave-to {
  opacity: 0;
  transform: translateY(-30px) scale(0.8);
}

/* Transition de la modal */
.modal-enter-active,
.modal-leave-active {
  transition: all 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
  transform: scale(0.9);
}

/* Effet de glow au hover */
.skill-card:hover {
  box-shadow: 0 20px 40px rgba(6, 182, 212, 0.1), 0 0 0 1px rgba(6, 182, 212, 0.1);
}

/* Animation des barres de progression */
.skill-card:hover .h-1\.5 > div {
  animation: progressGlow 2s ease-in-out infinite alternate;
}

@keyframes progressGlow {
  0% {
    box-shadow: 0 0 5px rgba(6, 182, 212, 0.5);
  }
  100% {
    box-shadow: 0 0 20px rgba(6, 182, 212, 0.8);
  }
}
</style>