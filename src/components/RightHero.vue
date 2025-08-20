<template>
  <div class="h-screen flex items-center justify-center w-full lg:w-1/2 mt-7 relative overflow-hidden">
    <!-- Enhanced background elements -->
    <div class="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50 opacity-50"></div>
    <div class="absolute top-20 left-10 w-40 h-40 bg-gradient-to-r from-cyan-300/20 to-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
    <div class="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-purple-300/20 to-pink-400/20 rounded-full blur-2xl animate-bounce"></div>
    <div class="absolute top-1/2 left-1/4 w-20 h-20 bg-gradient-to-r from-green-300/20 to-emerald-400/20 rounded-full blur-xl animate-pulse"></div>
    
    <!-- Main skills circle container -->
    <div class="relative">
      <!-- Central hub -->
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
        <div class="w-32 h-32 bg-gradient-to-br from-white via-cyan-50 to-blue-100 rounded-full shadow-2xl border-4 border-cyan-200 flex items-center justify-center backdrop-blur-sm">
          <div class="text-center">
            <div class="text-3xl mb-2">⚡</div>
            <div class="text-sm font-bold text-blue-800">Skills</div>
            <div class="text-xs text-gray-600">& Tools</div>
          </div>
          <!-- Pulsing ring effect -->
          <div class="absolute inset-0 rounded-full border-2 border-cyan-400/30 animate-ping"></div>
          <div class="absolute inset-0 rounded-full border-2 border-blue-400/20 animate-pulse scale-110"></div>
        </div>
      </div>

      <!-- Skills icons container -->
      <div ref="skillsContainer" class="w-[700px] h-[700px] relative">
        <!-- Orbit rings for visual enhancement -->
        <div class="absolute inset-0 rounded-full border border-cyan-200/30 animate-spin-slow"></div>
        <div class="absolute inset-8 rounded-full border border-blue-200/20 animate-spin-reverse-slow"></div>
        <div class="absolute inset-16 rounded-full border border-purple-200/20 animate-pulse"></div>

        <div
          v-for="(skill, index) in skills"
          :key="index"
          :ref="el => skillRefs[index] = el"
          class="absolute group cursor-pointer"
          :style="{ '--skill-delay': index * 0.1 + 's' }"
        
        >
          <!-- Skill icon container with enhanced styling -->
          <div class="relative">
            <!-- Glowing background effect -->
            <div 
              class="absolute inset-0 rounded-2xl blur-lg opacity-0 group-hover:opacity-60 transition-all duration-500 scale-110"
              :class="skill.glowColor"
            ></div>
            
            <!-- Main skill card -->
            <div 
              class="relative w-20 h-20 rounded-2xl shadow-xl transition-all duration-500 group-hover:scale-125 group-hover:-rotate-12 group-hover:shadow-2xl border-2 backdrop-blur-sm"
              :class="skill.bgClass"
            >
              <img
                :src="skill.icon"
                :alt="skill.name"
                class="w-12 h-12 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 group-hover:scale-110"
              />
              
              <!-- Skill level indicator -->
              <div class="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                <div class="flex gap-1">
                  <div 
                    v-for="i in 5" 
                    :key="i"
                    class="w-1 h-3 rounded-full transition-all duration-300"
                    :class="i <= skill.level ? 'bg-yellow-400 shadow-lg shadow-yellow-400/50' : 'bg-gray-300'"
                  ></div>
                </div>
              </div>

              <!-- Skill name tooltip -->
              <div class="absolute -top-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                <div class="bg-gray-900 text-white px-3 py-2 rounded-lg text-sm font-medium shadow-xl border border-gray-700 whitespace-nowrap">
                  {{ skill.name }}
                  <div class="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                </div>
              </div>

              <!-- Interactive particles effect -->
              <div 
                v-for="particle in 3" 
                :key="particle"
                class="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping"
                :style="getParticleStyle(particle)"
              ></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Category labels -->
      <div class="absolute -bottom-20 left-1/2 transform -translate-x-1/2 text-center">
        <div class="flex flex-wrap gap-4 justify-center">
          <span 
            v-for="category in categories" 
            :key="category.name"
            class="px-4 py-2 rounded-full text-sm font-medium border backdrop-blur-sm transition-all duration-300 hover:scale-105"
            :class="category.class"
          >
            {{ category.icon }} {{ category.name }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, reactive } from 'vue';
import gsap from 'gsap';

// Import skill icons (vous devrez ajuster ces imports selon votre structure)
import html5 from '@/assets/social-links/programming/html5.svg';
import css from '@/assets/social-links/programming/css.svg';
import javascript from '@/assets/social-links/programming/javascript.svg';
import jquery from '@/assets/social-links/programming/jQuery_light.svg';
import git from '@/assets/social-links/programming/git.svg';
import intellijidea from '@/assets/social-links/programming/intellijidea.svg';
import jwt from '@/assets/social-links/programming/jwt.svg';
import mysql from '@/assets/social-links/programming/mysql.svg';
import npm from '@/assets/social-links/programming/npm.svg';
import pinia from '@/assets/social-links/programming/pinia.svg';
import postman from '@/assets/social-links/programming/postman.svg';
import python from '@/assets/social-links/programming/python.svg';
import tailwindcss from '@/assets/social-links/programming/tailwindcss.svg';
import vscode from '@/assets/social-links/programming/vscode.svg';
import vue from '@/assets/social-links/programming/vue.svg';
import django from '@/assets/social-links/programming/django.svg';
import docker from '@/assets/social-links/programming/docker.svg';
import linux from '@/assets/social-links/programming/linux.svg';
import postgresql from '@/assets/social-links/programming/postgresql.svg';
import restApi from '@/assets/social-links/programming/rest-api.png';

const skillsContainer = ref(null);
const skillRefs = ref([]);

// Enhanced skills data with categories and levels
const skills = reactive([
  { name: 'HTML5', icon: html5, level: 5, category: 'frontend', bgClass: 'bg-gradient-to-br from-orange-100 to-orange-200 border-orange-300', glowColor: 'bg-orange-400' },
  { name: 'CSS3', icon: css, level: 5, category: 'frontend', bgClass: 'bg-gradient-to-br from-blue-100 to-blue-200 border-blue-300', glowColor: 'bg-blue-400' },
  { name: 'JavaScript', icon: javascript, level: 4, category: 'frontend', bgClass: 'bg-gradient-to-br from-yellow-100 to-yellow-200 border-yellow-300', glowColor: 'bg-yellow-400' },
  { name: 'Vue.js', icon: vue, level: 5, category: 'frontend', bgClass: 'bg-gradient-to-br from-green-100 to-green-200 border-green-300', glowColor: 'bg-green-400' },
  { name: 'jQuery', icon: jquery, level: 4, category: 'frontend', bgClass: 'bg-gradient-to-br from-blue-100 to-indigo-200 border-blue-300', glowColor: 'bg-blue-500' },
  { name: 'Tailwind CSS', icon: tailwindcss, level: 5, category: 'frontend', bgClass: 'bg-gradient-to-br from-cyan-100 to-cyan-200 border-cyan-300', glowColor: 'bg-cyan-400' },
  { name: 'Python', icon: python, level: 4, category: 'backend', bgClass: 'bg-gradient-to-br from-blue-100 to-yellow-200 border-blue-300', glowColor: 'bg-blue-500' },
  { name: 'Django', icon: django, level: 4, category: 'backend', bgClass: 'bg-gradient-to-br from-green-100 to-green-200 border-green-400', glowColor: 'bg-green-500' },
  { name: 'REST API', icon: restApi, level: 4, category: 'backend', bgClass: 'bg-gradient-to-br from-purple-100 to-purple-200 border-purple-300', glowColor: 'bg-purple-400' },
  { name: 'MySQL', icon: mysql, level: 4, category: 'database', bgClass: 'bg-gradient-to-br from-blue-100 to-orange-200 border-blue-300', glowColor: 'bg-orange-500' },
  { name: 'PostgreSQL', icon: postgresql, level: 3, category: 'database', bgClass: 'bg-gradient-to-br from-blue-100 to-blue-200 border-blue-400', glowColor: 'bg-blue-600' },
  { name: 'Git', icon: git, level: 4, category: 'tools', bgClass: 'bg-gradient-to-br from-red-100 to-red-200 border-red-300', glowColor: 'bg-red-400' },
  { name: 'Docker', icon: docker, level: 3, category: 'tools', bgClass: 'bg-gradient-to-br from-blue-100 to-cyan-200 border-blue-300', glowColor: 'bg-blue-500' },
  { name: 'Linux', icon: linux, level: 3, category: 'tools', bgClass: 'bg-gradient-to-br from-gray-100 to-yellow-200 border-gray-300', glowColor: 'bg-yellow-500' },
  { name: 'VS Code', icon: vscode, level: 5, category: 'tools', bgClass: 'bg-gradient-to-br from-blue-100 to-blue-200 border-blue-300', glowColor: 'bg-blue-500' },
  { name: 'IntelliJ IDEA', icon: intellijidea, level: 4, category: 'tools', bgClass: 'bg-gradient-to-br from-purple-100 to-pink-200 border-purple-300', glowColor: 'bg-purple-500' },
  { name: 'Postman', icon: postman, level: 4, category: 'tools', bgClass: 'bg-gradient-to-br from-orange-100 to-orange-200 border-orange-300', glowColor: 'bg-orange-500' },
  { name: 'NPM', icon: npm, level: 4, category: 'tools', bgClass: 'bg-gradient-to-br from-red-100 to-red-200 border-red-300', glowColor: 'bg-red-500' },
  { name: 'JWT', icon: jwt, level: 4, category: 'backend', bgClass: 'bg-gradient-to-br from-purple-100 to-pink-200 border-purple-300', glowColor: 'bg-purple-500' },
  { name: 'Pinia', icon: pinia, level: 4, category: 'frontend', bgClass: 'bg-gradient-to-br from-yellow-100 to-green-200 border-yellow-300', glowColor: 'bg-green-500' }
]);

const categories = [
  { name: 'Frontend', icon: '🎨', class: 'bg-gradient-to-r from-cyan-50 to-blue-50 text-cyan-700 border-cyan-200 hover:shadow-lg hover:shadow-cyan-200/50' },
  { name: 'Backend', icon: '⚙️', class: 'bg-gradient-to-r from-green-50 to-emerald-50 text-green-700 border-green-200 hover:shadow-lg hover:shadow-green-200/50' },
  { name: 'Database', icon: '🗄️', class: 'bg-gradient-to-r from-purple-50 to-pink-50 text-purple-700 border-purple-200 hover:shadow-lg hover:shadow-purple-200/50' },
  { name: 'Tools', icon: '🛠️', class: 'bg-gradient-to-r from-orange-50 to-red-50 text-orange-700 border-orange-200 hover:shadow-lg hover:shadow-orange-200/50' }
];



// Generate random particle positions
const getParticleStyle = (particle) => {
  const positions = [
    { top: '10%', right: '10%' },
    { bottom: '10%', left: '10%' },
    { top: '50%', right: '5%' }
  ];
  return positions[particle - 1];
};

onMounted(() => {
  const skillElements = skillRefs.value.filter(el => el);
  const totalSkills = skillElements.length;
  const radius = 300; // Rayon du cercle

  // Position skills in a perfect circle
  skillElements.forEach((skill, index) => {
    const angle = (index / totalSkills) * Math.PI * 2;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;

    gsap.set(skill, {
      x: x + radius,
      y: y + radius,
      transformOrigin: 'center center',
    });

    // Enhanced entrance animation
    gsap.from(skill, {
      opacity: 0,
      scale: 0.3,
      rotation: -180,
      duration: 1,
      delay: index * 0.1,
      ease: 'elastic.out(1, 0.5)',
    });
  });

  // Container rotation with varying speeds for visual interest
  gsap.to(skillsContainer.value, {
    rotation: 360,
    duration: 60,
    ease: "none",
    repeat: -1,
  });

  // Counter-rotate individual skills to keep them upright
  skillElements.forEach((skill, index) => {
    gsap.to(skill, {
      rotation: -360,
      duration: 60,
      ease: "none",
      repeat: -1,
    });
  });

  // Animate categories
  gsap.from('.absolute.-bottom-20 span', {
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.1,
    ease: 'back.out(1.4)',
    delay: 2,
  });
});
</script>

<style scoped>
/* Custom animations */
@keyframes spin-slow {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@keyframes spin-reverse-slow {
  from { transform: rotate(360deg); }
  to { transform: rotate(0deg); }
}

.animate-spin-slow {
  animation: spin-slow 40s linear infinite;
}

.animate-spin-reverse-slow {
  animation: spin-reverse-slow 50s linear infinite;
}

/* Skill hover effects */
.group:hover .absolute.inset-0 {
  animation: pulse 1s ease-in-out infinite;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  [class*="w-[700px]"] {
    width: 500px !important;
  }
  
  [class*="h-[700px]"] {
    height: 500px !important;
  }
}

@media (max-width: 640px) {
  [class*="w-[700px]"] {
    width: 400px !important;
  }
  
  [class*="h-[700px]"] {
    height: 400px !important;
  }
  
  [class*="w-20"] {
    width: 4rem !important;
  }
  
  [class*="h-20"] {
    height: 4rem !important;
  }
}

/* Enhanced glow effects */
.group:hover .absolute.inset-0.rounded-2xl {
  animation: glow 2s ease-in-out infinite alternate;
}

@keyframes glow {
  from {
    opacity: 0;
    transform: scale(1.1);
  }
  to {
    opacity: 0.6;
    transform: scale(1.2);
  }
}
</style>