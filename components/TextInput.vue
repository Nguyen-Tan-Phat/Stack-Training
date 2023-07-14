<template>
    <v-text-field
      v-bind="$attrs"
      v-on="$listeners"
      v-model="inputValue"
    ></v-text-field>
  </template>
  
  <script>
  import { VTextField } from 'vuetify/lib';
  
  export default {
    extends: VTextField,
    inheritAttrs: false,
    data() {
      return {
        inputValue: this.value,
      };
    },
    watch: {
      inputValue(newValue) {
        this.$emit('input', newValue);
      },
      value(newValue) {
        this.inputValue = newValue;
      },
    },
  };
  </script>
  