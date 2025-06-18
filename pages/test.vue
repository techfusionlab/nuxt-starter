<script setup lang="ts">
const { locales, setLocale } = useI18n()
</script>

<template>
  <div class="">
    <button v-for="locale in locales" :key="locale.code" @click="setLocale(locale.code)">
      {{ locale.name }}
    </button>
    <h1 class="text-3xl font-bold underline">
      {{ $t('hello') }}
    </h1>

    <NuxtLink :to="$localePath('index')">
      去Home
    </NuxtLink>
  </div>
</template>

<style scoped>

</style>
