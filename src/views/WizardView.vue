<template>
  <div class="wizard">
    <h1>This is wizard form page</h1>
    <wizard/>
  </div>
</template>

<style scoped>
@media (min-width: 1024px) {
  .wizard {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    align-items: center;
  }
}
</style>

<script setup >
import Wizard from "@/components/Wizard.vue";
</script>
