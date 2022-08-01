<template>
  <vue-form />
</template>

<script>
import VueForm from "../src/components/Form.vue";

export default {
  name: "App",
  components: {
    VueForm,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
