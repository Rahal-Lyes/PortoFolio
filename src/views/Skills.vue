<template>
  <div class="pt-20 max-md:pt-40 bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen">
    <!-- Front-end Section -->
    <div class="mb-16 mt-10">
      <h1 class="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 text-center mb-8">
        Front-end
      </h1>
      <Container class="flex flex-row gap-6 overflow-hidden">
        <SkillsContainer :time="25" :skills="frontEnd" ref="frontendSkills" />
      </Container>
    </div>

    <!-- Back-end Section -->
    <div class="mb-16">
      <h1 class="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-600 text-center mb-8">
        Back-end
      </h1>
      <Container class="flex flex-row gap-6 overflow-hidden">
        <SkillsContainer :time="30" :skills="backend" ref="backendSkills" />
      </Container>
    </div>

    <!-- Other Tools Section -->
    <div class="mb-16">
      <h1 class="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600 text-center mb-8">
        Outils & Technologies
      </h1>
      <Container class="flex flex-row gap-6 overflow-hidden">
        <SkillsContainer :time="20" :skills="other" ref="otherSkills" />
      </Container>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import SkillsContainer from '@/components/SkillsContainer.vue';
import Container from '@/components/Container.vue';

// Import des icônes (gardez vos imports existants)
import html5 from '@/assets/social-links/programming/html5.svg';
import css from '@/assets/social-links/programming/css.svg';
import javascript from '@/assets/social-links/programming/javascript.svg';
import vuetify from '@/assets/social-links/programming/vuetify.svg';
import jquery from '@/assets/social-links/programming/jQuery_light.svg';
import git from '@/assets/social-links/programming/git.svg';
import intellijidea from '@/assets/social-links/programming/intellijidea.svg';
import jwt from '@/assets/social-links/programming/jwt.svg';
import mysql from '@/assets/social-links/programming/mysql.svg';
import npm from '@/assets/social-links/programming/npm.svg';
import postman from '@/assets/social-links/programming/postman.svg';
import tailwindcss from '@/assets/social-links/programming/tailwindcss.svg';
import vscode from '@/assets/social-links/programming/vscode.svg';
import vue from '@/assets/social-links/programming/vue.svg';
import gsap from '@/assets/social-links/programming/gsap.svg';
import python from '@/assets/social-links/programming/python.svg';
import django from '@/assets/social-links/programming/django.svg';
import docker from '@/assets/social-links/programming/docker.svg';
import linux from '@/assets/social-links/programming/linux.svg';
import postgresql from '@/assets/social-links/programming/postgresql.svg';
import restApi from '@/assets/social-links/programming/rest-api.png';

const frontEnd = ref([
  { name: 'HTML5', icon: html5, level: 'Avancé' },
  { name: 'CSS3', icon: css, level: 'Avancé' },
  { name: 'JavaScript', icon: javascript, level: 'Avancé' },
  { name: 'Vue.js', icon: vue, level: 'Intermédiaire' },
  { name: 'TailwindCSS', icon: tailwindcss, level: 'Intermédiaire' },
  { name: 'Vuetify', icon: vuetify, level: 'Intermédiaire' },
  { name: 'jQuery', icon: jquery, level: 'Intermédiaire' },
  { name: 'GSAP', icon: gsap, level: 'Intermédiaire' },
]);

const backend = ref([
  { name: 'Python', icon: python, level: 'Intermédiaire' },
  { name: 'Django', icon: django, level: 'Intermédiaire' },
  { name: 'PostgreSQL', icon: postgresql, level: 'Intermédiaire' },
  { name: 'MySQL', icon: mysql, level: 'Avancé' },
  { name: 'REST API', icon: restApi, level: 'Avancé' },
  { name: 'JWT', icon: jwt, level: 'Intermédiaire' },
  { name: 'Docker', icon: docker, level: 'Intermédiaire' },
]);

const other = ref([
  { name: 'Git', icon: git, level: 'Intermédiaire' },
  { name: 'VS Code', icon: vscode, level: 'Avancé' },
  { name: 'IntelliJ IDEA', icon: intellijidea, level: 'Avancé' },
  { name: 'Postman', icon: postman, level: 'Avancé' },
  { name: 'NPM', icon: npm, level: 'Avancé' },
  { name: 'Linux', icon: linux, level: 'Intermédiaire' },
]);
</script>
