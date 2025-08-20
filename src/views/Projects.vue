<template>
  <div class="projects-page">
    <!-- Recent Projects Section -->
    <section class="projects container" id="recent-projects">
      <div class="section-title" ref="sectionTitle1">
        <h2>Recent Projects</h2>
        <p class="subtitle">Discover my latest projects and achievements</p>
      </div>
      <div class="projects-grid" ref="projectsGrid1">
        <div class="project-card" v-for="(project, index) in recentProjects" :key="index" :ref="el => setProjectRef(el, 'recent', index)">
          <div class="project-image">
            <img
              :src="project.image"
              :alt="project.title"
              class="rounded-lg shadow-md w-full h-48 object-cover"
            />
          </div>
          <div class="project-content">
            <h3>{{ project.title }}</h3>
            <div class="project-date">{{ project.date }}</div>
            <p class="project-description">
              {{ project.description }}
            </p>
            <div class="project-tech">
              <span class="tech-tag" v-for="tech in project.technologies" :key="tech">{{ tech }}</span>
            </div>
            <a
              v-if="project.link"
              :href="project.link"
              class="project-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project →
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects I worked on Section -->
    <section class="projects container" id="worked-projects">
      <div class="section-title" ref="sectionTitle2">
        <h2>Projects I worked on</h2>
      </div>
      <div class="projects-grid" ref="projectsGrid2">
        <div class="project-card" v-for="(project, index) in workedProjects" :key="index" :ref="el => setProjectRef(el, 'worked', index)">
          <div class="project-image">
            <img
              :src="project.image"
              :alt="project.title"
              class="rounded-lg shadow-md w-full h-48 object-cover"
            />
          </div>
          <div class="project-content">
            <h3>{{ project.title }}</h3>
            <div class="project-date">{{ project.date }}</div>
            <p class="project-description">
              {{ project.description }}
            </p>
            <div class="project-tech">
              <span class="tech-tag" v-for="tech in project.technologies" :key="tech">{{ tech }}</span>
            </div>
            <a
              v-if="project.link"
              :href="project.link"
              class="project-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project →
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

// Template refs
const sectionTitle1 = ref(null)
const sectionTitle2 = ref(null)
const projectsGrid1 = ref(null)
const projectsGrid2 = ref(null)
const recentProjectRefs = ref([])
const workedProjectRefs = ref([])

// Function to set project refs
const setProjectRef = (el, type, index) => {
  if (el) {
    if (type === 'recent') {
      recentProjectRefs.value[index] = el
    } else {
      workedProjectRefs.value[index] = el
    }
  }
}

// Projects data
const recentProjects = ref([
  {
    title: 'Blood Donation Platform',
    date: 'March 2024 - June 2024',
    description: 'Blood donation platform developed as part of the final year project (PFE). It quickly connects donors and recipients, optimizing access to urgent transfusions.',
    technologies: ['JavaScript', 'jQuery', 'PHP', 'MySQL', 'HTML5', 'CSS3'],
    image: 'images/blood_share.png',
    link: 'http://bloodshare.free.nf/public/index.php'
  },
  {
    title: 'Job Search Platform',
    date: 'July 2024 - August 2024',
    description: 'Trust Me is a platform that helps users find job opportunities by efficiently connecting job seekers and employers.',
    technologies: ['Vue.js', 'TailwindCSS', 'JavaScript'],
    image: 'images/findJobs.png',
    link: null
  }
])

const workedProjects = ref([
  {
    title: 'Medical Appointment Management',
    date: 'October 2024 - March 2025',
    description: 'Smart platform that facilitates medical appointment management. Doctors can organize their schedule, and patients can easily book online consultations.',
    technologies: ['Vue.js 3', 'Vuetify', 'Pinia', 'Axios'],
    image: 'images/Dashboard.png',
    link: null
  }
])

// Animation timeline
let tl = null

onMounted(() => {
  // Create main timeline
  tl = gsap.timeline()

  // Animate section titles
  tl.from([sectionTitle1.value, sectionTitle2.value], {
    duration: 1,
    y: 50,
    opacity: 0,
    stagger: 0.2,
    ease: "power3.out"
  })

  // Animate recent project cards
  tl.from(recentProjectRefs.value, {
    duration: 0.8,
    y: 80,
    opacity: 0,
    stagger: 0.15,
    ease: "power2.out"
  }, "-=0.5")

  // Animate worked project cards
  tl.from(workedProjectRefs.value, {
    duration: 0.8,
    y: 80,
    opacity: 0,
    stagger: 0.15,
    ease: "power2.out"
  }, "-=0.3")

  // Add hover animations for project cards
  const allProjectCards = [...recentProjectRefs.value, ...workedProjectRefs.value]
  
  allProjectCards.forEach(card => {
    if (card) {
      // Hover in
      card.addEventListener('mouseenter', () => {
        gsap.to(card, {
          duration: 0.3,
          y: -10,
          scale: 1.02,
          boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
          ease: "power2.out"
        })
      })

      // Hover out
      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          duration: 0.3,
          y: 0,
          scale: 1,
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
          ease: "power2.out"
        })
      })
    }
  })

  // Add scroll-triggered animations for tech tags
  ScrollTrigger.batch('.tech-tag', {
    onEnter: elements => {
      gsap.from(elements, {
        duration: 0.6,
        scale: 0,
        opacity: 0,
        stagger: 0.1,
        ease: "back.out(1.7)"
      })
    }
  })

  // Add scroll-triggered animations for project links
  ScrollTrigger.batch('.project-link', {
    onEnter: elements => {
      gsap.from(elements, {
        duration: 0.8,
        x: -50,
        opacity: 0,
        ease: "power2.out"
      })
    }
  })
})

onUnmounted(() => {
  // Clean up GSAP animations and ScrollTrigger
  if (tl) {
    tl.kill()
  }
  ScrollTrigger.getAll().forEach(trigger => trigger.kill())
})
</script>

<style scoped>
.projects-page {
  min-height: 100vh;
  padding: 2rem 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.section-title {
  text-align: center;
  margin-bottom: 4rem;
  opacity: 0;
}

.section-title h2 {
  font-size: 3rem;
  font-weight: 700;
  color: white;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, #fff, #e0e0e0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.subtitle {
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 300;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  margin-bottom: 6rem;
}

.project-card {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  opacity: 0;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.project-image {
  margin-bottom: 1.5rem;
  overflow: hidden;
  border-radius: 12px;
}

.project-image img {
  transition: transform 0.3s ease;
}

.project-card:hover .project-image img {
  transform: scale(1.05);
}

.project-content h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.project-date {
  font-size: 0.9rem;
  color: #667eea;
  font-weight: 500;
  margin-bottom: 1rem;
}

.project-description {
  color: #4a5568;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.tech-tag {
  background: linear-gradient(45deg, #667eea, #764ba2);
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
  transform: scale(0);
  opacity: 0;
}

.project-link {
  display: inline-flex;
  align-items: center;
  color: #667eea;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  opacity: 0;
}

.project-link:hover {
  color: #764ba2;
  transform: translateX(5px);
}

.rounded-lg {
  border-radius: 0.5rem;
}

.shadow-md {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.w-full {
  width: 100%;
}

.h-48 {
  height: 12rem;
}

.object-cover {
  object-fit: cover;
}

@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
  
  .section-title h2 {
    font-size: 2rem;
  }
  
  .project-card {
    padding: 1.5rem;
  }
  
  .container {
    padding: 0 1rem;
  }
}
</style>