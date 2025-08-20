<template>
  <section class=" relative bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 text-white min-h-screen overflow-hidden">
    <!-- Decorative background -->
    <div class="absolute inset-0">
      <div class="  absolute top-10 left-1/3 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
      <div class="absolute bottom-10 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-2xl"></div>
    </div>

    <div class="relative z-10 max-w-5xl mx-auto px-6 py-20">
      <!-- Title -->
      <div class="text-center mb-16 mt-10">
        <h1 class="text-4xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
          About Me
        </h1>
        <p class="text-gray-400 mt-4">Get to know who I am and what I do</p>
      </div>

      <!-- Content -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        <!-- Image / Avatar -->
        <div class="flex justify-center">
          <div class="relative">
            <div class="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 blur-lg opacity-40"></div>
            <img
              src="../assets/images/dv150.png"
              alt="Rahal Lyes"
              class="relative w-48 h-48 rounded-full border-4 border-cyan-400 shadow-xl"
            />
          </div>
        </div>

        <!-- Text Info -->
        <div>
          <h2 class="text-2xl font-semibold mb-4">Rahal Lyes</h2>
          <p class="text-gray-300 leading-relaxed mb-6">
            I am a <span class="text-cyan-400 font-medium">Master’s student in Computer Science</span>, 
            specializing in <span class="text-blue-400 font-medium">Full-Stack Web Development</span>. 
            Passionate about modern technologies such as 
            <span class="text-purple-400">JavaScript</span> and <span class="text-green-400">Python</span>. 
            Curious, independent, and highly adaptable to new environments.
          </p>

          <p class="text-gray-300 leading-relaxed mb-6">
            I am currently seeking an opportunity where I can apply my skills, contribute to innovative projects, 
            and grow as a professional developer.
          </p>

          <!-- Contact Info -->
          <ul class="space-y-3 text-gray-300">
            <li class="flex items-center gap-3">
              <i class="fas fa-envelope text-cyan-400"></i>
              <a href="mailto:lyes.rahal@univ-bouira.dz" class="hover:text-cyan-400">lyes.rahal@univ-bouira.dz</a>
            </li>
            <li class="flex items-center gap-3">
              <i class="fas fa-phone text-cyan-400"></i>
              <a href="tel:+213556145405" class="hover:text-cyan-400">+213 556 145 405</a>
            </li>
            <li class="flex items-center gap-3">
              <i class="fas fa-map-marker-alt text-cyan-400"></i>
              Algeria, Bouira, El Esnam
            </li>
            <li class="flex items-center gap-3">
              <i class="fab fa-linkedin text-cyan-400"></i>
              <a href="https://linkedin.com/in/rahal-lyes" target="_blank" class="hover:text-cyan-400">
                linkedin.com/in/rahal-lyes
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Static page, no complex logic needed
</script>

<style scoped>
/* Subtle animation for the profile picture */
img {
  transition: transform 0.4s ease;
}
img:hover {
  transform: scale(1.05) rotate(2deg);
}
</style>
