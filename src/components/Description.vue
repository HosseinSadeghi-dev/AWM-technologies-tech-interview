<template>
  <div class="flex flex-col justify-center items-center">
    <input id="description" v-model="text"
           placeholder="Enter text" type="text"
           class="form-input rounded-lg"/>
    <p class="mt-4 text-sky-700">{{ statusText }}</p>
  </div>
</template>

<script>

import {defineComponent} from "vue";

export default defineComponent({
  name: "description",
  data() {
    return {
      text: '',
      statusText: '',
      debounceTimer: null
    }
  },
  watch: {
    text() {
      clearTimeout(this.debounceTimer);
      this.debounceTimer = setTimeout(() => {
        this.isBalanced();
      }, 200);
    }
  },
  methods: {
    checkBalanced(inputText) {
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
    },
    isBalanced() {
      this.statusText = this.checkBalanced(this.text) ? 'The text is balanced.' : 'The text is not balanced.'
    }
  }
});
</script>

<style scoped>
/* Add your styles here */
</style>
