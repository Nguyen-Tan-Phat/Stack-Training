<template>
  <v-container class="ma-6">
    <h1>Welcome back</h1>
    <text-input v-model="inputText"></text-input>
    <v-btn color="primary" @click="copyToClipboard">Copy</v-btn>
    <v-alert v-if="isCopied" type="success">Text copied!</v-alert>
  </v-container>
</template>

<script>
import TextInput from '~/components/TextInput.vue';

export default{
  components: {
    TextInput,
  },
  data() {
    return {
      inputText: '',
      isCopied: false,
    };
  },
  methods: {
    copyToClipboard() {
      navigator.clipboard.writeText(this.inputText);
      this.isCopied = true;
      setTimeout(() => {
        this.isCopied = false;
      }, 2000);
    },
  },
};
</script>
