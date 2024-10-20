<template>
  <div class="flex flex-row max-lg:flex-col max-md:justify-center max-md:items-center">
    <LeftHero />
    <RightHero class="max-lg:hidden"/> 
  
  </div>
  <Marquee class="lg:hidden"/>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import LeftHero from '@/components/LeftHero.vue';
import RightHero from '@/components/RightHero.vue';
import Marquee from '@/components/Marquee.vue';

const show = ref(true);




</script>

