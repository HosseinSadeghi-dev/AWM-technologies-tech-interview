<script setup>
import {RouterLink, RouterView} from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header class="flex flex-row justify-center items-center w-full mt-4">
    <img alt="Vue logo" class="me-2" src="@/assets/icons/logo.svg" width="125" height="125"/>

    <div class="flex flex-col justify-start items-start">
      <HelloWorld msg="You did it!"/>

      <nav>
        <RouterLink to="/">Wizard</RouterLink>
        <RouterLink to="/description">Description</RouterLink>
      </nav>
    </div>
  </header>

  <div class="flex flex-col justify-start items-stretch container mx-auto px-4 mt-8 columns-6">
    <RouterView/>
  </div>

</template>

<style>
@import '@/assets/css/main.css';
</style>
