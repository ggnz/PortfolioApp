<template>
  <section id="hero" class="relative min-h-screen flex items-center grid-bg overflow-hidden">
    <!-- Glow blobs -->
    <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none"></div>
    <div class="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent2/5 rounded-full blur-3xl pointer-events-none"></div>

    <div class="max-w-6xl mx-auto px-6 pt-24 pb-16 w-full">
      <p class="font-mono text-accent text-sm tracking-widest mb-6 animate-fade-up" style="animation-delay:0.1s; opacity:0">
        Hi, my name is
      </p>
      <h1
        class="font-display font-extrabold text-text leading-none mb-4 animate-fade-up"
        style="font-size: clamp(2.8rem, 8vw, 6rem); animation-delay:0.2s; opacity:0"
      >
        {{ data.name }}<span class="text-accent">.</span>
      </h1>
      <h2
        class="font-display font-bold text-subtle leading-tight mb-8 animate-fade-up"
        style="font-size: clamp(1.8rem, 5vw, 3rem); animation-delay:0.3s; opacity:0"
      >
        {{ data.role }}
      </h2> 

      <div class="flex flex-wrap gap-4 animate-fade-up" style="animation-delay:0.5s; opacity:0">
        <a
          href="#projects"
          class="font-mono text-sm text-bg bg-accent px-6 py-3 rounded hover:bg-accent/90 transition-colors font-medium"
        >
          View my work
        </a>
        <a
          href="#about"
          class="font-mono text-sm text-accent border border-accent px-6 py-3 rounded hover:bg-accent/10 transition-colors"
        >
          About me
        </a>
      </div>

      <!-- Floating terminal line -->
      <div class="mt-20 animate-fade-up" style="animation-delay:0.7s; opacity:0">
        <div class="inline-flex items-center gap-3 bg-surface border border-border rounded px-4 py-2">
          <span class="font-mono text-xs text-muted">$</span>
          <span class="font-mono text-xs text-subtle">{{ typed }}</span>
          <span class="font-mono text-xs text-accent animate-blink">█</span>
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-up" style="animation-delay:1s; opacity:0">
      <span class="font-mono text-xs text-muted tracking-widest">scroll</span>
      <div class="w-px h-12 bg-gradient-to-b from-accent/50 to-transparent"></div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { data } from '../data.js'

const lines = [
  'Python',
  'SQL',
  'Power BI',
  'Vue.js',
  'React.js',
]

const typed = ref('')
let lineIndex = 0
let charIndex = 0
let deleting = false

function type() {
  const current = lines[lineIndex]
  if (!deleting) {
    typed.value = current.slice(0, ++charIndex)
    if (charIndex === current.length) {
      deleting = true
      setTimeout(type, 1800)
      return
    }
  } else {
    typed.value = current.slice(0, --charIndex)
    if (charIndex === 0) {
      deleting = false
      lineIndex = (lineIndex + 1) % lines.length
    }
  }
  setTimeout(type, deleting ? 40 : 80)
}

onMounted(() => setTimeout(type, 1200))
</script>
