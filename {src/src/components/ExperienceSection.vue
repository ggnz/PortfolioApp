<template>
  <section id="experience" class="py-28 bg-surface border-y border-border">
    <div class="max-w-6xl mx-auto px-6">
      <div class="observe-fade mb-14">
        <p class="font-mono text-accent text-sm tracking-widest mb-3">
          <span class="text-accent2">02.</span> Experience
        </p>
        <h2 class="font-display font-bold text-text text-4xl">Where I've worked</h2>
      </div>

      <div class="space-y-6">
        <!-- Full-width cards -->
        <div
          v-for="(job, i) in mainJobs"
          :key="'main-' + i"
          class="observe-fade group bg-bg border border-border rounded-xl p-7 hover:border-accent/30 transition-all duration-300 hover:-translate-y-0.5"
        >
          <div class="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-5">
            <div>
              <h3 class="font-display font-bold text-text text-xl">{{ job.role }}</h3>
              <p class="font-mono text-accent text-sm mt-1">{{ job.company }}</p>
            </div>
            <div class="flex flex-col md:items-end gap-1">
              <span class="font-mono text-xs text-subtle bg-surface border border-border px-3 py-1 rounded-full whitespace-nowrap">
                {{ job.period }}
              </span>
              <span class="font-mono text-xs text-muted">{{ job.location }}</span>
            </div>
          </div>
          <ul class="space-y-2">
            <li
              v-for="(h, j) in job.highlights"
              :key="j"
              class="flex gap-3 text-subtle text-sm leading-relaxed"
            >
              <span class="text-accent mt-1 shrink-0">▹</span>
              <span>{{ h }}</span>
            </li>
          </ul>
        </div>

        <!-- Half-width cards -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div
            v-for="(job, i) in compactJobs"
            :key="'compact-' + i"
            class="observe-fade group bg-bg border border-border rounded-xl p-7 hover:border-accent/30 transition-all duration-300 hover:-translate-y-0.5"
          >
            <div class="flex flex-col gap-2 mb-5">
              <div class="flex items-start justify-between gap-2">
                <h3 class="font-display font-bold text-text text-xl">{{ job.role }}</h3>
                <span class="font-mono text-xs text-subtle bg-surface border border-border px-3 py-1 rounded-full whitespace-nowrap shrink-0">
                  {{ job.period }}
                </span>
              </div>
              <div class="flex items-center justify-between">
                <p class="font-mono text-accent text-sm">{{ job.company }}</p>
                <span class="font-mono text-xs text-muted">{{ job.location }}</span>
              </div>
            </div>
            <ul class="space-y-2">
              <li
                v-for="(h, j) in job.highlights"
                :key="j"
                class="flex gap-3 text-subtle text-sm leading-relaxed"
              >
                <span class="text-accent mt-1 shrink-0">▹</span>
                <span>{{ h }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { data } from '../data.js'

const mainJobs = computed(() => data.experience.filter(j => j.size !== 'half'))
const compactJobs = computed(() => data.experience.filter(j => j.size === 'half'))
</script>
