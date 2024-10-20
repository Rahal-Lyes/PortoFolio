<template>
  <Container>

    <h1 class="text-4xl font-bold text-center mt-10 p-5">Skills</h1>
  
    <div class="flex flex-row items-center justify-center gap-3 w-11/12 rounded-2xl text-center overflow-hidden">
      <SkillsContainer :time="30" :skills="skills" />
    </div>

  
  </Container>
</template>

<script setup>
import {ref} from 'vue';
import SkillsContainer from '@/components/SkillsContainer.vue'
import Container from '@/components/Container.vue';

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
const skills=ref([
  { name: 'HTML5', icon: html5 },
  { name: 'CSS3', icon: css },
  { name: 'TailwindCSS', icon: tailwindcss },
  { name: 'Vue.js', icon: vue },
  {name:'vuetify',icon:vuetify},
  {name:'JavaScript',icon:javascript},
  {name:'jquery',icon:jquery},
  {name:'c',icon:c},
  {name:'git',icon:git},
  {name:'intellijidea',icon:intellijidea},
  {name:'jwt',icon:jwt},
  {name:'mongodb',icon:mongodb},
  {name:'mysql',icon:mysql},
  {name:'nodejs',icon:nodejs},
  {name:'npm',icon:npm},
  {name:'php',icon:php},
  {name:'phpstorm',icon:phpstorm},
  {name:'postman',icon:postman},
  {name:'supabase',icon:supabase},
  {name:'vscode',icon:vscode},
  {name:'express',icon:express}
])
</script>