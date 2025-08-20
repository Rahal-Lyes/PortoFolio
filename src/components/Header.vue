<template>
  <div class="fixed w-full bg-gradient-to-r from-slate-900/95 via-gray-900/95 to-slate-900/95 backdrop-blur-xl text-white z-50 border-b border-gray-700/50 shadow-2xl">
    <div class="relative">
      <!-- Mobile Menu Button -->
      <div class="sm:hidden absolute top-5 right-5 z-60">
        <button
          @click="showNavBar"
          class="relative p-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-400 shadow-lg hover:shadow-cyan-500/25"
          :class="{ 'rotate-90': navBar }"
        >
          <div class="w-6 h-6 flex flex-col justify-center items-center">
            <span
              class="block w-6 h-0.5 bg-white transition-all duration-300 transform rounded-full"
              :class="navBar ? 'rotate-45 translate-y-1.5' : '-translate-y-1.5'"
            ></span>
            <span
              class="block w-6 h-0.5 bg-white transition-all duration-300 rounded-full"
              :class="navBar ? 'opacity-0 scale-0' : 'opacity-100 scale-100'"
            ></span>
            <span
              class="block w-6 h-0.5 bg-white transition-all duration-300 transform rounded-full"
              :class="navBar ? '-rotate-45 -translate-y-1.5' : 'translate-y-1.5'"
            ></span>
          </div>
        </button>
      </div>

      <div class="flex justify-between mx-6 max-md:flex-col items-center relative">
        <!-- Logo Section Enhanced -->
        <router-link to="/" class="group">
          <div class="flex gap-4 items-center py-5 transition-all duration-500 group-hover:scale-105">
            <transition name="img" appear>
              <div class="relative">
                <!-- Glowing effect -->
                <div class="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 blur-md opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                <img
                  src="../assets/images/dv150.png"
                  alt="Lyes Rahal"
                  class="relative rounded-full w-16 h-16 border-3 border-gradient-to-r from-cyan-400 to-blue-500 shadow-2xl transition-all duration-500 group-hover:shadow-cyan-400/50 group-hover:rotate-12"
                />
                <!-- Animated ring -->
                <div class="absolute inset-0 rounded-full border-2 border-cyan-400/20 animate-pulse"></div>
              </div>
            </transition>
            <div class="flex flex-col">
              <h1
                class="text-3xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent cursor-pointer transition-all duration-500 group-hover:scale-105"
                id="title"
              >
                Lyes Rahal
              </h1>
              <span class="text-sm text-gray-300 opacity-70 group-hover:opacity-100 transition-all duration-500 font-medium">
                ✨ Développeur Full Stack
              </span>
            </div>
          </div>
        </router-link>

        <!-- Desktop Navbar Enhanced -->
        <nav class="hidden sm:flex items-center py-4" id="nav">
          <ul class="flex gap-6 text-slate-300">
            <li
              v-for="(item, index) in nav"
              :key="item.name"
              class="relative group"
              :style="{ '--delay': index * 0.1 + 's' }"
            >
              <router-link
                :to="item.path"
                class="flex items-center gap-3 px-5 py-3 rounded-xl transition-all duration-300 hover:bg-gradient-to-r hover:from-gray-700/50 hover:to-gray-600/50 hover:text-cyan-400 hover:scale-105 hover:shadow-xl hover:shadow-cyan-400/20 group backdrop-blur-sm border border-transparent hover:border-cyan-500/30"
                active-class="text-cyan-400 bg-gradient-to-r from-gray-700/40 to-gray-600/40 border-cyan-500/50 shadow-lg shadow-cyan-400/20"
              >
                <div class="relative">
                  <font-awesome-icon
                    :icon="['fas', item.icon]"
                    class="text-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-12"
                  />
                  <!-- Icon glow effect -->
                  <div class="absolute inset-0 blur-sm opacity-0 group-hover:opacity-50 transition-opacity duration-300">
                    <font-awesome-icon
                      :icon="['fas', item.icon]"
                      class="text-lg text-cyan-400"
                    />
                  </div>
                </div>
                <span class="text-lg font-medium">{{ item.name }}</span>
              </router-link>
              
              <!-- Enhanced hover effect -->
              <div class="absolute -bottom-1 left-1/2 w-0 h-1 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 transition-all duration-500 group-hover:w-full group-hover:left-0 rounded-full shadow-lg shadow-cyan-400/50"></div>
            </li>
          </ul>
        </nav>

        <!-- Mobile Navbar Overlay Enhanced -->
        <transition name="overlay">
          <div
            v-if="navBar"
            class="fixed inset-0 bg-black/60 backdrop-blur-md sm:hidden z-40"
            @click="navBar = false"
          ></div>
        </transition>

        <!-- Mobile Navbar Enhanced -->
        <transition name="navBar" appear @before-enter="beforeEnter" @enter="enter" @leave="leave">
          <nav
            v-if="navBar"
            class="fixed top-0 left-0 h-screen w-80 bg-gradient-to-br from-slate-900/95 via-gray-900/95 to-slate-800/95 sm:hidden z-50 shadow-2xl border-r border-gray-600/50 backdrop-blur-xl"
            id="navbar"
          >
            <div class="flex flex-col h-full relative overflow-hidden">
              <!-- Animated background elements -->
              <div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 rounded-full blur-3xl"></div>
              <div class="absolute bottom-20 left-0 w-24 h-24 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-2xl"></div>
              
              <!-- Mobile Header Enhanced -->
              <div class="p-6 border-b border-gray-600/30 relative z-10">
                <div class="flex items-center gap-4">
                  <div class="relative">
                    <img
                      src="../assets/images/dv150.png"
                      alt="Lyes Rahal"
                      class="rounded-full w-14 h-14 border-2 border-cyan-500 shadow-xl shadow-cyan-500/30"
                    />
                    <div class="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 opacity-20 animate-pulse"></div>
                  </div>
                  <div>
                    <h2 class="text-xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                      Lyes Rahal
                    </h2>
                    <p class="text-sm text-gray-400 font-medium">🚀 Navigation Menu</p>
                  </div>
                </div>
              </div>

              <!-- Mobile Menu Items Enhanced -->
              <div class="flex-1 p-6 relative z-10">
                <ul class="flex flex-col gap-3">
                  <li
                    v-for="(item, index) in nav"
                    :key="item.name"
                    :style="{ '--mobile-delay': index * 0.1 + 's' }"
                    class="mobile-nav-item"
                  >
                    <router-link
                      :to="item.path"
                      @click="navBar = false"
                      class="flex items-center gap-4 p-4 rounded-2xl transition-all duration-500 hover:bg-gradient-to-r hover:from-gray-700/50 hover:to-gray-600/30 hover:text-cyan-400 hover:scale-105 hover:shadow-xl hover:shadow-cyan-400/20 group border border-gray-600/20 hover:border-cyan-500/50 backdrop-blur-sm"
                      active-class="text-cyan-400 bg-gradient-to-r from-gray-700/40 to-gray-600/30 border-cyan-500/60 shadow-lg shadow-cyan-400/20"
                    >
                      <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-700/50 to-gray-600/50 flex items-center justify-center transition-all duration-500 group-hover:from-cyan-500/20 group-hover:to-blue-500/20 group-hover:scale-110 border border-gray-600/30">
                        <font-awesome-icon
                          :icon="['fas', item.icon]"
                          class="text-xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-12"
                        />
                      </div>
                      <div class="flex-1">
                        <span class="text-lg font-semibold">{{ item.name }}</span>
                        <div class="h-0.5 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 mt-1"></div>
                      </div>
                      <div class="transform transition-all duration-500 group-hover:translate-x-2 group-hover:scale-110">
                        <font-awesome-icon
                          :icon="['fas', 'chevron-right']"
                          class="text-sm opacity-50 group-hover:opacity-100 text-cyan-400"
                        />
                      </div>
                    </router-link>
                  </li>
                </ul>
              </div>

              <!-- Mobile Footer Enhanced -->
              <div class="p-6 border-t border-gray-600/30 relative z-10">
                <div class="text-center">
                  <div class="flex items-center justify-center gap-2 mb-2">
                    <div class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <p class="text-sm text-gray-300 font-medium">© 2024 Lyes Rahal</p>
                  </div>
                  <p class="text-xs text-gray-400 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 px-3 py-1 rounded-full inline-block">
                    ⚡ Développeur Full Stack
                  </p>
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
    setTimeout(() => {
      navBar.value = false;
    }, 12000);
  }
};

const nav = [
  { name: 'Home', path: '/', icon: 'house' },
  { name: 'Skills', path: '/skills', icon: 'laptop-code' },
  { name: 'About', path: '/about', icon: 'user' },
  { name: 'Projects', path: '/projects', icon: 'project-diagram' },
];

// Enhanced GSAP animations
const beforeEnter = (el) => {
  gsap.set(el, { x: -320, opacity: 0, scale: 0.9 });
  gsap.set('.mobile-nav-item', { x: -80, opacity: 0, scale: 0.8 });
};


 

</script>

<style scoped>
/* Enhanced transitions */
.navBar-enter-active,
.navBar-leave-active {
  transition: none;
}

.overlay-enter-active,
.overlay-leave-active {
  transition: opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
.overlay-enter-from,
.overlay-leave-to {
  opacity: 0;
}

/* Custom gradient border effect */
.border-gradient-to-r {
  border-image: linear-gradient(to right, #22d3ee, #3b82f6) 1;
}

/* Enhanced scrollbar */
#navbar {
  scrollbar-width: thin;
  scrollbar-color: #22d3ee #1f2937;
}

#navbar::-webkit-scrollbar {
  width: 8px;
}

#navbar::-webkit-scrollbar-track {
  background: linear-gradient(to bottom, #1f2937, #111827);
  border-radius: 4px;
}

#navbar::-webkit-scrollbar-thumb {
  background: linear-gradient(to bottom, #22d3ee, #3b82f6);
  border-radius: 4px;
}

#navbar::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(to bottom, #06b6d4, #2563eb);
}

/* Enhanced focus styles */
button:focus-visible,
a:focus-visible {
  outline: 2px solid #22d3ee;
  outline-offset: 3px;
  border-radius: 8px;
}

/* Subtle animation classes */
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

.group:hover img {
  animation: float 2s ease-in-out infinite;
}
</style>