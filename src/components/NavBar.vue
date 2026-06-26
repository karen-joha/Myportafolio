<template>
  <nav class="navbar" :class="{ scrolled: isScrolled }">
    <div class="container nav-inner">
      <a href="#hero" class="nav-logo">
        <span class="logo-dot" />
        <span>Mi <strong>Portafolio</strong></span>
      </a>

      <ul class="nav-links">
        <li v-for="link in links" :key="link.href">
          <a :href="link.href" :class="{ active: activeSection === link.id }">
            {{ link.label }}
          </a>
        </li>
      </ul>

      <button class="theme-toggle" @click="toggle" :aria-label="isDark ? 'Modo claro' : 'Modo oscuro'">
        <svg v-if="isDark" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
          stroke-width="2">
          <circle cx="12" cy="12" r="5" />
          <path
            d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
        </svg>
        <svg v-else width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      </button>
      <!-- Mobile toggle -->
      <button class="burger" @click="menuOpen = !menuOpen" aria-label="Menú">
        <span :class="{ open: menuOpen }" />
        <span :class="{ open: menuOpen }" />
        <span :class="{ open: menuOpen }" />
      </button>
    </div>

    <!-- Mobile menu -->
    <div class="mobile-menu" :class="{ open: menuOpen }">
      <a v-for="link in links" :key="link.href" :href="link.href" @click="menuOpen = false">
        {{ link.label }}
      </a>
      <a href="#contact" class="btn btn-primary" @click="menuOpen = false">Contactar</a>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useTheme } from '../composables/useTheme'
const { isDark, toggle } = useTheme()

const links = [
  { href: '#hero', id: 'hero', label: 'Inicio' },
  { href: '#about', id: 'about', label: 'Sobre mí' },
  { href: '#projects', id: 'projects', label: 'Proyectos' },
  { href: '#contact', id: 'contact', label: 'Contacto' },
]

const isScrolled = ref(false)
const activeSection = ref('hero')
const menuOpen = ref(false)

function onScroll() {
  isScrolled.value = window.scrollY > 40

  const sections = links.map(l => document.getElementById(l.id)).filter(Boolean)
  const current = sections.find(s => {
    const { top, bottom } = s.getBoundingClientRect()
    return top <= 120 && bottom > 0
  })
  if (current) activeSection.value = current.id
}

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  padding: 1.25rem 0;
  transition: background 0.3s, border-color 0.3s, padding 0.3s;
}

.navbar.scrolled {
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border);
  padding: 0.85rem 0;
}

.nav-inner {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.nav-logo { color: var(--accent); font-weight: 700; }
.nav-logo strong { color: var(--accent); }

.theme-toggle {
  width: 38px; height: 38px;
  border-radius: 50%;
  border: 1px solid var(--border-hover);
  background: transparent;
  color: var(--text-primary);
  display: flex; align-items: center; justify-content: center;
  cursor: pointer;
  transition: var(--transition);
  flex-shrink: 0;
}
.theme-toggle:hover { border-color: var(--accent); color: var(--accent); }

.nav-links {
  display: flex;
  list-style: none;
  gap: 0.25rem;
  margin-left: auto;
}

.nav-links a {
  padding: 0.4rem 0.8rem;
  border-radius: 8px;
  font-size: 0.88rem;
  color: var(--text-secondary);
  transition: color var(--transition), background var(--transition);
}

.nav-links a:hover,
.nav-links a.active {
  color: var(--text-primary);
  background: rgba(255, 255, 255, 0.06);
}

.nav-links a.active {
  color: var(--accent);
}

.nav-cta {
  font-size: 0.85rem;
  padding: 0.5rem 1.1rem;
}

.burger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  margin-left: auto;
  padding: 4px;
}

.burger span {
  display: block;
  width: 22px;
  height: 2px;
  background: var(--text-primary);
  border-radius: 2px;
  transition: var(--transition);
  transform-origin: center;
}

.burger span.open:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}

.burger span.open:nth-child(2) {
  opacity: 0;
}

.burger span.open:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

.mobile-menu {
  display: none;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem 1.5rem;
  background: rgba(13, 13, 13, 0.97);
  border-top: 1px solid var(--border);
}

.mobile-menu.open {
  display: flex;
}

.mobile-menu a {
  padding: 0.65rem 0;
  color: var(--text-secondary);
  font-size: 0.95rem;
  border-bottom: 1px solid var(--border);
}

.mobile-menu a:last-child {
  border-bottom: none;
}

.mobile-menu .btn {
  margin-top: 0.5rem;
  text-align: center;
  justify-content: center;
}

@media (max-width: 768px) {

  .nav-links,
  .nav-cta {
    display: none;
  }

  .burger {
    display: flex;
  }
}
</style>
