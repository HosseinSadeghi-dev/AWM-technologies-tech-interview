<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <h1 class="text-2xl text-green-700 mb-2">{{ msg }}</h1>
</template>

<style scoped>
</style>
