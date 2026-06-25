<template>
  <footer class="footer">
    <div class="container footer-inner">
      <a href="#hero" class="footer-logo">
        <span class="logo-dot" />
        <span><strong>portfolio</strong></span>
      </a>
      <p class="footer-copy">
        © {{ new Date().getFullYear() }} — Hecho con Vue 3 + Firebase
      </p>
      <a href="#hero" class="back-top" aria-label="Volver arriba">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M12 19V5M5 12l7-7 7 7"/>
        </svg>
      </a>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  border-top: 1px solid var(--border);
  padding: 2rem 0;
}
.footer-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
}
.footer-logo {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-family: var(--font-display);
  font-size: 0.9rem;
  color: var(--text-secondary);
}
.logo-dot {
  width: 6px; height: 6px;
  border-radius: 50%;
  background: var(--accent);
}
.footer-logo strong { color: var(--accent); }
.footer-copy {
  font-size: 0.82rem;
  color: var(--text-muted);
}
.back-top {
  width: 36px; height: 36px;
  border-radius: 8px;
  background: var(--bg-card);
  border: 1px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-muted);
  transition: color var(--transition), border-color var(--transition);
}
.back-top:hover {
  color: var(--accent);
  border-color: var(--accent);
}
</style>
