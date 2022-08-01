<template>
  <img :src="largeImage" class="img-fluid w-100" alt="big bang theory" />
</template>
<script>
export default {
  name: "LargeImage",
  props: {
    largeImage: { type: String, default: "" },
  },
};
</script>
<style scoped></style>
