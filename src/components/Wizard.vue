<template>
  <div>
    <form @submit.prevent="handleSubmit">

      <div v-if="step === 1">
        <label for="username">Username:</label>
        <input id="username" v-model="username" @input="validateUsername" type="text">
        <div v-if="usernameError">{{ usernameError }}</div>
      </div>

      <div v-else-if="step === 2">
        <label for="email">Email:</label>
        <input id="email" v-model="email" @input="validateEmail" type="text">
        <div v-if="emailError">{{ emailError }}</div>
      </div>

      <div v-else-if="step === 3">
        <p>Review your input:</p>
        <p>Username: {{ username }}</p>
        <p>Email: {{ email }}</p>
      </div>

      <button type="button" @click="previousStep" :disabled="step === 1">Previous</button>
      <button type="submit">{{ step === 3 ? 'Submit' : 'Next' }}</button>

    </form>
  </div>
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
    return
  }
  usernameError.value = '';
};

const validateEmail = () => {
  if (!email.value || !/^\S+@\S+\.\S+$/.test(email.value)) {
    emailError.value = 'Invalid email address.';
    return
  }
  emailError.value = '';
};

const previousStep = () => {
  if (step.value > 1) {
    step.value--;
  }
};

const handleSubmit = () => {
  if (step.value === 1) {
    if (!usernameError.value) {
      step.value++;
    }
    return
  }
  if (step.value === 2) {
    if (!emailError.value) {
      step.value++;
    }
    return;
  }
  alert('Form submitted');
};
</script>
