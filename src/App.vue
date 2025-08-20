<template>
  <div id="app">
    <header>
      <Header />
    </header>
    <main>
      <router-view></router-view>
    </main>
    <Footer/>
  </div>
</template>
<script setup>
import Header from '@/components/Header.vue'
import Footer from '@/views/Footer.vue'
</script>

<style>
 body{
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-style: normal;
}

</style>
