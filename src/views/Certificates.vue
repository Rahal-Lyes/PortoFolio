<template>
  <section class="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 px-5 pb-16 pt-20 max-md:pt-40">
    <header class="mx-auto mb-10 mt-10 max-w-4xl text-center">
      <h1 class="mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-4xl font-bold text-transparent">
        Mes certificats
      </h1>
      <p class="text-slate-600">
        Retrouvez mes diplômes et mes certifications en développement web et programmation.
      </p>
    </header>

    <Container>
      <CertificatesContainer :certificates="certificates" />
    </Container>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import CertificatesContainer from '@/components/CertificatesContainer.vue';
import Container from '@/components/Container.vue';

// Images des certificats (à placer dans src/assets/certificates/)
import masterCert from '@/assets/certificates/masterCert.png';
import bachelorCert from '@/assets/certificates/bachelorCert.png';
import djangoCert from '@/assets/certificates/djangoCert.png';
import jsCert from '@/assets/certificates/jsCert.png';
import vueCert from '@/assets/certificates/vueCert.jpeg';
import rwdCert from '@/assets/certificates/rwdCert.jpg';

const certificates = ref([
  {
    id: 1,
    title: 'Master en Ingénierie des Systèmes d’Information et Logiciels (ISIL)',
    issuer: 'Université Akli Mohand Oulhadj - Bouira',
    date: '27/06/2024',
    credentialId: '',
    skills: [
      'Algorithmique avancée et complexité',
      'Structures de données avancées',
      'Bases de données avancées',
      'Architectures orientées services',
      'Ingénierie dirigée par les modèles',
      'Intelligence artificielle',
      'Cloud Computing',
      'Fouille de données',
      'Systèmes décisionnels et entrepôts de données',
      'Développement mobile',
      'Big Data',
    ],
    image: masterCert,
    link: '',
    gradient: 'from-purple-600 to-indigo-600',
  },
  {
    id: 2,
    title: 'Licence en Informatique (Bachelor Degree in Computer Science)',
    issuer: 'Nom de l’université',
    date: '20XX',
    credentialId: '',
    skills: [
      'Bases de données et SQL',
      'Méthodes numériques',
      'Algorithmes et Structures de Données',
      'Programmation Orientée Objet (POO)',
      'Théorie des Langages (TL)',
      'Réseaux de Communication (RC)',
    ],
    image: bachelorCert,
    link: '',
    gradient: 'from-cyan-600 to-blue-600',
  },
  {
    id: 3,
    title: 'Python Django',
    issuer: 'Udemy',
    date: 'août 2025',
    credentialId: 'UC-b129b00d-43cd-43f5-8f0e-3d8df25e88da',
    skills: ['Django'],
    image: djangoCert,
    link: 'https://www.udemy.com/certificate/UC-b129b00d-43cd-43f5-8f0e-3d8df25e88da/',
    gradient: 'from-green-600 to-teal-600',
  },
  {
    id: 4,
    title: 'Legacy JavaScript Algorithms and Data Structures',
    issuer: 'freeCodeCamp',
    date: 'mai 2025',
    credentialId: 'fcc6e38e532-9cf3-4b06-bfa6-12b3091837b3-ljaads',
    skills: ['JavaScript', 'Algorithmes', 'Structures de données'],
    image: jsCert,
    link: 'https://freecodecamp.org/certification/fcc6e38e532-9cf3-4b06-bfa6-12b3091837b3/javascript-algorithms-and-data-structures',
    gradient: 'from-orange-600 to-red-600',
  },
  {
    id: 5,
    title: 'Vue Masterclass (Cover Vue 2 & Vue 3)',
    issuer: 'Udemy',
    date: 'juin 2024',
    credentialId: 'UC-d24c6354-f53e-4fd1-b80d-10583427be19',
    skills: ['Vue.js'],
    image: vueCert,
    link: 'https://www.udemy.com/certificate/UC-d24c6354-f53e-4fd1-b80d-10583427be19/',
    gradient: 'from-blue-600 to-purple-600',
  },
  {
    id: 6,
    title: 'Responsive Web Design',
    issuer: 'freeCodeCamp',
    date: 'juil. 2023',
    credentialId: '',
    skills: ['HTML5', 'CSS3'],
    image: rwdCert,
    link: 'https://freecodecamp.org/certification/fcc6e38e532-9cf3-4b06-bfa6-12b3091837b3/responsive-web-design',
    gradient: 'from-pink-600 to-rose-600',
  },
]);
</script>