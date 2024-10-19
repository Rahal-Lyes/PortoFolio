<template>
  <div class="pt-20">
    <h1 class="text-2xl text-blue-950 text-center my-2 py-2">Front-end</h1>
    <Container class="flex flex-row gap-3">
      <SkillsContainer :skills="frontEnd" />
    </Container>

    <h1 class="text-2xl text-blue-950 text-center my-2 py-2">Back-end</h1>
    <Container class="flex flex-row gap-3">
      <SkillsContainer :skills="backend" />
    </Container>


    <h1 class="text-2xl text-blue-950 text-center my-2 py-2">Other</h1>
    <Container class="flex flex-row gap-3">
      <SkillsContainer :skills="other" />
    </Container>
  </div>
</template>

<script setup>
import {ref} from 'vue';
import SkillsContainer from '@/components/SkillsContainer.vue'
import Container from '@/components/Container.vue';
// Import des images
import html5 from '@/assets/social-links/programming/html5.svg';
import css from '@/assets/social-links/programming/css.svg';
import javascript from '@/assets/social-links/programming/javascript.svg';
import vuetify from '@/assets/social-links/programming/vuetify.svg'
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

import postman from '@/assets/social-links/programming/postman.svg';

import supabase from '@/assets/social-links/programming/Supabase_wordmark_light.svg';
import tailwindcss from '@/assets/social-links/programming/tailwindcss.svg';
import vscode from '@/assets/social-links/programming/vscode.svg';
import vue from '@/assets/social-links/programming/vue.svg';
import express from '@/assets/social-links/programming/Express.js_light.svg';
import wordpress from '@/assets/social-links/programming/wordpress.svg';
const frontEnd = ref([
  { name: 'HTML5', icon: html5 },
  { name: 'CSS3', icon: css },
  { name: 'TailwindCSS', icon: tailwindcss },
  { name: 'Vue.js', icon: vue },
  {name:'vuetify',icon:vuetify},
  {name:'JavaScript',icon:javascript},
  {name:'jquery',icon:jquery},


]);
const backend=ref([
  {name:'nodejs',icon:nodejs},
  {name:'php',icon:php},
  {name:'express',icon:express},
  {name:'supabase',icon:supabase},
  {name:'mongodb',icon:mongodb},
  {name:'jwt',icon:jwt},
  {name:'mysql',icon:mysql}

])

const other=ref([
  {name:'git',icon:git},
  {name:'intellijidea',icon:intellijidea},
  {name:'npm',icon:npm},
  {name:'phpstorm',icon:phpstorm},
  {name:'postman',icon:postman},
  {name:'vscode',icon:vscode},
  {name:'C',icon:c}
])
</script>