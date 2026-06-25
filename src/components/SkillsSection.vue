<template>
  <section id="skills" class="skills-section">
    <div class="container">
      <span class="section-label">Habilidades</span>
      <h2 class="section-title">Stack técnico</h2>
      <p class="section-desc">Tecnologías con las que trabajo a diario para construir productos completos.</p>

      <div class="skills-grid">
        <div v-for="group in skillGroups" :key="group.category" class="skill-group">
          <h3 class="group-title">{{ group.category }}</h3>
          <div class="skill-list">
            <div v-for="skill in group.items" :key="skill.name" class="skill-item">
              <div class="skill-icon" v-html="skill.icon" />
              <span class="skill-name">{{ skill.name }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const skillGroups = [
  {
    category: 'Frontend',
    items: [
      { name: 'Vue 3',       icon: '<svg width="22" height="22" viewBox="0 0 32 32" fill="#4FC08D"><path d="M2 4l14 24L30 4h-5.5L16 18.5 7.5 4z"/></svg>' },
      { name: 'React',       icon: '<svg width="22" height="22" viewBox="0 0 32 32" fill="#61DAFB"><circle cx="16" cy="16" r="2.5"/><ellipse cx="16" cy="16" rx="14" ry="5.5" fill="none" stroke="#61DAFB" stroke-width="1.5"/><ellipse cx="16" cy="16" rx="14" ry="5.5" fill="none" stroke="#61DAFB" stroke-width="1.5" transform="rotate(60 16 16)"/><ellipse cx="16" cy="16" rx="14" ry="5.5" fill="none" stroke="#61DAFB" stroke-width="1.5" transform="rotate(120 16 16)"/></svg>' },
      { name: 'TypeScript',  icon: '<svg width="22" height="22" viewBox="0 0 32 32"><rect width="32" height="32" rx="4" fill="#3178C6"/><text x="4" y="24" font-size="18" font-weight="700" fill="white" font-family="sans-serif">TS</text></svg>' },
      { name: 'Tailwind',    icon: '<svg width="22" height="22" viewBox="0 0 32 32" fill="#38BDF8"><path d="M9 13.5c1.5-6 5.5-7.5 8-3s5.5 5 8 1c-1.5 6-5.5 7.5-8 3S10.5 17 9 13.5zm-8 8c1.5-6 5.5-7.5 8-3s5.5 5 8 1c-1.5 6-5.5 7.5-8 3S2.5 25 1 21.5z"/></svg>' },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js',     icon: '<svg width="22" height="22" viewBox="0 0 32 32" fill="#8CC84B"><path d="M16 2L3 9v14l13 7 13-7V9L16 2zm0 2.3l10.4 5.7-10.4 6-10.4-6L16 4.3zM5 11l10 5.8V29L5 23.2V11zm12 17.8V16.8L27 11v12.2L17 28.8z"/></svg>' },
      { name: 'Firebase',    icon: '<svg width="22" height="22" viewBox="0 0 32 32" fill="#FFA000"><path d="M5.8 25.6L9.4 5.3l5.7 9.3-2.5 4.3L5.8 25.6zm20.4 0L19.1 7.4l-3 5.7 5.6 9.2 4.5 3.3zM16 17l-2-3.5L19.1 7.4 16 17z"/></svg>' },
      { name: 'Express',     icon: '<svg width="22" height="22" viewBox="0 0 32 32" fill="#ccc"><text x="1" y="22" font-size="12" font-weight="700" font-family="sans-serif">Ex</text></svg>' },
      { name: 'PostgreSQL',  icon: '<svg width="22" height="22" viewBox="0 0 32 32" fill="#336791"><circle cx="16" cy="16" r="12" fill="none" stroke="#336791" stroke-width="2"/><text x="9" y="21" font-size="12" font-weight="700" fill="#336791" font-family="sans-serif">PG</text></svg>' },
    ],
  },
  {
    category: 'Herramientas',
    items: [
      { name: 'Git / GitHub', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="#f0f0f0"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>' },
      { name: 'Vite',        icon: '<svg width="22" height="22" viewBox="0 0 32 32"><path d="M28 5L16 28 4 5h8l4 8 4-8h8z" fill="#646CFF"/></svg>' },
      { name: 'Docker',      icon: '<svg width="22" height="22" viewBox="0 0 32 32" fill="#2496ED"><rect x="2" y="10" width="28" height="12" rx="2" fill="none" stroke="#2496ED" stroke-width="1.5"/><text x="6" y="21" font-size="11" font-weight="700" fill="#2496ED" font-family="sans-serif">🐳</text></svg>' },
      { name: 'Vercel',      icon: '<svg width="22" height="22" viewBox="0 0 32 32" fill="#f0f0f0"><path d="M16 3L30 28H2L16 3z"/></svg>' },
    ],
  },
]
</script>

<style scoped>
.skills-section { background: rgba(255,255,255,0.01); }
.skills-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-top: 3rem;
}
.skill-group {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 1.75rem;
  transition: border-color var(--transition);
}
.skill-group:hover { border-color: var(--border-hover); }
.group-title {
  font-family: var(--font-display);
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 1.25rem;
}
.skill-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}
.skill-item {
  display: flex;
  align-items: center;
  gap: 0.85rem;
  padding: 0.65rem 0.75rem;
  border-radius: var(--radius);
  background: rgba(255,255,255,0.03);
  transition: background var(--transition);
}
.skill-item:hover { background: rgba(255,255,255,0.06); }
.skill-icon { display: flex; align-items: center; flex-shrink: 0; }
.skill-name { font-size: 0.9rem; color: var(--text-secondary); }

@media (max-width: 900px) {
  .skills-grid { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 560px) {
  .skills-grid { grid-template-columns: 1fr; }
}
</style>
