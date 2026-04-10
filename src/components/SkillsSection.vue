<template>
  <section id="skills" class="py-28 bg-surface border-y border-border">
    <div class="max-w-6xl mx-auto px-6">
      <div class="observe-fade mb-14">
        <p class="font-mono text-accent text-sm tracking-widest mb-3">
          <span class="text-accent2">04.</span> Skills
        </p>
        <h2 class="font-display font-bold text-text text-4xl">What I work with</h2>
      </div>

      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <div
          v-for="(group, i) in data.skills"
          :key="i"
          class="observe-fade bg-bg border border-border rounded-xl p-6 hover:border-accent/30 transition-colors"
        >
          <h3 class="font-mono text-accent text-xs tracking-widest uppercase mb-4">
            {{ group.category }}
          </h3>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="item in group.items"
              :key="item"
              class="font-mono text-xs text-subtle bg-surface border border-border px-3 py-1 rounded-full hover:text-text hover:border-accent/20 transition-colors"
            >
              {{ item }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { data } from '../data.js'
</script>
