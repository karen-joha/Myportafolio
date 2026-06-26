<template>
  <section id="about">
    <div class="container about-grid">
      <div class="about-text">
        <span class="section-label">Sobre mí</span>
        <h2 class="section-title">
          {{ about?.title }}
        </h2>
        <p v-for="(paragraph, index) in about?.description" :key="index">
          {{ paragraph }}
        </p>
        <div class="about-badges">
          <span v-for="badge in about?.badges" :key="badge" class="badge">
            {{ badge }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useAbout } from '../composables/useAbout'

const { about, loading } = useAbout()
</script>

<style scoped>
.about-grid {
  display: grid;
  gap: 4rem;
  align-items: center;
}

.about-text p {
  color: var(--text-secondary);
  margin-bottom: 1rem;
  line-height: 1.75;
}

.about-text strong {
  color: var(--accent-light);
  font-weight: 500;
}

.about-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1.5rem;
}

.badge {
  font-size: 0.78rem;
  font-weight: 500;
  padding: 0.3rem 0.75rem;
  border-radius: 100px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--border);
  color: var(--text-secondary);
}

.about-card {
  display: flex;
  justify-content: center;
}

.card-inner {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 2.5rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  width: 100%;
  max-width: 340px;
}

.avatar-ring {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 2px solid var(--accent);
  box-shadow: 0 0 30px var(--accent-glow);
  display: flex;
  align-items: center;
  justify-content: center;
}

.avatar-placeholder {
  width: 108px;
  height: 108px;
  border-radius: 50%;
  background: rgba(124, 106, 247, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent);
}

.about-stats {
  display: flex;
  gap: 1.5rem;
  width: 100%;
  justify-content: center;
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.2rem;
}

.stat-num {
  font-family: var(--font-display);
  font-size: 1.6rem;
  font-weight: 700;
  color: var(--text-primary);
}

.stat-label {
  font-size: 0.72rem;
  color: var(--text-muted);
  text-align: center;
  line-height: 1.3;
}

@media (max-width: 768px) {
  .about-grid {
    grid-template-columns: 1fr;
  }

  .about-card {
    order: -1;
  }
}
</style>
