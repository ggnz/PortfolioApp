<template>
  <nav
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="scrolled ? 'bg-bg/90 backdrop-blur border-b border-border' : ''"
  >
    <div class="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
      <a href="#hero" class="font-mono text-accent text-sm tracking-widest hover:opacity-70 transition-opacity">
        gg<span class="text-accent2">.</span>dev
      </a>
      <ul class="hidden md:flex items-center gap-8">
        <li v-for="link in links" :key="link.id">
          <a
            :href="`#${link.id}`"
            class="font-mono text-xs text-subtle hover:text-accent transition-colors tracking-wider uppercase"
          >
            <span class="text-accent2 mr-1">0{{ link.index }}.</span>{{ link.label }}
          </a>
        </li>
      </ul>
      <a
        href="mailto:ggzmiranda@gmail.com"
        class="hidden md:block font-mono text-xs text-accent border border-accent px-4 py-2 rounded hover:bg-accent/10 transition-colors"
      >
        Contact
      </a>
      <!-- Mobile menu button -->
      <button @click="menuOpen = !menuOpen" class="md:hidden text-subtle hover:text-accent transition-colors">
        <svg v-if="!menuOpen" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </button>
    </div>
    <!-- Mobile menu -->
    <div v-if="menuOpen" class="md:hidden bg-surface border-b border-border px-6 py-4">
      <ul class="flex flex-col gap-4">
        <li v-for="link in links" :key="link.id">
          <a
            :href="`#${link.id}`"
            @click="menuOpen = false"
            class="font-mono text-xs text-subtle hover:text-accent transition-colors tracking-wider uppercase"
          >
            <span class="text-accent2 mr-1">0{{ link.index }}.</span>{{ link.label }}
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const scrolled = ref(false)
const menuOpen = ref(false)

const links = [
  { id: 'about', label: 'About', index: 1 },
  { id: 'experience', label: 'Experience', index: 2 },
  { id: 'projects', label: 'Projects', index: 3 },
  { id: 'skills', label: 'Skills', index: 4 },
  { id: 'certifications', label: 'Certs', index: 5 },
]

const onScroll = () => { scrolled.value = window.scrollY > 40 }
onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>
