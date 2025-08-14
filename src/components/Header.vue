<template>
  <div class="shadow-2xl fixed w-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 backdrop-blur-md text-white z-50 border-b border-gray-700">
    <div class="relative">
      <!-- Mobile Menu Button -->
      <div class="sm:hidden absolute top-6 right-6 z-60">
        <button
          @click="showNavBar"
          class="relative p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          :class="{ 'rotate-90': navBar }"
        >
          <div class="w-6 h-6 flex flex-col justify-center items-center">
            <span
              class="block w-5 h-0.5 bg-white transition-all duration-300 transform"
              :class="navBar ? 'rotate-45 translate-y-1' : '-translate-y-1'"
            ></span>
            <span
              class="block w-5 h-0.5 bg-white transition-all duration-300"
              :class="navBar ? 'opacity-0' : 'opacity-100'"
            ></span>
            <span
              class="block w-5 h-0.5 bg-white transition-all duration-300 transform"
              :class="navBar ? '-rotate-45 -translate-y-1' : 'translate-y-1'"
            ></span>
          </div>
        </button>
      </div>

      <div class="flex justify-between mx-6 max-md:flex-col items-center relative">
        <!-- Logo Section -->
        <router-link to="/" class="group">
          <div class="flex gap-4 items-center py-4 transition-transform duration-300 group-hover:scale-105">
            <transition name="img" appear>
              <div class="relative">
                <img
                  src="../assets/images/dv150.png"
                  alt="Lyes Rahal"
                  class="rounded-full w-16 h-16 border-2 border-cyan-500 shadow-lg shadow-cyan-500/25 transition-all duration-300 group-hover:shadow-cyan-400/50 group-hover:border-cyan-400"
                />
                <div class="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </div>
            </transition>
            <div class="flex flex-col">
              <h1
                class="text-2xl font-sixty bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent font-bold cursor-pointer transition-all duration-300"
                id="title"
              >
                Lyes Rahal
              </h1>
              <span class="text-sm text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Développeur Full Stack
              </span>
            </div>
          </div>
        </router-link>

        <!-- Desktop Navbar -->
        <nav class="hidden sm:flex items-center py-4" id="nav">
          <ul class="flex gap-8 text-slate-300">
            <li
              v-for="(item, index) in nav"
              :key="item.name"
              class="relative group"
              :style="{ '--delay': index * 0.1 + 's' }"
            >
              <router-link
                :to="item.path"
                class="flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-300 hover:bg-gray-700/50 hover:text-cyan-400 hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/20 group"
                active-class="text-cyan-400 bg-gray-700/30 shadow-md shadow-cyan-400/10"
              >
                <font-awesome-icon
                  :icon="['fas', item.icon]"
                  class="text-lg transition-transform duration-300 group-hover:scale-110"
                />
                <span class="text-lg font-medium">{{ item.name }}</span>
              </router-link>
              
              <!-- Hover effect bar -->
              <div class="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 transition-all duration-300 group-hover:w-full group-hover:left-0 rounded-full"></div>
            </li>
          </ul>
        </nav>

        <!-- Mobile Navbar Overlay -->
        <transition name="overlay">
          <div
            v-if="navBar"
            class="fixed inset-0 bg-black/50 backdrop-blur-sm sm:hidden z-40"
            @click="navBar = false"
          ></div>
        </transition>

        <!-- Mobile Navbar -->
        <transition name="navBar" appear @before-enter="beforeEnter" @enter="enter" @leave="leave">
          <nav
            v-if="navBar"
            class="fixed top-0 left-0 h-screen w-80 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 sm:hidden z-50 shadow-2xl border-r border-gray-700"
            id="navbar"
          >
            <div class="flex flex-col h-full">
              <!-- Mobile Header -->
              <div class="p-6 border-b border-gray-700">
                <div class="flex items-center gap-4">
                  <img
                    src="../assets/images/dv150.png"
                    alt="Lyes Rahal"
                    class="rounded-full w-12 h-12 border-2 border-cyan-500 shadow-lg shadow-cyan-500/25"
                  />
                  <div>
                    <h2 class="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                      Lyes Rahal
                    </h2>
                    <p class="text-sm text-gray-400">Menu Navigation</p>
                  </div>
                </div>
              </div>

              <!-- Mobile Menu Items -->
              <div class="flex-1 p-6">
                <ul class="flex flex-col gap-4">
                  <li
                    v-for="(item, index) in nav"
                    :key="item.name"
                    :style="{ '--mobile-delay': index * 0.1 + 's' }"
                    class="mobile-nav-item"
                  >
                    <router-link
                      :to="item.path"
                      @click="navBar = false"
                      class="flex items-center gap-4 p-4 rounded-xl transition-all duration-300 hover:bg-gray-700/50 hover:text-cyan-400 hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/20 group border border-transparent hover:border-cyan-500/30"
                      active-class="text-cyan-400 bg-gray-700/30 border-cyan-500/50 shadow-md shadow-cyan-400/10"
                    >
                      <div class="w-12 h-12 rounded-lg bg-gray-700 flex items-center justify-center transition-colors duration-300 group-hover:bg-cyan-500/20">
                        <font-awesome-icon
                          :icon="['fas', item.icon]"
                          class="text-xl transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                      <span class="text-lg font-medium">{{ item.name }}</span>
                      <font-awesome-icon
                        :icon="['fas', 'chevron-right']"
                        class="ml-auto text-sm opacity-50 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1"
                      />
                    </router-link>
                  </li>
                </ul>
              </div>

              <!-- Mobile Footer -->
              <div class="p-6 border-t border-gray-700">
                <div class="text-center text-gray-400">
                  <p class="text-sm">© 2024 Lyes Rahal</p>
                  <p class="text-xs mt-1">Développeur Full Stack</p>
                </div>
              </div>
            </div>
          </nav>
        </transition>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import gsap from 'gsap';

const navBar = ref(false);

const showNavBar = () => {
  navBar.value = !navBar.value;
  if (navBar.value) {
    // Auto-close after 10 seconds instead of 5
    setTimeout(() => {
      navBar.value = false;
    }, 10000);
  }
};

const nav = [
  { name: 'Home', path: '/', icon: 'house' },
  { name: 'Skills', path: '/skills', icon: 'laptop-code' },
  { name: 'About', path: '/about', icon: 'user' },
  { name: 'Projects', path: '/projects', icon: 'project-diagram' },
];

// GSAP hooks for mobile navbar transitions
const beforeEnter = (el) => {
  gsap.set(el, { x: -320, opacity: 0 });
  gsap.set('.mobile-nav-item', { x: -50, opacity: 0 });
};

const enter = (el, done) => {
  const tl = gsap.timeline({ onComplete: done });
  
  tl.to(el, {
    x: 0,
    opacity: 1,
    duration: 0.6,
    ease: 'power2.out',
  })
  .to('.mobile-nav-item', {
    x: 0,
    opacity: 1,
    duration: 0.4,
    stagger: 0.1,
    ease: 'power2.out',
  }, '-=0.3');
};

const leave = (el, done) => {
  const tl = gsap.timeline({ onComplete: done });
  
  tl.to('.mobile-nav-item', {
    x: -50,
    opacity: 0,
    duration: 0.3,
    stagger: 0.05,
    ease: 'power2.in',
  })
  .to(el, {
    x: -320,
    opacity: 0,
    duration: 0.4,
    ease: 'power2.in',
  }, '-=0.1');
};

onMounted(() => {
  // Enhanced logo animation
  const tl = gsap.timeline();
  
  tl.from('img', {
    duration: 1.2,
    opacity: 0,
    scale: 0.3,
    rotation: -180,
    ease: 'back.out(1.7)',
  })
  .from('#title', {
    duration: 1,
    opacity: 0,
    y: 30,
    ease: 'power2.out',
  }, '-=0.5');

  // Desktop navigation items animation
  gsap.from('#nav li', {
    duration: 0.8,
    opacity: 0,
    y: -30,
    scale: 0.8,
    ease: 'back.out(1.7)',
    stagger: 0.15,
    delay: 0.5,
  });
});
</script>

<style scoped>
/* Enhanced transitions */
.navBar-enter-active {
  transition: none;
}
.navBar-leave-active {
  transition: none;
}

.overlay-enter-active,
.overlay-leave-active {
  transition: opacity 0.3s ease;
}
.overlay-enter-from,
.overlay-leave-to {
  opacity: 0;
}

/* Mobile nav items delayed animation */
.mobile-nav-item {
  animation-delay: var(--mobile-delay);
}

/* Custom scrollbar for mobile nav */
#navbar {
  scrollbar-width: thin;
  scrollbar-color: #374151 #1f2937;
}

#navbar::-webkit-scrollbar {
  width: 6px;
}

#navbar::-webkit-scrollbar-track {
  background: #1f2937;
}

#navbar::-webkit-scrollbar-thumb {
  background: #374151;
  border-radius: 3px;
}

#navbar::-webkit-scrollbar-thumb:hover {
  background: #4b5563;
}

/* Desktop nav item animations */
#nav li {
  animation-delay: var(--delay);
}

/* Focus styles for accessibility */
button:focus-visible,
a:focus-visible {
  outline: 2px solid #06b6d4;
  outline-offset: 2px;
}
</style>