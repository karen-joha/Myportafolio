<template>
  <section class="hero" id="projects">
    <div class="hero-bg" aria-hidden="true" />
    <div class="hero-overlay" aria-hidden="true" />
    <div class="container hero-content">
      <h2 class="section-title projects-title">Proyectos</h2>
      <p class="section-desc">
        Selección de proyectos reales, cargados desde Firestore en tiempo real.
      </p>

      <!-- Loading -->
      <div v-if="loading" class="projects-loading">
        <div v-for="n in 3" :key="n" class="skeleton-card" />
      </div>

      <!-- Error -->
      <div v-else-if="error" class="projects-error">
        <p>{{ error }}</p>
        <p class="error-hint">Revisa tu conexión a Firebase en las variables de entorno.</p>
      </div>

      <!-- Sin proyectos -->
      <div v-else-if="projects.length === 0" class="projects-empty">
        <p>No hay proyectos visibles aún. Activa <code>visible: true</code> en Firestore.</p>
      </div>

      <!-- Grid de proyectos -->
      <div v-else class="projects-grid">
        <article v-for="project in projects" :key="project.id" class="project-card">
          <h3 class="project-title">{{ project.title }}</h3>
          <p class="project-desc">{{ project.description }}</p>

          <div class="project-footer">
            <a v-if="project.link" :href="project.link" target="_blank" rel="noopener" class="project-cta">
              Ver proyecto

            </a>
            <a v-if="project.repository" :href="project.repository" target="_blank" rel="noopener" class="project-cta">
              Ver Repositorio

            </a>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useProjects } from '../composables/useProjects'

const { projects, loading, error } = useProjects()
</script>

<style scoped>
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  inset: 0;
  background-image: url('	https://my-portfolio-beta-two-45.vercel.app/img/backgraund2.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
    filter: blur(2px);

}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: color-mix(in srgb, var(--bg) 70%, transparent);
  backdrop-filter: saturate(200%);
}

.hero-content {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-align: center;
  align-items: center;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.25rem;
  margin-top: 3rem;
}

/* Loading skeletons */
.projects-loading {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.25rem;
  margin-top: 3rem;
}

.skeleton-card {
  height: 220px;
  border-radius: var(--radius-lg);
  background: linear-gradient(90deg,
      var(--bg-card) 25%,
      rgba(255, 255, 255, 0.04) 50%,
      var(--bg-card) 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
}

@keyframes shimmer {
  from {
    background-position: 200% 0;
  }

  to {
    background-position: -200% 0;
  }
}

/* Error / empty */
.projects-error,
.projects-empty {
  margin-top: 3rem;
  padding: 2.5rem;
  border: 1px dashed var(--border);
  border-radius: var(--radius-lg);
  text-align: center;
  color: var(--text-secondary);
}

.projects-error p:first-child {
  color: #ff6b6b;
  margin-bottom: 0.5rem;
}

.error-hint {
  font-size: 0.88rem;
  color: var(--text-muted);
}

.projects-empty code {
  background: rgba(255, 255, 255, 0.06);
  padding: 0.15rem 0.4rem;
  border-radius: 4px;
  font-size: 0.85rem;
  color: var(--accent-light);
}

/* Card */
.project-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 1.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
  transition: border-color var(--transition), transform var(--transition), box-shadow var(--transition);
}

.project-card:hover {
  border-color: rgba(124, 106, 247, 0.35);
  transform: translateY(-3px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.3);
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.project-icon {
  width: 44px;
  height: 44px;
  border-radius: 10px;
  background: rgba(124, 106, 247, 0.12);
  border: 1px solid rgba(124, 106, 247, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent);
}

.project-links {
  display: flex;
  gap: 0.5rem;
}

.icon-link {
  color: var(--text-muted);
  transition: color var(--transition);
  display: flex;
  align-items: center;
}

.icon-link:hover {
  color: var(--accent);
}

.project-title {
  font-family: var(--font-display);
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text-primary);
}

.project-desc {
  font-size: 0.9rem;
  color: var(--text-secondary);
  line-height: 1.65;
  flex: 1;
}

.project-footer {
  margin-top: auto;
  gap: 1rem;
  display: flex;
  padding-top: 0.5rem;
  justify-content: center;
}

.project-btns {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  margin-top: 0.5rem;
}

.btn-pill {
  padding: 0.5rem 1.2rem;
  border-radius: 50px;
  background: #2979ff;
  color: #fff;
  font-size: 0.85rem;
  font-weight: 500;
  transition: opacity 0.2s;
}

.btn-pill:hover {
  opacity: 0.85;
}

.project-cta {
  background-color: var(--accent);
  padding: 0.5rem;
  color: aliceblue;
  border-radius: 10px;
  font-weight: 500;
  gap: 0.65rem;
}

.project-cta:hover {
  gap: 0.65rem;
}

.projects-title {
  color: var(--accent);
}
</style>
