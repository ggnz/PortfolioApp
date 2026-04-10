<template>
  <section id="certifications" class="py-28 max-w-6xl mx-auto px-6">
    <div class="observe-fade mb-14">
      <p class="font-mono text-accent text-sm tracking-widest mb-3">
        <span class="text-accent2">05.</span> Certifications
      </p>
      <h2 class="font-display font-bold text-text text-4xl">Credentials</h2>
    </div>

    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <div
        v-for="(cert, i) in data.certifications"
        :key="i"
        class="observe-fade bg-surface border border-border rounded-xl p-5 hover:border-accent/30 transition-colors group"
      >
        <div class="w-8 h-8 rounded-lg bg-accent2/10 flex items-center justify-center mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-accent2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
          </svg>
        </div>
        <h3 class="text-text text-sm font-medium leading-snug mb-2 group-hover:text-accent transition-colors">
          {{ cert.name }}
        </h3>
        <p class="font-mono text-xs text-muted">{{ cert.issuer }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { data } from '../data.js'
</script>
