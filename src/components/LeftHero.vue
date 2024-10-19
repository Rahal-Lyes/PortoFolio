<template>
  <div class="pt-20 h-screen  w-1/2 overflow-hidden">
    <div class="bg-sky-200  p-4 m-4 rounded-2xl min-w-80">
      <transition name="fade" appear>
        <h1 class="text-4xl text-blue-950 p-3" ref="title">
          <small class="block text-3xl">Hi I'm</small> Lyes Rahal
        </h1>
      </transition>
    <transition appear>
      <p class="text-blue-950 text-xl" ref="webDev" >
          <span class="mx-4">a web developer based in Algeria</span>.I'm a bachelor's degree in computer
        science and currently pursuing a master's degree in systems engineering,
        I create dynamic and responsive web applications using PHP, Node.js, and
        Vue.js.
        <span
          >I bring both creativity and technical expertise to my projects.</span
        >
      </p></transition>
      
      <div class="flex flex-row justify-around my-4 items-center">
        <a
          href="../../public/Computer-Scientiste v-2.pdf"
          class="flex gap-2 text-xl bg-black text-white p-2 rounded-lg hover:bg-yellow-200 duration-500 hover:text-black"
          >Downoald CV
          <img
            src="@/assets//social-links/pdf-svgrepo-com.svg"
            width="20px"
            height="20px"
            alt="pdf"
          />
        </a>
        <a
          href="mailto:lyesrahal.cs@gmail.com"
          class="bg-white text-black p-3 rounded-lg hover:bg-slate-200"
          >Cantact Me</a
        >
      </div>

      <div class="flex flex-row justify-evenly">
        <a href="https://github.com/Rahal-Lyes">
          <img
            src="@/assets/social-links/Github_light.svg"
            alt="github"
            width="48px"
          />
        </a>
        <a href="https://linkedin.com/in/rahal-lyes">
          <img
            src="@/assets/social-links/linkedin.svg"
            alt="linkdin"
            width="48px"
          />
        </a>
      </div>
    </div>
  </div>
</template>
<script setup>
import {gsap} from 'gsap';
import {onMounted,ref} from 'vue';
const title=ref(null);
const webDev=ref(null);
onMounted(()=>{

  gsap.from(title.value,{
    x: -200,
    opacity: 0,
   duration: 2, // Réduire à 2s pour une transition fluide
   ease: 'ease-in-out',

  })
  gsap.from(webDev.value,{
    x: 300,
    opacity: 0,
   duration: 2, // Réduire à 2s pour une transition fluide
   ease: 'ease-in-out',
  })
})
</script>

