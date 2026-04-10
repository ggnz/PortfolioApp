<template>
  <section id="projects" class="py-28 max-w-6xl mx-auto px-6">
    <div class="observe-fade mb-14">
      <p class="font-mono text-accent text-sm tracking-widest mb-3">
        <span class="text-accent2">03.</span> Projects
      </p>
      <h2 class="font-display font-bold text-text text-4xl">Things I've built</h2>
    </div>

    <div class="grid md:grid-cols-2 gap-5">
      <a
        v-for="(project, i) in data.projects"
        :key="i"
        :href="project.url || '#projects'"
        :target="project.url ? '_blank' : '_self'"
        :rel="project.url ? 'noopener noreferrer' : ''"
        class="observe-fade group bg-surface border border-border rounded-xl overflow-hidden flex flex-col hover:border-accent/30 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
      >
        <!-- Image slider -->
        <div
          class="relative w-full aspect-video overflow-hidden bg-bg border-b border-border"
          @mouseenter="pauseAuto(i)"
          @mouseleave="resumeAuto(i)"
        >
          <template v-if="getImages(project).length > 0">
            <!-- Slides -->
            <img
              v-for="(src, si) in getImages(project)"
              :key="si"
              :src="src"
              :alt="project.name + ' screenshot ' + (si + 1)"
              class="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
              :class="si === activeSlide[i] ? 'opacity-100' : 'opacity-0'"
            />

            <!-- Nav dots -->
            <div
              v-if="getImages(project).length > 1"
              class="absolute bg-black/50  py-1 bottom-0 left-0 right-0 flex justify-center gap-2 z-10"
              @click.prevent
            >
              <button
                v-for="(_, di) in getImages(project)"
                :key="di"
                @click.prevent.stop="goTo(i, di)"
                class="w-5 h-2 rounded-full transition-all duration-300"
                :class="di === activeSlide[i]
                  ? 'bg-accent w-4'
                  : 'bg-white/40 hover:bg-white/70'"
              />
            </div>
          </template>

          <!-- Placeholder -->
          <div
            v-else
            class="w-full h-full flex flex-col items-center justify-center gap-3 grid-bg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-muted/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
            </svg>
            <span class="font-mono text-xs text-muted/40 tracking-widest uppercase">Preview coming</span>
          </div>
        </div>

        <!-- Card content -->
        <div class="p-7 flex flex-col flex-grow">
          <div class="flex items-start justify-between mb-4">          
              <span class="font-mono text-xs text-accent2 bg-accent2/10 border border-accent2/20 px-2 py-0.5 rounded-full">
                {{ project.type }}
              </span>
              <svg v-if="project.url" xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-muted group-hover:text-accent transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
              </svg>
          </div>
          <h3 class="font-display font-bold text-text text-lg mb-2 group-hover:text-accent transition-colors">
            {{ project.name }}
          </h3>
          <p class="text-subtle text-sm leading-relaxed flex-grow mb-5">
            {{ project.description }}
          </p>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="tag in project.tags"
              :key="tag"
              class="font-mono text-xs text-accent/70 bg-accent/5 border border-accent/10 px-2 py-0.5 rounded"
            >
              {{ tag }}
            </span>
          </div>
        </div>
      </a>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { data } from '../data.js'

const imageModules = import.meta.glob('../images/*.{png,jpeg,jpg}', { eager: true })

function getImages(project) {
  if (!project.images || project.images.length === 0) return []
  return project.images
    .map(name => imageModules[`../images/${name}`]?.default)
    .filter(Boolean)
}

// Per-card active slide index
const activeSlide = ref(data.projects.map(() => 0))

function goTo(cardIndex, slideIndex) {
  activeSlide.value[cardIndex] = slideIndex
}

// Auto-advance every 3s, pause on hover
const timers = []

function startAuto(i) {
  const images = getImages(data.projects[i])
  if (images.length <= 1) return
  timers[i] = setInterval(() => {
    activeSlide.value[i] = (activeSlide.value[i] + 1) % images.length
  }, 3000)
}

function pauseAuto(i) {
  clearInterval(timers[i])
}

function resumeAuto(i) {
  startAuto(i)
}

onMounted(() => {
  data.projects.forEach((_, i) => startAuto(i))
})

onUnmounted(() => {
  timers.forEach(t => clearInterval(t))
})
</script>
