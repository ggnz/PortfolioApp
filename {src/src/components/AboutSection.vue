<template>
  <section id="about" class="py-28 max-w-6xl mx-auto px-6">
    <div class="observe-fade grid md:grid-cols-2 gap-16 items-center">
      <div>
        <p class="font-mono text-accent text-sm tracking-widest mb-3">
          <span class="text-accent2">01.</span> About me
        </p>
        <h2 class="font-display font-bold text-text text-4xl mb-8">Who I am</h2>
        <div class="space-y-4 text-subtle leading-relaxed">
          <p v-for="(line, i) in paragraphs" :key="i">{{ line }}</p>
        </div>
        <div class="mt-8 flex flex-wrap gap-3">
          <a
            :href="`mailto:${data.email}`"
            class="font-mono text-xs text-accent border border-accent px-4 py-2 rounded hover:bg-accent/10 transition-colors"
          >
            {{ data.email }}
          </a>
          <span class="font-mono text-xs text-subtle border border-border px-4 py-2 rounded">
            {{ data.phone }}
          </span>
        </div>
      </div>

      <!-- Stats card -->
      <div class="space-y-4">
        <div
          v-for="stat in stats"
          :key="stat.label"
          class="bg-surface border border-border rounded-lg p-5 flex items-center gap-5 hover:border-accent/30 transition-colors"
        >
          <div class="text-3xl font-display font-extrabold text-accent">{{ stat.value }}</div>
          <div>
            <div class="text-text font-medium text-sm">{{ stat.label }}</div>
            <div class="text-subtle text-xs mt-0.5">{{ stat.sub }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { data } from '../data.js'

const paragraphs = data.about.split('\n').map(l => l.trim()).filter(Boolean)

const stats = [
  { value: '3+', label: 'Years of experience', sub: 'Frontend & full-stack development' },
  { value: '6+', label: 'Projects shipped', sub: 'CRM, LMS, BPMS, e-commerce & more' },
  { value: '8+', label: 'Certifications', sub: 'Scrum, Huawei Cloud, Cisco CCNA' },
  { value: 'B2+', label: 'English proficiency', sub: 'Fluent — Sykes Academy certified' },
]
</script>
