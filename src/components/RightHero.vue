<template>
  <div class="h-screen flex items-center justify-center  w-1/2 mt-7 -z-20">
    <div ref="circleContainer" class="relative w-[600px] h-[600px]">
      <img 
        v-for="(icon, index) in icons" 
        :key="index" 
        :src="icon" 
        class="absolute w-16 h-16"
      />
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import gsap from 'gsap';

// Import des images
import html5 from '@/assets/social-links/programming/html5.svg';
import css from '@/assets/social-links/programming/css.svg';
import javascript from '@/assets/social-links/programming/javascript.svg';
import jquery from '@/assets/social-links/programming/jQuery_light.svg';
import c from '@/assets/social-links/programming/c.svg';
import git from '@/assets/social-links/programming/git.svg';
import intellijidea from '@/assets/social-links/programming/intellijidea.svg';
import jwt from '@/assets/social-links/programming/jwt.svg';
import mongodb from '@/assets/social-links/programming/mongodb-wordmark.svg';
import mysql from '@/assets/social-links/programming/mysql.svg';
import nodejs from '@/assets/social-links/programming/nodejs.svg';
import npm from '@/assets/social-links/programming/npm.svg';
import php from '@/assets/social-links/programming/Php_light.svg';
import phpstorm from '@/assets/social-links/programming/phpstorm.svg';
import pinia from '@/assets/social-links/programming/pinia.svg';
import postman from '@/assets/social-links/programming/postman.svg';
import sqlite from '@/assets/social-links/programming/sqlite.svg';
import supabase from '@/assets/social-links/programming/Supabase_wordmark_light.svg';
import tailwindcss from '@/assets/social-links/programming/tailwindcss.svg';
import vscode from '@/assets/social-links/programming/vscode.svg';
import vue from '@/assets/social-links/programming/vue.svg';
import express from '@/assets/social-links/programming/Express.js_light.svg';
import wordpress from '@/assets/social-links/programming/wordpress.svg';

// Liste des images
const icons = [
  html5, css, javascript, jquery, c, git, intellijidea, jwt, mongodb, mysql,
  nodejs, npm, php, phpstorm, pinia, postman, sqlite, supabase, tailwindcss,
  vscode, vue, express, wordpress
];

const circleContainer = ref(null);

onMounted(() => {
  const iconElements = circleContainer.value.children;
  const totalIcons = iconElements.length;
  const radius = 240; // Rayon du cercle

  // Positionnement des icônes en cercle
  Array.from(iconElements).forEach((icon, index) => {
    const angle = (index / totalIcons) * Math.PI * 2; // Calculer l'angle de chaque icône
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;

    gsap.set(icon, {
      x: x + radius, // Centrage du cercle
      y: y + radius,
      transformOrigin: 'center center',
    });

    // Animation d'entrée de chaque icône
    gsap.from(icon, {
      opacity: 0,
      scale: 0.5,
      duration: 0.5,
      delay: index * 0.1, // Animation échelonnée
      ease: 'elastic.out(1, 0.3)',
    });

    // Ajouter une rotation individuelle sur chaque icône
    gsap.to(icon, {
      rotation: 360,
      duration: 40, // Temps pour une rotation complète de l'icône
      ease: "linear",
      repeat: -1, // Boucle infinie
    });
  });

//  Rotation continue du conteneur entier
  gsap.to(circleContainer.value, {
    rotation: 360,
    duration: 40,  // Une rotation complète toutes les 20 secondes
    ease: "linear",
    repeat: -1,  // Boucle infinie
  });
});
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #1a202c; /* Fond sombre pour un bon contraste */
}
</style>
