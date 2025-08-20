<template>
  <footer class="relative bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 text-white overflow-hidden">
    <!-- Animated background elements -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute top-0 left-1/4 w-64 h-64 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute bottom-0 right-1/4 w-48 h-48 bg-gradient-to-r from-purple-500/10 to-pink-600/10 rounded-full blur-2xl animate-bounce"></div>
      <div class="absolute top-1/2 left-0 w-32 h-32 bg-gradient-to-r from-green-500/10 to-emerald-600/10 rounded-full blur-xl animate-pulse"></div>
    </div>

    <!-- Decorative top wave -->
    <div class="absolute top-0 left-0 w-full overflow-hidden">
      <svg
        class="relative block w-full h-12"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
          class="fill-white"
        ></path>
      </svg>
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-6 py-16">
      <!-- Main Footer Content -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        
        <!-- Brand Section -->
        <div class="lg:col-span-2" ref="brandSection">
          <div class="flex items-center gap-4 mb-6">
            <div class="relative">
              <div class="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 blur-md opacity-50"></div>
              <img
                src="../assets/images/dv150.png"
                alt="Lyes Rahal"
                class="relative w-16 h-16 rounded-full border-2 border-cyan-400 shadow-xl"
              />
            </div>
            <div>
              <h3 class="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                Lyes Rahal
              </h3>
              <p class="text-gray-400 text-sm font-medium">Full Stack Developer</p>
            </div>
          </div>
          
          <p class="text-gray-300 leading-relaxed mb-6 max-w-md">
            Passionate developer creating innovative web solutions with modern technologies. 
            Specialized in Vue.js, Django, and building scalable applications that make a difference.
          </p>

          <!-- Social Links -->
          <div class="flex gap-4">
            <a
              v-for="social in socialLinks"
              :key="social.name"
              :href="social.url"
              target="_blank"
              rel="noopener noreferrer"
              class="group relative"
            >
              <div
                class="absolute inset-0 rounded-xl blur-lg opacity-0 group-hover:opacity-50 transition-all duration-300 scale-110"
                :class="social.glowClass"
              ></div>
              <div
                class="relative w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 transform group-hover:scale-110 group-hover:-rotate-6 border-2"
                :class="social.bgClass"
              >
                <i :class="social.icon" class="text-lg"></i>
              </div>
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div ref="quickLinksSection">
          <h4 class="text-lg font-semibold mb-6 text-cyan-400">Quick Links</h4>
          <ul class="space-y-3">
            <li v-for="link in quickLinks" :key="link.name">
              <router-link
                :to="link.path"
                class="group flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-all duration-300"
              >
                <i :class="link.icon" class="text-sm group-hover:scale-110 transition-transform duration-300"></i>
                <span class="group-hover:translate-x-1 transition-transform duration-300">{{ link.name }}</span>
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Services -->
        <div ref="servicesSection">
          <h4 class="text-lg font-semibold mb-6 text-cyan-400">Services</h4>
          <ul class="space-y-3">
            <li v-for="service in services" :key="service.name">
              <div class="group flex items-center gap-2 text-gray-400">
                <div class="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:scale-125 transition-transform duration-300"></div>
                <span class="group-hover:text-white transition-colors duration-300">{{ service.name }}</span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <!-- Contact Bar -->
      <div class="border-t border-gray-700/50 pt-8 mb-8" ref="contactBar">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            v-for="contact in contactInfo"
            :key="contact.type"
            class="group flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-gray-800/50 to-gray-700/30 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 backdrop-blur-sm hover:scale-105"
          >
            <div
              class="w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300"
              :class="contact.bgClass"
            >
              <i :class="contact.icon" class="text-lg"></i>
            </div>
            <div>
              <p class="text-sm text-gray-400 font-medium">{{ contact.label }}</p>
              <p class="text-white font-semibold">{{ contact.value }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Newsletter Signup -->
      <div class="bg-gradient-to-r from-gray-800/50 to-gray-700/30 rounded-2xl p-8 border border-gray-700/50 mb-8 backdrop-blur-sm" ref="newsletterSection">
        <div class="text-center max-w-2xl mx-auto">
          <h4 class="text-2xl font-bold mb-2 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Stay Updated
          </h4>
          <p class="text-gray-400 mb-6">Get notified about new projects and tech insights</p>
          
          <form class="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" @submit.prevent="subscribeNewsletter">
            <input
              v-model="email"
              type="email"
              placeholder="Enter your email"
              class="flex-1 px-4 py-3 rounded-xl bg-gray-800/50 border border-gray-600 text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors duration-300"
              required
            />
            <button
              type="submit"
              class="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="border-t border-gray-700/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4" ref="bottomBar">
        <div class="flex items-center gap-4">
          <p class="text-gray-400 text-sm">
            © {{ currentYear }} Lyes Rahal. All rights reserved.
          </p>
          <div class="flex items-center gap-2">
            <div class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span class="text-sm text-green-400 font-medium">Available for hire</span>
          </div>
        </div>
        
        <div class="flex items-center gap-6">
          <router-link
            v-for="legal in legalLinks"
            :key="legal.name"
            :to="legal.path"
            class="text-gray-400 hover:text-cyan-400 text-sm transition-colors duration-300"
          >
            {{ legal.name }}
          </router-link>
        </div>
      </div>
    </div>

    <!-- Back to Top Button -->
    <button
      @click="scrollToTop"
      class="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full shadow-xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-110 z-50 group"
      :class="{ 'opacity-0 pointer-events-none': !showBackToTop }"
    >
      <i class="fas fa-arrow-up group-hover:-translate-y-1 transition-transform duration-300"></i>
    </button>
  </footer>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';
import gsap from 'gsap';

// Reactive data
const email = ref('');
const showBackToTop = ref(false);
const brandSection = ref(null);
const quickLinksSection = ref(null);
const servicesSection = ref(null);
const contactBar = ref(null);
const newsletterSection = ref(null);
const bottomBar = ref(null);

// Computed properties
const currentYear = computed(() => new Date().getFullYear());

// Data arrays
const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/Rahal-Lyes',
    icon: 'fab fa-github',
    bgClass: 'bg-gradient-to-br from-gray-700 to-gray-600 border-gray-500 group-hover:border-gray-400',
    glowClass: 'bg-gray-500'
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/rahal-lyes',
    icon: 'fab fa-linkedin',
    bgClass: 'bg-gradient-to-br from-blue-600 to-blue-500 border-blue-400 group-hover:border-blue-300',
    glowClass: 'bg-blue-500'
  },
  {
    name: 'Email',
    url: 'mailto:lyesrahal.cs@gmail.com',
    icon: 'fas fa-envelope',
    bgClass: 'bg-gradient-to-br from-red-600 to-red-500 border-red-400 group-hover:border-red-300',
    glowClass: 'bg-red-500'
  },
  {
    name: 'Twitter',
    url: '#',
    icon: 'fab fa-twitter',
    bgClass: 'bg-gradient-to-br from-cyan-600 to-cyan-500 border-cyan-400 group-hover:border-cyan-300',
    glowClass: 'bg-cyan-500'
  }
];

const quickLinks = [
  { name: 'Home', path: '/', icon: 'fas fa-home' },
  { name: 'About Me', path: '/about', icon: 'fas fa-user' },
  { name: 'Skills', path: '/skills', icon: 'fas fa-code' },
  { name: 'Projects', path: '/projects', icon: 'fas fa-briefcase' },
  { name: 'Contact', path: '/contact', icon: 'fas fa-envelope' }
];

const services = [
  { name: 'Web Development' },
  { name: 'Frontend Development' },
  { name: 'Backend Development' },
  { name: 'API Integration' },
  { name: 'Database Design' },

];

const contactInfo = [
  {
    type: 'email',
    label: 'Email',
    value: 'lyesrahal.cs@gmail.com',
    icon: 'fas fa-envelope',
    bgClass: 'bg-gradient-to-br from-red-500/20 to-pink-500/20 text-red-400'
  },
  {
    type: 'location',
    label: 'Location',
    value: 'Bab Ezzouar, Algeria',
    icon: 'fas fa-map-marker-alt',
    bgClass: 'bg-gradient-to-br from-green-500/20 to-emerald-500/20 text-green-400'
  },
  {
    type: 'availability',
    label: 'Status',
    value: 'Available for hire',
    icon: 'fas fa-check-circle',
    bgClass: 'bg-gradient-to-br from-cyan-500/20 to-blue-500/20 text-cyan-400'
  }
];

const legalLinks = [
  { name: 'Privacy Policy', path: '/privacy' },
  { name: 'Terms of Service', path: '/terms' },
  { name: 'Cookie Policy', path: '/cookies' }
];

// Methods
const subscribeNewsletter = () => {
  if (email.value) {
    // Newsletter subscription logic here
    alert(`Thank you for subscribing with ${email.value}!`);
    email.value = '';
  }
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const handleScroll = () => {
  showBackToTop.value = window.scrollY > 500;
};

// Lifecycle hooks
onMounted(() => {
  // GSAP Animations
  const tl = gsap.timeline();

  tl.from(brandSection.value, {
    y: 100,
    opacity: 0,
    duration: 1,
    ease: 'power3.out'
  })
  .from(quickLinksSection.value, {
    y: 80,
    opacity: 0,
    duration: 0.8,
    ease: 'power2.out'
  }, '-=0.6')
  .from(servicesSection.value, {
    y: 80,
    opacity: 0,
    duration: 0.8,
    ease: 'power2.out'
  }, '-=0.6')
  .from(contactBar.value, {
    y: 60,
    opacity: 0,
    duration: 0.8,
    ease: 'power2.out'
  }, '-=0.4')
  .from(newsletterSection.value, {
    scale: 0.9,
    opacity: 0,
    duration: 0.8,
    ease: 'back.out(1.4)'
  }, '-=0.4')
  .from(bottomBar.value, {
    y: 40,
    opacity: 0,
    duration: 0.6,
    ease: 'power2.out'
  }, '-=0.2');

  // Social links stagger animation
  gsap.from('.group.relative', {
    scale: 0.5,
    opacity: 0,
    rotation: -180,
    duration: 0.6,
    stagger: 0.1,
    ease: 'back.out(1.7)',
    delay: 1
  });

  // Quick links animation
  gsap.from(quickLinksSection.value?.querySelectorAll('li') || [], {
    x: -30,
    opacity: 0,
    duration: 0.5,
    stagger: 0.1,
    ease: 'power2.out',
    delay: 1.2
  });

  // Services animation
  gsap.from(servicesSection.value?.querySelectorAll('li') || [], {
    x: -30,
    opacity: 0,
    duration: 0.5,
    stagger: 0.1,
    ease: 'power2.out',
    delay: 1.4
  });

  // Contact cards animation
  gsap.from(contactBar.value?.querySelectorAll('.group') || [], {
    y: 40,
    opacity: 0,
    scale: 0.9,
    duration: 0.6,
    stagger: 0.2,
    ease: 'back.out(1.4)',
    delay: 1.6
  });

  // Scroll listener for back to top button
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
/* Custom animations */
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

.group:hover .fa-arrow-up {
  animation: float 1s ease-in-out infinite;
}

/* Gradient text animation */
@keyframes gradient-shift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.bg-clip-text {
  background-size: 200% 200%;
  animation: gradient-shift 4s ease infinite;
}

/* Smooth transitions */
* {
  transition-property: color, background-color, border-color, transform, opacity;
}

/* Focus styles for accessibility */
button:focus-visible,
a:focus-visible,
input:focus-visible {
  outline: 2px solid #22d3ee;
  outline-offset: 2px;
  border-radius: 8px;
}

/* Newsletter form enhancement */
input[type="email"]:focus {
  box-shadow: 0 0 0 3px rgba(34, 211, 238, 0.1);
}

/* Back to top button pulse effect */
@keyframes pulse-glow {
  0%, 100% {
    box-shadow: 0 0 20px rgba(34, 211, 238, 0.3);
  }
  50% {
    box-shadow: 0 0 30px rgba(34, 211, 238, 0.6);
  }
}

.fixed.bottom-8:hover {
  animation: pulse-glow 2s ease-in-out infinite;
}

/* Mobile responsiveness */
@media (max-width: 768px) {
  .grid-cols-1.md\\:grid-cols-3 {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .lg\\:col-span-2 {
    grid-column: span 1;
  }
}

/* Wave animation */
svg path {
  animation: wave 3s ease-in-out infinite;
}

@keyframes wave {
  0%, 100% { d: path("M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"); }
  50% { d: path("M985.66,102.83C906.67,82,823.78,41,743.84,24.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,37.35V120H1200V105.8C1132.19,128.92,1055.71,121.31,985.66,102.83Z"); }
}
</style>