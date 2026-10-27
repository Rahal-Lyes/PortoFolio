<template>
  <section class="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 px-5 pb-16 pt-20 max-md:pt-40">
    <header class="mx-auto mb-10 mt-10 max-w-4xl text-center">
      <h1 class="mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-4xl font-bold text-transparent">
        Mon parcours
      </h1>
      <p class="text-slate-600">
        Mes études et mes certifications en développement web et programmation, du plus ancien (en bas) au plus récent (en haut).
      </p>
    </header>

    <Container>
      <CertificatesTimeline :items="items" />
    </Container>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import CertificatesTimeline from '@/components/CertificatesTimeline.vue';
import Container from '@/components/Container.vue';

import masterCert from '@/assets/certificates/masterCert.png';
import bachelorCert from '@/assets/certificates/bachelorCert.png';
import djangoCert from '@/assets/certificates/djangoCert.png';
import jsCert from '@/assets/certificates/jsCert.png';
import vueCert from '@/assets/certificates/vueCert.jpeg';
import rwdCert from '@/assets/certificates/rwdCert.jpg';

/*
  type      : 'degree' (diplôme) | 'certificate' (certificat)
  date      : texte affiché
  sortDate  : date ISO utilisée pour trier (AAAA-MM-JJ)
  color     : couleur du point et de la carte
*/
const items = ref([
  {
    id: 1,
    type: 'degree',
    title: 'Master en Ingénierie des Systèmes d’Information et Logiciels (ISIL)',
    issuer: 'Université Akli Mohand Oulhadj - Bouira',
    date: 'Novembre 2026',
    sortDate: '2026-06-27',
    level: 'Bac+5',
    description:
      'Formation avancée en conception de systèmes logiciels et de systèmes d’information, de l’intelligence artificielle au Big Data.',
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
    color: '#5E35B1',
  },
  {
    id: 2,
    type: 'degree',
    title: 'Licence en Informatique (Bachelor Degree in Computer Science)',
    issuer: 'Université Akli Mouhand Oulhadj - Bouira', // TODO : à compléter
    date: 'Juin 2024', // TODO : à compléter
    sortDate: '2024-07-01', // TODO : mets la vraie date, elle sert uniquement au tri
    level: 'Bac+3',
    description: 'Socle solide en programmation, bases de données, réseaux et algorithmique.',
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
    color: '#00838F',
  },
  {
    id: 3,
    type: 'certificate',
    title: 'Python Django',
    issuer: 'Udemy',
    date: 'août 2025',
    sortDate: '2025-08-01',
    description: 'Développement d’applications web avec Python et le framework Django.',
    credentialId: 'UC-b129b00d-43cd-43f5-8f0e-3d8df25e88da',
    skills: ['Django'],
    image: djangoCert,
    link: 'https://www.udemy.com/certificate/UC-b129b00d-43cd-43f5-8f0e-3d8df25e88da/',
    color: '#2E7D32',
  },
  {
    id: 4,
    type: 'certificate',
    title: 'Legacy JavaScript Algorithms and Data Structures',
    issuer: 'freeCodeCamp',
    date: 'mai 2025',
    sortDate: '2025-05-01',
    description: 'Algorithmes et structures de données en JavaScript, validés par des projets pratiques.',
    credentialId: 'fcc6e38e532-9cf3-4b06-bfa6-12b3091837b3-ljaads',
    skills: ['JavaScript', 'Algorithmes', 'Structures de données'],
    image: jsCert,
    link: 'https://freecodecamp.org/certification/fcc6e38e532-9cf3-4b06-bfa6-12b3091837b3/javascript-algorithms-and-data-structures',
    color: '#E65100',
  },
  {
    id: 5,
    type: 'certificate',
    title: 'Vue Masterclass (Cover Vue 2 & Vue 3)',
    issuer: 'Udemy',
    date: 'juin 2024',
    sortDate: '2024-06-01',
    description: 'Apprentissage de Vue.js, des versions 2 et 3.',
    credentialId: 'UC-d24c6354-f53e-4fd1-b80d-10583427be19',
    skills: ['Vue.js'],
    image: vueCert,
    link: 'https://www.udemy.com/certificate/UC-d24c6354-f53e-4fd1-b80d-10583427be19/',
    color: '#1565C0',
  },
  {
    id: 6,
    type: 'certificate',
    title: 'Responsive Web Design',
    issuer: 'freeCodeCamp',
    date: 'juil. 2023',
    sortDate: '2023-07-01',
    description: 'Création de pages adaptatives avec HTML5 et CSS3 (Flexbox et Grid).',
    credentialId: '',
    skills: ['HTML5', 'CSS3'],
    image: rwdCert,
    link: 'https://freecodecamp.org/certification/fcc6e38e532-9cf3-4b06-bfa6-12b3091837b3/responsive-web-design',
    color: '#AD1457',
  },
]);
</script>