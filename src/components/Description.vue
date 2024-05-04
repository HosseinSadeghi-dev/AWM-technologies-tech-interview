<template>
  <div class="flex flex-col justify-center items-center">
    <input id="description" v-model="text"
           placeholder="Enter text" type="text"
           class="form-input rounded-lg"/>
    <p class="mt-4 text-sky-700">{{ isBalanced() }}</p>
  </div>
</template>

<script setup>
import {computed, ref} from 'vue';

const text = ref('');

const checkBalanced = (inputText) => {
  const brackets = {
    '(': ')',
    '[': ']',
    '{': '}'
  };
  const stack = [];

  for (let char of inputText) {
    if (brackets[char]) {
      stack.push(brackets[char]);
    } else if (Object.values(brackets).includes(char)) {
      if (!stack.length || stack.pop() !== char) {
        return false;
      }
    }
  }

  return stack.length === 0;
};

const isBalanced = () => checkBalanced(text.value) ? 'The text is balanced.' : 'The text is not balanced.'

// const isBalanced = computed(() => checkBalanced(text.value) ? 'The text is balanced.' : 'The text is not balanced.')

</script>

<style scoped>
/* Add your styles here */
</style>
