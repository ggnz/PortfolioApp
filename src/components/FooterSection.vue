<template>
  <footer class="py-24 bg-surface border-t border-border">
    <div class="max-w-6xl mx-auto px-6 text-center observe-fade">
      <p class="font-mono text-accent text-sm tracking-widest mb-4">What's next?</p>
      <h2 class="font-display font-extrabold text-text mb-6" style="font-size: clamp(2rem, 5vw, 3.5rem)">
        Get in touch<span class="text-accent">.</span>
      </h2>
      <p class="text-subtle max-w-md mx-auto mb-10 leading-relaxed">
        I'm currently open to new opportunities. Whether you have a project, a question,
        or just want to connect — my inbox is always open.
      </p>
      <a
        :href="`mailto:${data.email}`"
        class="inline-block font-mono text-sm text-accent border border-accent px-8 py-4 rounded hover:bg-accent/10 transition-colors glow-accent"
      >
        Say hello →
      </a>

      <div class="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
        <p class="font-mono text-xs text-muted">
          Designed & built by <span class="text-accent">Gerson González</span>
        </p>
        <div class="flex items-center gap-6">
          <a
            :href="data.github"
            target="_blank"
            rel="noopener noreferrer"
            class="font-mono text-xs text-muted hover:text-accent transition-colors"
          >
            GitHub
          </a>
          <a
            v-if="data.linkedin"
            :href="data.linkedin"
            target="_blank"
            rel="noopener noreferrer"
            class="font-mono text-xs text-muted hover:text-accent transition-colors"
          >
            LinkedIn
          </a>
          <a
            :href="`mailto:${data.email}`"
            class="font-mono text-xs text-muted hover:text-accent transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { data } from '../data.js'
</script>
