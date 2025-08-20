<template>
  <div class="projects-page">
    <!-- Recent Projects Section -->
    <section class="projects container" id="recent-projects">
      <div class="section-title" ref="sectionTitle1">
        <h2>Recent Projects</h2>
        <p class="subtitle">Discover my latest projects and achievements</p>
      </div>
      <div class="projects-grid" ref="projectsGrid1">
        <div class="project-card" ref="projectCard1">
          <div class="project-image">
            <img
              src="../assets/images/bloodshare.png"
              alt="Blood Donation Platform"
              class="rounded-lg shadow-md w-full h-48 object-cover"
            />
          </div>
          <div class="project-content">
            <h3>Blood Donation Platform</h3>
            <div class="project-date">March 2024 - June 2024</div>
            <p class="project-description">
              Blood donation platform developed as part of the final year
              project (PFE). It quickly connects donors and recipients,
              optimizing access to urgent transfusions.
            </p>
            <div class="project-tech">
              <span class="tech-tag">JavaScript</span>
              <span class="tech-tag">jQuery</span>
              <span class="tech-tag">PHP</span>
              <span class="tech-tag">MySQL</span>
              <span class="tech-tag">HTML5</span>
              <span class="tech-tag">CSS3</span>
            </div>
            <a
              href="https://github.com/Rahal-Lyes/plateforme-partage-de-sang.git"
              class="project-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project →
            </a>
          </div>
        </div>

        <div class="project-card" ref="projectCard2">
          <div class="project-image">
            <img
              src="../assets/images/findJobs.png"
              alt="Job Search Platform"
              class="rounded-lg shadow-md w-full h-48 object-cover"
            />
          </div>
          <div class="project-content">
            <h3>Job Search Platform</h3>
            <div class="project-date">July 2024 - August 2024</div>
            <p class="project-description">
              Trust Me is a platform that helps users find job opportunities by
              efficiently connecting job seekers and employers.
            </p>
            <div class="project-tech">
              <span class="tech-tag">Vue.js</span>
              <span class="tech-tag">TailwindCSS</span>
              <span class="tech-tag">JavaScript</span>
            </div>
            <a href="#" class="project-link">View Project →</a>
          </div>
        </div>

        <div class="project-card" ref="projectCard2">
          <div class="project-image">
            <img
              src="../assets/images/doctor_rahal.png"
              alt="Doctor Appointment"
              class="rounded-lg shadow-md w-full h-48 object-cover"
            />
          </div>
          <div class="project-content">
            <h3>Doctor Appointment</h3>
            <div class="project-date">July 2024 - August 2024</div>
            <p class="project-description">
              Doctor Appointment is a platform that allows patients to easily
              book medical consultations online, while doctors can efficiently
              manage their schedules
            </p>
            <div class="project-tech">
              <span class="tech-tag">Vue.js</span>
              <span class="tech-tag">TailwindCSS</span>
            </div>
            <a
              href="https://github.com/Rahal-Lyes/Dr-Rahal-Mohamed.git"
              class="project-link"
              >View Project →</a
            >
          </div>
        </div>
        <div class="project-card" ref="projectCard2">
          <div class="project-image">
            <img
              src="../assets//images/shareblood_v2.png"
              alt="Appointment Platform with FullCalendar"
              class="rounded-lg shadow-md w-full h-48 object-cover"
            />
          </div>
          <div class="project-content">
            <h3> Appointment Platform</h3>
            <div class="project-date">July 2025 - August 2025</div>
            <p class="project-description">
              A web platform that allows patients to easily book medical consultations online, 
      while doctors can efficiently manage their schedules.  
      Built with <span class="text-cyan-400 font-medium">FullCalendar</span> to handle 
      scheduling, and powered by <span class="text-blue-400 font-medium">Django REST Framework</span> 
      with serializers and filtering for robust backend data management.
            </p>
            <div class="project-tech">
          <span class="tech-tag">Vue.js</span>
      <span class="tech-tag">FullCalendar</span>
      <span class="tech-tag">TailwindCSS</span>
      <span class="tech-tag">Django</span>
      <span class="tech-tag">DRF</span>
          <span class="tech-tag">DRF</span>
            <span class="tech-tag">Vuetify</span>
            </div>
            <a
              href="https://github.com/Rahal-Lyes/shareBlood-v2.git"
              class="project-link mx-2"
              >Frontend github</a
            >
                <a
                
              href="https://github.com/Rahal-Lyes/shareblood-backend.git"
              class="project-link mx-2"
              >Backend github</a
            >
                <a
                
              href="https://share-blood-v2-bhhm.vercel.app/"
              class="project-link mx-1"
              >En ligne</a
            >
          </div>
          
        </div>
      </div>
    </section>

    <!-- Other Projects Section -->
    <section class="projects container" id="other-projects">
      <div class="section-title" ref="sectionTitle2">
        <h2 class="text-blue-950">Projects I worked on</h2>
      </div>
      <div class="projects-grid" ref="projectsGrid2">
        <div class="project-card" ref="projectCard3">
          <div class="project-image">
            <img
              src="../assets/images/Dashboard.png"
              alt="Medical Appointment Management"
              class="rounded-lg shadow-md w-full h-48 object-cover"
            />
          </div>
          <div class="project-content">
            <h3>Medical Appointment Management</h3>
            <div class="project-date">October 2024 - March 2025</div>
            <p class="project-description">
             A comprehensive platform designed to streamline medical appointment management.  
  Doctors can efficiently organize their schedules, while patients can easily book online consultations.  
  The system also manages bed availability and staff assignments, ensuring smoother healthcare operations.
            </p>
            <div class="project-tech">
              <span class="tech-tag">Vue.js 3</span>
              <span class="tech-tag">Vuetify</span>
              <span class="tech-tag">Pinia</span>
              <span class="tech-tag">Axios</span>
            </div>
          </div>
        </div>


        
      </div>
    </section>
  </div>
</template>

<script setup></script>

<style scoped>
.projects-page {
  min-height: 100vh;
  background: #f1f5f9;
  padding: 2rem 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.projects {
  margin-bottom: 4rem;
}

.section-title {
  text-align: center;
  margin-bottom: 3rem;
  color: #2d3748;
  margin-top: 6em;
}

.section-title h2 {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  background: linear-gradient(45deg, #fff, #0513dc);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.subtitle {
  font-size: 1.2rem;
  opacity: 0.9;
  font-weight: 300;
  margin-top: 1em;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  padding: 0 1rem;
}

.project-card {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.project-image {
  width: 100%;
  height: 250px;
  overflow: hidden;
}

.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.project-card:hover .project-image img {
  transform: scale(1.1);
}

.project-content {
  padding: 1.5rem;
}

.project-content h3 {
  font-size: 1.5rem;
  font-weight: bold;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.project-date {
  color: #667eea;
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 1rem;
}

.project-description {
  color: #4a5568;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-size: 1rem;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.tech-tag {
  background: linear-gradient(45deg, #667eea, #764ba2);
  color: #2d3748;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
}

.project-link {
  color: #667eea;
  text-decoration: none;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
}

.project-link:hover {
  color: #764ba2;
  transform: translateX(5px);
}

.rounded-lg {
  border-radius: 0.5rem;
}

.shadow-md {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
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
    gap: 1.5rem;
  }

  .section-title h2 {
    font-size: 2rem;
  }

  .project-content {
    padding: 1rem;
  }
}
</style>
