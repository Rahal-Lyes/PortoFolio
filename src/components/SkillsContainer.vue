

<!-- SkillsContainer Component -->
<template>
  <div class="skills-container">
    <div
      v-for="(skill, index) in skills"
      :key="skill.name"
      ref="skillElements"
      class="skill-card group"
      :style="{ animationDelay: `${index * 0.2}s` }"
    >
      <div class="skill-content">
        <!-- Effet de brillance au survol -->
        <div class="shine-effect"></div>
        
        <!-- Icône avec effet hover -->
        <div class="icon-container">
          <img :src="skill.icon" :alt="skill.name" class="skill-icon" />
          <div class="icon-glow"></div>
        </div>
        
        <!-- Nom de la compétence -->
        <h3 class="skill-name">{{ skill.name }}</h3>
        
        <!-- Niveau de compétence -->
        <div class="skill-level">
          <span class="level-text">{{ skill.level || 'Avancé' }}</span>
          <div class="level-bar">
            <div 
              class="level-fill" 
              :class="getLevelClass(skill.level || 'Avancé')"
            ></div>
          </div>
        </div>
        
        <!-- Points décoratifs -->
        <div class="decorative-dots">
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const props = defineProps({
  skills: {
    type: Array,
    required: true,
  },
  time: {
    type: Number,
    default: 20,
  },
});

const skillElements = ref([]);

// Fonction pour obtenir la classe CSS du niveau
const getLevelClass = (level) => {
  const levels = {
    'Expert': 'level-expert',
    'Avancé': 'level-advanced',
    'Intermédiaire': 'level-intermediate',
    'Débutant': 'level-beginner'
  };
  return levels[level] || 'level-advanced';
};

onMounted(() => {
  if (skillElements.value.length > 0) {
    // Animation d'entrée avec ScrollTrigger
    gsap.fromTo(skillElements.value, 
      {
        opacity: 0,
        y: 100,
        scale: 0.8,
        rotationX: -90,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        rotationX: 0,
        duration: 1,
        stagger: 0.15,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: skillElements.value[0],
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Animation flottante continue
    skillElements.value.forEach((el, index) => {
      gsap.to(el, {
        y: "random(-20, 20)",
        duration: "random(3, 5)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: index * 0.2
      });

      // Rotation subtile au hover
      el.addEventListener('mouseenter', () => {
        gsap.to(el, {
          rotationY: 15,
          scale: 1.05,
          duration: 0.3,
          ease: "power2.out"
        });
      });

      el.addEventListener('mouseleave', () => {
        gsap.to(el, {
          rotationY: 0,
          scale: 1,
          duration: 0.3,
          ease: "power2.out"
        });
      });
    });
  }
});
</script>

<style scoped>
.skills-container {
  @apply flex flex-wrap justify-center gap-8 p-6;
  perspective: 1000px;
  }
  
  .skill-card {
    @apply relative w-64 h-80 cursor-pointer;
    transform-style: preserve-3d;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    .skill-content {
      @apply relative w-full h-full bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden;
      @apply flex flex-col items-center justify-center p-8;
      background: linear-gradient(145deg, #ffffff 0%, #f8fafc 100%);
      backdrop-filter: blur(10px);
      transition: all 0.3s ease;
      }
      
      .skill-card:hover .skill-content {
        @apply shadow-2xl;
        box-shadow: 
        0 25px 50px -12px rgba(0, 0, 0, 0.15),
        0 0 50px rgba(59, 130, 246, 0.1);
        transform: translateY(-5px);
        }
        
        .shine-effect {
          @apply absolute inset-0 opacity-0 transition-opacity duration-500;
          background: linear-gradient(
            135deg,
            transparent 30%,
            rgba(255, 255, 255, 0.5) 50%,
            transparent 70%
            );
            transform: translateX(-100%);
            }
            .skill-card:hover .shine-effect {
              @apply opacity-100;
              animation: shine 0.8s ease-in-out;
              }
              
              @keyframes shine {
                0% { transform: translateX(-100%); }
                100% { transform: translateX(100%); }
                }
                
                .icon-container {
                  @apply relative mb-6;
                  }
                  
                  .skill-icon {
                    @apply w-20 h-20 relative z-10 transition-transform duration-300;
                    filter: drop-shadow(0 4px 20px rgba(0, 0, 0, 0.1));
                    }
                    
                    .skill-card:hover .skill-icon {
                      transform: scale(1.1) rotateY(5deg);
                      }
                      
                      .icon-glow {
                        @apply absolute inset-0 rounded-full opacity-0 transition-all duration-300;
                        background: radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%);
                        transform: scale(1.5);
                        }

                        .skill-card:hover .icon-glow {
                          @apply opacity-100;
                          animation: pulse 2s infinite;
                          }
                          
                          @keyframes pulse {
                            0%, 100% { transform: scale(1.5); opacity: 0.3; }
                            50% { transform: scale(1.8); opacity: 0.1; }
                            }
                            
                            .skill-name {
                              @apply text-xl font-bold text-gray-800 mb-4 text-center transition-colors duration-300;
                              }
                              
                              .skill-card:hover .skill-name {
  @apply text-blue-600;
}

.skill-level {
  @apply w-full text-center;
}

.level-text {
  @apply text-sm font-medium text-gray-600 mb-2 block;
  }

  .level-bar {
    @apply w-full h-2 bg-gray-200 rounded-full overflow-hidden;
    }
    
    .level-fill {
      @apply h-full rounded-full transition-all duration-1000 ease-out;
  animation: fillBar 2s ease-out;
} 

@keyframes fillBar {
  from { width: 0; }
  }
  
  .level-expert {
    background: linear-gradient(to right, #4ade80, #16a34a);
    width: 95%;
}

.level-advanced {
  background: linear-gradient(to right, #60a5fa, #2563eb);
  width: 80%;
}

.level-intermediate {
  background: linear-gradient(to right, #facc15, #f97316);
  width: 65%;
}

.level-beginner {
  background: linear-gradient(to right, #fb923c, #dc2626);
  width: 40%;
}

.decorative-dots {
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 0.5rem;
}

.dot {
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 9999px;
  background-color: #d1d5db;
  transition: all 0.3s ease;
}

.skill-card:hover .dot {
  background-color: #3b82f6;
  animation: dotPulse 1.5s infinite;
}

.dot:nth-child(2) {
  animation-delay: 0.2s;
}

.dot:nth-child(3) {
  animation-delay: 0.4s;
  }
  
@keyframes dotPulse {
  0%, 100% { transform: scale(1); opacity: 0.7; }
  50% { transform: scale(1.3); opacity: 1; }
}


@media (max-width: 768px) {
  .skill-card {
    width: 12rem;
    height: 16rem;
  }
  
  .skill-icon {
    width: 4rem;
    height: 4rem;
  }
  
  .skill-name {
    font-size: 1.125rem;
    line-height: 1.75rem;
    }
    }
  
    @supports (backdrop-filter: blur(10px)) {
  .skill-content {
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
  }
}
</style>
  