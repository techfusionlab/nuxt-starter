<script setup lang="ts">
const { locales, setLocale } = useI18n()
</script>

<template>
  <header class="sticky top-0 z-50 bg-white/[.90] dark:bg-black/[.65] backdrop-blur-lg border-b border-divider">
    <div class="mx-auto px-4 py-3 container max-w-none flex justify-between items-center">
      <span>LOGO</span>
      <div class="flex items-center gap-4">
        <button v-for="locale in locales" :key="locale.code" @click="setLocale(locale.code)">
          {{ locale.name }}
        </button>
      </div>
    </div>
  </header>
</template>
