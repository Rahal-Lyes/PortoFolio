<template>
  <div class="shadow-lg fixed w-full bg-white">
    <div class="relative">
      <font-awesome-icon
      :icon="['fas', 'bars']"
      class="sm:invisible absolute top-10 right-6 text-xl cursor-pointer"
      @click="showNavBar"
    />
    <div class="flex justify-between mx-6 max-md:flex-col items-center">
      <router-link to="/">
        <div class="flex gap-3 items-center py-2">
          <transition name="img" appear>
            <img
              src="../assets/images/dv150.png"
              alt="Lyes Rahal"
              class="rounded-full w-14 h-14"
            />
          </transition>
          <h1
            class="text-2xl font-sixty text-cyan-500 font-semibold cursor-pointer"
            id="title"
          >
            Lyes Rahal
          </h1>
        </div>
      </router-link>

      <!-- Desktop Navbar -->
      <nav class="flex items-center max-sm:invisible py-2" id="nav">
        <ul class="flex gap-4 text-slate-600">
          <li
            v-for="item in nav"
            :key="item.name"
            class="hover:text-sky-600 cursor-pointer flex items-center"
          >
            <font-awesome-icon :icon="['fas', item.icon]" />
            <router-link class="text-xl px-2" :to="item.path">
              {{ item.name }}
            </router-link>
          </li>
        </ul>
      </nav>

      <!-- Mobile Navbar -->
      <transition name="navBar" appear @before-enter="beforeEnter" @enter="enter" @leave="leave">
        <nav
          v-if="navBar"
          class="flex items-center py-2 sm:invisible"
          id="navbar"
        >
          <ul class="flex flex-col gap-4 text-slate-600">
            <li
              v-for="item in nav"
              :key="item.name"
              class="hover:text-sky-600 cursor-pointer flex items-center"
            >
              <font-awesome-icon :icon="['fas', item.icon]" />
              <router-link class="text-xl px-2" :to="item.path">
                {{ item.name }}
              </router-link>
            </li>
          </ul>
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
  setTimeout(() => {
    navBar.value = false;
  }, 5000);
};

const nav = [
  { name: 'Home', path: '/', icon: 'house' },
  { name: 'Skills', path: '/', icon: 'laptop-code' },
  { name: 'About', path: '/about', icon: 'user' },
  { name: 'Project', path: '/', icon: 'project-diagram' },
];

// GSAP hooks for transition lifecycle
const beforeEnter = (el) => {
  gsap.set(el, { opacity: 0, x: -200 });
};

const enter = (el, done) => {
  gsap.to(el, {
    opacity: 1,
    x: 0,
    duration: 0.5,
    ease: 'power1.out',
    onComplete: done,
  });
};

const leave = (el, done) => {
  gsap.to(el, {
    opacity: 0,
    x: -200,
    duration: 0.5,
    ease: 'power1.in',
    onComplete: done,
  });
};

onMounted(() => {
  gsap.from('img', {
    duration: 2,
    opacity: 0,
    scale: 0.5,
    ease: 'linear',
  });
  gsap.from('#title', {
    duration: 2,
    opacity: 0,
    scale: 0.5,
    ease: 'linear',
  });

  gsap.from('#nav li', {
    duration: 1.5,
    opacity: 0,
    y: -50,
    ease: 'power1.out',
    stagger: 0.3,
  });
});
</script>

<style>
/* Transition CSS for Navbar */
.navBar-enter-active,
.navBar-leave-active {
  transition: opacity 0.5s, transform 0.5s;
}
.navBar-enter-from {
  opacity: 0;
  transform: translateX(-200px);
}
.navBar-leave-to {
  opacity: 0;
  transform: translateX(-200px);
}
</style>
