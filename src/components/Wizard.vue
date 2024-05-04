<template>
  <form @submit.prevent="handleSubmit">

    <div v-if="step === 1" class="flex flex-col justify-start items-stretch gap-y-2">
      <label for="username" class="text-sky-700">Username:</label>
      <input id="username" name="username" v-model="username" @input="validateUsername" type="text"
             class="form-input rounded-lg">
      <div v-if="usernameError" class="text-red-600">{{ usernameError }}</div>
    </div>

    <div v-else-if="step === 2" class="flex flex-col justify-start items-stretch gap-y-2">
      <label for="email">Email:</label>
      <input id="email" name="email" v-model="email" @input="validateEmail" type="email"
             class="form-input rounded-lg">
      <div v-if="emailError" class="text-red-600">{{ emailError }}</div>
    </div>

    <div v-else-if="step === 3" class="flex flex-col justify-start items-stretch gap-y-2">
      <p class="text-sky-700">Step: review</p>
      <p class="text-sky-400">Username: {{ username }}</p>
      <p class="text-sky-400">Email: {{ email }}</p>
    </div>

    <div class="mt-4 flex flex-row justify-start items-center gap-x-2">
      <button type="button" id="btn-prev" @click="previousStep" :disabled="step === 1"
              class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
        Previous
      </button>
      <button type="submit" id="btn-next" :disabled="nextButtonDisabled()"
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Next
      </button>
    </div>

  </form>
</template>

<script setup>
import {ref} from 'vue';

const step = ref(1);
const username = ref('');
const email = ref('');
const usernameError = ref('');
const emailError = ref('');

const validateUsername = () => {
  if (!username.value || !/^[a-zA-Z0-9_]{5,20}$/.test(username.value)) {
    usernameError.value = 'Invalid Username.';
    return false;
  }
  usernameError.value = '';
  return true;
};

const validateEmail = () => {
  debugger
  if (!email.value || !/^\S+@\S+\.\S+$/.test(email.value)) {
    emailError.value = 'Invalid email address.';
    return false;
  }
  emailError.value = '';
  return true;
};

const previousStep = () => {
  if (step.value > 1) {
    step.value--;
  }
};

const nextButtonDisabled = () => {
  if (step.value === 1) {
    return !validateUsername();
  }
  if (step.value === 2) {
    return !validateEmail();
  }
  return true
}

const handleSubmit = () => {
  if (!nextButtonDisabled()) {
    step.value++;
  }
};
</script>
