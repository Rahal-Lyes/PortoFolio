<template>
  <div class="project-card">
    <div class="project-image">
      <img
        :src="image"
        :alt="title"
        class="rounded-lg shadow-md w-full h-48 object-cover"
      />
    </div>
    <div class="project-content">
      <h3>{{ title }}</h3>
      <div class="project-date">{{ date }}</div>
      <p class="project-description">{{ description }}</p>
      <div class="project-tech">
        <span
          v-for="(tech, index) in technologies"
          :key="index"
          class="tech-tag"
        >
          {{ tech }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  date: String,
  description: String,
  image: String,
  technologies: {
    type: Array,
    default: () => []
  }
})
</script>

<style scoped>
.project-card {
  @apply rounded-lg bg-white shadow-lg p-4 hover:shadow-xl transition;
}
.project-tech {
  @apply flex flex-wrap gap-2 mt-2;
}
.tech-tag {
  @apply bg-blue-100 text-blue-900 px-2 py-1 rounded-md text-sm;
}
</style>
