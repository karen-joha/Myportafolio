<template>
  <section id="contact">
    <div class="container contact-wrap">
      <div class="contact-info">
        <span class="section-label">Contacto</span>
        <div class="contact-details">
          <a href="mailto:karenjoha3838@gmail.com" class="contact-item">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            <span>karenjoha3838@gmail.com</span>
          </a>
          <a href="https://www.linkedin.com/in/karen-herrera-539156244/" target="_blank" rel="noopener" class="contact-item">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            <span>LinkedIn</span>
          </a>
        </div>
      </div>

 <!--      <form class="contact-form" @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="name">Nombre</label>
          <input id="name" v-model="form.name" type="text" placeholder="Tu nombre" required />
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input id="email" v-model="form.email" type="email" placeholder="tu@email.com" required />
        </div>
        <div class="form-group">
          <label for="message">Mensaje</label>
          <textarea id="message" v-model="form.message" rows="5" placeholder="Cuéntame sobre tu proyecto..." required />
        </div>

        <button type="submit" class="btn btn-primary submit-btn" :disabled="sent">
          <template v-if="!sent">
            Enviar mensaje
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
          </template>
          <template v-else>
            ✓ ¡Mensaje enviado!
          </template>
        </button>
      </form> -->
    </div>
  </section>
</template>

<script setup>
import { reactive, ref } from 'vue'

const form = reactive({ name: '', email: '', message: '' })
const sent = ref(false)

function handleSubmit() {
  // Abre el cliente de correo con los datos del formulario
  const subject = encodeURIComponent(`Contacto desde portfolio: ${form.name}`)
  const body    = encodeURIComponent(`Nombre: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)
  window.location.href = `mailto:tu@email.com?subject=${subject}&body=${body}`
  sent.value = true
  setTimeout(() => {
    sent.value = false
    form.name = form.email = form.message = ''
  }, 4000)
}
</script>

<style scoped>
.contact-details {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.contact-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: var(--text-secondary);
  font-size: 0.95rem;
  transition: color var(--transition);
}
.contact-item:hover { color: var(--accent); }

.contact-form {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}
.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
}
label {
  font-size: 0.82rem;
  font-weight: 500;
  color: var(--text-secondary);
  letter-spacing: 0.02em;
}
input, textarea {
  background: rgba(255,255,255,0.04);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 0.7rem 0.9rem;
  color: var(--text-primary);
  font-family: var(--font-body);
  font-size: 0.92rem;
  transition: border-color var(--transition);
  outline: none;
  resize: vertical;
}
input:focus, textarea:focus {
  border-color: var(--accent);
  box-shadow: 0 0 0 3px var(--accent-glow);
}
input::placeholder, textarea::placeholder { color: var(--text-muted); }

.submit-btn {
  width: 100%;
  justify-content: center;
  padding: 0.8rem;
  font-size: 0.95rem;
  margin-top: 0.25rem;
}
.submit-btn:disabled {
  background: #2d2d2d;
  color: #4CAF50;
  cursor: default;
  transform: none;
  box-shadow: none;
}

@media (max-width: 768px) {
  .contact-wrap { grid-template-columns: 1fr; gap: 2.5rem; }
}
</style>
