<template>
  <section id="hero" class="hero">
    <div class="hero-bg backdrop-blur-md bg-white/50" aria-hidden="true" />
    <div class="hero-overlay" aria-hidden="true" />

    <div class="container hero-content ">
      <h1 class="hero-name fade-up delay-2">Hola, soy Karen<span class="accent-dot">.</span></h1>
      <p class="hero-desc fade-up delay-3">
        Construyo experiencias digitales modernas, accesibles y con atención al detalle.
        Especializado en Vue, React y Node.js.
      </p>

      <div class="hero-actions fade-up delay-4">
        <a href="#projects" class="btn btn-primary">
          Ver proyectos
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
        <a href="#contact" class="btn btn-outline">Contactar</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;
}

/* ELIMINA .hero-grid-bg y .hero-glow, AGREGA: */
.hero-bg {
  position: absolute;
  inset: 0;
  background-image: url('https://images.unsplash.com/photo-1607799279861-4dd421887fb3?w=1600&q=80');
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
  padding-top: 6rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-align: center;
  align-items: center;
}

.hero-eyebrow {
  font-size: 1.1rem;
  color: var(--text-secondary);
  font-weight: 400;
}

.hero-name {
  font-family: var(--font-display);
  font-size: clamp(3rem, 8vw, 5.5rem);
  font-weight: 700;
  line-height: 1.05;
  letter-spacing: -0.02em;
}

.accent-dot {
  color: var(--accent);
}

.hero-role {
  margin-top: -0.25rem;
}

.role-badge {
  display: inline-block;
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--accent-light);
  background: rgba(124, 106, 247, 0.12);
  border: 1px solid rgba(124, 106, 247, 0.25);
  padding: 0.35rem 0.9rem;
  border-radius: 100px;
  letter-spacing: 0.02em;
}

.hero-desc {
  color: var(--text-secondary);
  font-size: 1.1rem;
  max-width: 520px;
  line-height: 1.65;
  margin-top: 0.25rem;
  text-align: center;
}

.hero-actions {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  margin-top: 0.5rem;
  justify-content: center;
}

.hero-socials {
  display: flex;
  gap: 1rem;
  margin-top: 0.5rem;
  justify-content: center;
}

.hero-socials a {
  color: var(--text-muted);
  transition: color var(--transition), transform var(--transition);
}

.hero-socials a:hover {
  color: var(--accent);
  transform: translateY(-2px);
}

.scroll-hint {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  color: var(--text-muted);
  animation: bounce 2s infinite;
  transition: color var(--transition);
}

.scroll-hint:hover {
  color: var(--accent);
}

@keyframes bounce {

  0%,
  100% {
    transform: translateX(-50%) translateY(0);
  }

  50% {
    transform: translateX(-50%) translateY(6px);
  }
}
</style>
