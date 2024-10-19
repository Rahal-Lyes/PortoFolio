<template>
  <div class="pt-20 h-screen w-1/2 overflow-hidden">
    <div class="bg-sky-200 p-4 m-4 rounded-2xl min-w-80">
      <transition name="fade" appear>
        <h1 class="text-4xl text-blue-950 p-3" ref="title">
          <small class="block text-3xl">Hi I'm</small> Lyes Rahal
        </h1>
      </transition>

      <transition appear>
        <p class="text-blue-950 text-xl" ref="webDev">
          <span class="mx-4">a web developer based in Algeria</span>. I'm a bachelor's degree in computer science and currently pursuing a master's degree in systems engineering. I create dynamic and responsive web applications using PHP, Node.js, and Vue.js.
          <span>I bring both creativity and technical expertise to my projects.</span>
        </p>
      </transition>

      <transition  ref="links">
        <div class="flex flex-row justify-around my-4 items-center">
          <a
            href="../../public/Computer-Scientiste v-2.pdf"
            class="flex gap-2 text-xl bg-black text-white p-2 rounded-lg hover:bg-yellow-200 duration-500 hover:text-black"
          >
            Download CV
            <img
              src="@/assets/social-links/pdf-svgrepo-com.svg"
              width="20px"
              height="20px"
              alt="pdf"
            />
          </a>
          <a
            href="mailto:lyesrahal.cs@gmail.com"
            class="bg-white text-black p-3 rounded-lg hover:bg-slate-200"
            >
            Contact Me
          </a>
        </div>
      </transition>
<transition ref="socials">
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
              alt="linkedin"
              width="48px"
            />
          </a>
        </div></transition>
        

    </div>
  </div>
</template>

<script setup>
import {gsap} from 'gsap';
import {onMounted,ref} from 'vue';
const title=ref(null);
const webDev=ref(null);
const links = ref(null);
const socials=ref(null);
onMounted(()=>{

  // Animation pour le titre
  gsap.from(title.value, {
    x: -200,
    opacity: 0,
    duration: 2,
    ease: 'ease-in-out',
  });

  // Animation pour le paragraphe
  gsap.from(webDev.value, {
    x: 300,
    opacity: 0,
    duration: 2,
    ease: 'ease-in-out',
  });

  // Animation pour les liens (transition-group)
  gsap.from(links.value, {
    scale: 0.1,
    opacity: 0,
    duration: 2.5,
    ease: 'ease-in-out',
    stagger: 0.3, // Animation en cascade
  });
  gsap.from(socials.value, {
  scale: 0.1,
  rotation: 360,  // Rotation complète
  opacity: 0,
  duration: 2.5,
  ease: 'back.out(1.7)',  // Retour élastique
  stagger: 0.3,  // Apparition en cascade
});
})
</script>

