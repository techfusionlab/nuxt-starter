<script setup lang="ts">
const value = ref('')
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <h1 class="text-3xl font-bold underline">
      Hello world!
    </h1>
    <Button label="Hello World" />
    <AutoComplete v-model="value" />
  </div>
</template>
