<template>
  <div class="description">
    <h1>This is an description page</h1>
    <description/>
  </div>
</template>

<style scoped>
@media (min-width: 1024px) {
  .description {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    align-items: center;
  }
}
</style>

<script setup>
import Description from "@/components/Description.vue";
</script>
