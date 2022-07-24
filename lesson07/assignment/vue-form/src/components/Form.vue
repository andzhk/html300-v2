<template>
  <div>
    <div class="container pt-5 pb-5">
      <h1>Simple Form in Vue</h1>
      <form class="p-4 mt-5">
        <div class="mb-3">
          <label class="form-label">Email address</label>
          <input type="email" class="form-control" />
        </div>
        <div class="mb-3">
          <label class="form-label">Password</label>
          <input type="password" class="form-control" />
        </div>
        <button class="btn btn-primary" @click="enableSubmitBtn">
          Click Me
        </button>

        <span
          class="mx-2"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          :data-bs-original-title="
            enable ? '' : 'Please Click left button to make me clickable'
          "
        >
          <button type="submit" class="btn btn-primary" :disabled="!enable">
            Submit
          </button></span
        >
      </form>
    </div>
  </div>
</template>

<script>
import "bootstrap/dist/js/bootstrap.min.js";
import { Tooltip } from "bootstrap/dist/js/bootstrap.esm.min.js";

new Tooltip(document.body, {
  selector: "[data-bs-toggle='tooltip']",
});
export default {
  name: "VueForm",
  data() {
    return {
      enable: false,
    };
  },
  methods: {
    enableSubmitBtn(e) {
      console.log(e);
      e.preventDefault();
      this.enable = true;
    },
  },
  mounted() {
    //inti tooltip
    Array.from(
      document.querySelectorAll('button[data-bs-toggle="tooltip"]')
    ).forEach((tooltipNode) => new Tooltip(tooltipNode));
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
form {
  box-shadow: 0px 0px 20px rgba(180, 180, 180, 0.7);
}
</style>
