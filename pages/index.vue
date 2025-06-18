<script setup lang="ts">
</script>

<template>
  <NuxtLayout>
    <h1 class="text-3xl font-bold underline">
      {{ $t('hello', { name: 'John' }) }}
    </h1>
    <ClientOnly>
      <h1>Color mode: {{ $colorMode.value }}</h1>
      <select v-model="$colorMode.preference">
        <option value="system">System</option>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="sepia">Sepia</option>
      </select>
    </ClientOnly>
  </NuxtLayout>
</template>

<style scoped>

</style>
