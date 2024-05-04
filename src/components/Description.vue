<template>
  <div>
    <input id="description" v-model="text" placeholder="Enter text" />
    <p>{{ message }}</p>
  </div>
</template>

<script setup>
import {computed, ref} from 'vue';

const text = ref('');

const isBalanced = (inputText) => {
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
  console.log('final:', stack);

  return stack.length === 0;
};

const message = computed(() => isBalanced(text.value) ? 'The text is balanced.' : 'The text is not balanced.')

</script>

<style scoped>
/* Add your styles here */
</style>
