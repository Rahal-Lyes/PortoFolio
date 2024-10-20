<template>
<footer class="bg-gray-900 text-white py-8">
  <div class="container mx-auto px-4">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
      <!-- About Section -->
      <div>
        <h3 class="text-lg font-semibold mb-4">About Me</h3>
        <p class="text-gray-400">
          I'm a passionate web developer specialized in creating dynamic and responsive websites with modern tools like Laravel, Vue.js, and TailwindCSS.
        </p>
      </div>

      <!-- Quick Links -->
      <div>
        <h3 class="text-lg font-semibold mb-4">Quick Links</h3>
        <ul class="space-y-2">
          <li><a href="#home" class="hover:underline">Home</a></li>
          <li><a href="#projects" class="hover:underline">Projects</a></li>
          <li><a href="#about" class="hover:underline">About</a></li>
          <li><a href="#contact" class="hover:underline">Contact</a></li>
        </ul>
      </div>

      <!-- Social Media -->
      <div>
        <h3 class="text-lg font-semibold mb-4">Follow Me</h3>
        <div class="flex justify-center md:justify-start space-x-4">
          <a href="#" class="hover:text-gray-300">
            <i class="fab fa-facebook fa-lg"></i>
          </a>
          <a href="#" class="hover:text-gray-300">
            <i class="fab fa-twitter fa-lg"></i>
          </a>
          <a href="#" class="hover:text-gray-300">
            <i class="fab fa-linkedin fa-lg"></i>
          </a>
          <a href="#" class="hover:text-gray-300">
            <i class="fab fa-github fa-lg"></i>
          </a>
        </div>
      </div>
    </div>

    <div class="mt-8 border-t border-gray-700 pt-4 text-center">
      <p class="text-sm text-gray-500">&copy; 2024 Lyes Rahal. All Rights Reserved.</p>
    </div>
  </div>
</footer>

</template>