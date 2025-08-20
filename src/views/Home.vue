<template>
  <Container class="pt-20 max-md:pt-40">
    <div class="flex flex-row max-lg:flex-col max-md:justify-center max-md:items-center">
    <LeftHero />
    <RightHero class="max-lg:hidden"/> 
  
  </div>
  <!-- <Marquee class="lg:hidden"/> -->
  </Container>
</template>

<script setup>
import { ref} from 'vue';
import LeftHero from '@/components/LeftHero.vue';
import RightHero from '@/components/RightHero.vue';
import Marquee from '@/components/Marquee.vue';
import Container from '@/components/Container.vue';





</script>

