<template>
  <div class="pt-24 w-full lg:w-1/2 overflow-hidden min-w-80 relative">
    <!-- Background animated elements -->
    <div class="absolute top-10 right-10 w-32 h-32 bg-gradient-to-r from-cyan-400/10 to-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
    <div class="absolute bottom-20 left-10 w-24 h-24 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-2xl animate-bounce"></div>
    
    <div class="bg-gradient-to-br from-sky-100 via-white to-blue-50 p-8 m-6 rounded-3xl min-w-80 shadow-2xl border border-sky-200/50 backdrop-blur-sm relative overflow-hidden">
      <!-- Decorative elements -->
      <div class="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-cyan-300/20 to-blue-400/20 rounded-full blur-2xl"></div>
      <div class="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-purple-300/20 to-pink-400/20 rounded-full blur-xl"></div>
      
      <div class="relative z-10">
        <!-- Enhanced Title Section -->
        <transition name="fade" appear>
          <div class="mb-6" ref="titleSection">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-lg shadow-green-500/50"></div>
              <small class="text-2xl lg:text-3xl text-blue-800 font-semibold tracking-wide">
                👋 Hello, I'm
              </small>
            </div>
            <h1 class="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-900 via-cyan-700 to-blue-800 bg-clip-text text-transparent leading-tight" ref="title">
              Lyes Rahal
            </h1>
            <div class="h-1 w-24 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full mt-4 shadow-lg"></div>
          </div>
        </transition>

        <!-- Enhanced Description -->
        <transition appear>
          <div class="mb-8" ref="description">
            <p class="text-blue-900 text-xl lg:text-2xl leading-relaxed font-medium">
              <span class="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent font-bold">
                ⚡ Full-Stack Developer
              </span>
              <span class="text-gray-700">based in</span>
              <span class="font-semibold text-blue-800">Algeria</span>.
            </p>
            <p class="text-blue-800 text-lg mt-4 leading-relaxed">
              With a <span class="font-bold text-cyan-700">Master's in Information Systems Engineering</span>, 
              I create <span class="font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">dynamic and responsive</span> 
              web applications using <span class="font-bold text-green-700">Vue.js</span>, 
              <span class="font-bold text-green-800">Django</span>, 
              <span class="font-bold text-blue-700">PHP</span>, and 
              <span class="font-bold text-orange-600">REST APIs</span>.
            </p>
          </div>
        </transition>

        <!-- Enhanced Action Buttons -->
        <transition ref="actionButtons">
          <div class="flex flex-col sm:flex-row gap-4 mb-8 items-center justify-center sm:justify-start">
            <a
              href="../../public/Computer-Scientiste v-2.pdf"
              class="group flex items-center gap-3 text-xl bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white px-8 py-4 rounded-2xl hover:from-yellow-400 hover:via-orange-400 hover:to-yellow-500 hover:text-gray-900 transition-all duration-500 transform hover:scale-105 hover:rotate-1 shadow-xl hover:shadow-2xl font-semibold border-2 border-transparent hover:border-yellow-400"
            >
              <span>Download CV</span>
              <div class="w-6 h-6 bg-white/20 rounded-lg flex items-center justify-center group-hover:bg-gray-900/20 transition-all duration-300 group-hover:rotate-12">
                <img
                  src="@/assets/social-links/pdf-svgrepo-com.svg"
                  width="16px"
                  height="16px"
                  alt="pdf"
                  class="transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div class="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-400 to-orange-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </a>
            
            <a
              href="mailto:lyesrahal.cs@gmail.com"
              class="group flex items-center gap-2 bg-gradient-to-r from-white to-gray-50 text-gray-900 px-8 py-4 rounded-2xl hover:from-cyan-50 hover:to-blue-50 transition-all duration-500 transform hover:scale-105 hover:-rotate-1 shadow-lg hover:shadow-xl font-semibold border-2 border-gray-200 hover:border-cyan-300 text-xl"
            >
              <span class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              Contact Me
              <div class="transform transition-transform duration-300 group-hover:translate-x-1">
                →
              </div>
            </a>
          </div>
        </transition>

        <!-- Enhanced Social Links -->
        <transition ref="socialLinks">
          <div class="flex justify-center sm:justify-start items-center gap-8">
            <div class="text-sm text-gray-600 font-medium mb-2 sm:mb-0">Connect with me:</div>
            <div class="flex gap-6">
              <a 
                href="https://github.com/Rahal-Lyes" 
                class="group relative"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div class="absolute inset-0 bg-gradient-to-r from-gray-400 to-gray-600 rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-all duration-300 scale-110"></div>
                <div class="relative bg-gradient-to-r from-gray-100 to-white p-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform group-hover:scale-110 group-hover:-rotate-3 border-2 border-gray-200 group-hover:border-gray-400">
                  <img
                    src="@/assets/social-links/Github_light.svg"
                    alt="GitHub"
                    width="32px"
                    height="32px"
                    class="transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
              </a>
              
              <a 
                href="https://linkedin.com/in/rahal-lyes" 
                class="group relative"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div class="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-all duration-300 scale-110"></div>
                <div class="relative bg-gradient-to-r from-blue-50 to-white p-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-3 border-2 border-blue-200 group-hover:border-blue-400">
                  <img
                    src="@/assets/social-links/linkedin.svg"
                    alt="LinkedIn"
                    width="32px"
                    height="32px"
                    class="transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
              </a>
            </div>
          </div>
        </transition>

        <!-- Stats Section -->
        <transition ref="statsSection">
          <div class="mt-12 grid grid-cols-3 gap-6 text-center">
            <div class="bg-gradient-to-br from-cyan-50 to-blue-50 p-4 rounded-xl border border-cyan-200/50">
              <div class="text-2xl font-bold text-cyan-700">1+</div>
              <div class="text-sm text-gray-600">Years Experience</div>
            </div>
            <div class="bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-xl border border-green-200/50">
              <div class="text-2xl font-bold text-green-700">10+</div>
              <div class="text-sm text-gray-600">Projects Completed</div>
            </div>
            <div class="bg-gradient-to-br from-purple-50 to-pink-50 p-4 rounded-xl border border-purple-200/50">
              <div class="text-2xl font-bold text-purple-700">5+</div>
              <div class="text-sm text-gray-600">Technologies</div>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script setup>
import { gsap } from 'gsap';
import { onMounted, ref } from 'vue';

const title = ref(null);
const titleSection = ref(null);
const description = ref(null);
const actionButtons = ref(null);
const socialLinks = ref(null);
const statsSection = ref(null);

onMounted(() => {
  // Create master timeline
  const tl = gsap.timeline();

  // Title section animation
  tl.from(titleSection.value, {
    y: -100,
    opacity: 0,
    duration: 1.2,
    ease: 'elastic.out(1, 0.6)',
  })
  
  // Description animation
  .from(description.value, {
    x: 200,
    opacity: 0,
    duration: 1,
    ease: 'power3.out',
  }, '-=0.8')
  
  // Action buttons animation
  .from(actionButtons.value, {
    scale: 0.5,
    opacity: 0,
    rotation: -10,
    duration: 1,
    ease: 'back.out(1.7)',
  }, '-=0.6')
  
  // Social links animation
  .from(socialLinks.value, {
    y: 50,
    opacity: 0,
    duration: 0.8,
    ease: 'bounce.out',
  }, '-=0.4')
  
  // Stats section animation
  .from(statsSection.value, {
    y: 80,
    opacity: 0,
    duration: 1,
    ease: 'power2.out',
  }, '-=0.3');

  // Individual stat cards animation
  gsap.from(statsSection.value?.children || [], {
    scale: 0.8,
    rotation: -5,
    duration: 0.6,
    stagger: 0.1,
    ease: 'back.out(1.4)',
    delay: 1.8,
  });

  // Continuous floating animation for the main container
  gsap.to('.bg-gradient-to-br', {
    y: -10,
    duration: 3,
    yoyo: true,
    repeat: -1,
    ease: 'power2.inOut',
  });
});
</script>

<style scoped>
/* Enhanced fade transition */
.fade-enter-active {
  transition: all 0.8s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(30px) scale(0.95);
}

/* Custom scrollbar if needed */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f5f9;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(to bottom, #22d3ee, #3b82f6);
  border-radius: 4px;
}

/* Hover animations */
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-8px); }
}

.group:hover {
  animation: float 2s ease-in-out infinite;
}

/* Gradient text animation */
@keyframes gradient-shift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.bg-clip-text {
  background-size: 200% 200%;
  animation: gradient-shift 3s ease infinite;
}

/* Button ripple effect */
.group::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  transition: width 0.6s, height 0.6s, top 0.6s, left 0.6s;
  transform: translate(-50%, -50%);
  z-index: 0;
}

.group:hover::before {
  width: 300px;
  height: 300px;
}

/* Responsive adjustments */
@media (max-width: 640px) {
  .text-5xl {
    font-size: 2.5rem;
  }
  
  .text-6xl {
    font-size: 3rem;
  }
}
</style>