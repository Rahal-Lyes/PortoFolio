<template>
  <div class=" shadow-lg">
    <div class="flex justify-between mx-6  max-md:flex-col items-center">
      <router-link to="/">
        <div class=" flex gap-3 items-center py-2">
        <transition name="img" appear="true">
          <img src="../assets/images/dv150.png" alt="Lyes Rahal" class="rounded-full w-14 h-14">
        </transition>

        <h1 class="text-xl font-sixty text-slate-600 font-semibold cursor-pointer" id="title">Lyes Rahal</h1>
    
      </div>
      </router-link>
      <nav class=" flex items-center max-sm:invisible py-2" id="nav">
        <ul class="flex gap-4  text-slate-600">
    
          <li v-for="item in nav" :key="item.name" class="hover:text-sky-600 cursor-pointer flex items-center" >
            <font-awesome-icon :icon="['fas', item.icon]" />
            <router-link class="text-xl px-2" :to="item.path" >{{item.name}}</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref } from 'vue';
import gsap from 'gsap';
const nav=[
  {name:'Home',path:'/',icon:'house'},
  {name:'Skills',path:'/',icon:'laptop-code'},
  {name:'About',path:'/about',icon:'user'},
  {name:'Project',path:'/',icon:'project-diagram'},
]
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
  })

  gsap.from('#nav li', {
    duration: 1.5,  // Duration of each animation
    opacity: 0,
    y: -50,
    ease: 'power1.out',
    stagger: 0.3,  // Delay between each <li>'s animation
  });

});

</script>