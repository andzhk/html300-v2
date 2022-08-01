<template>
  <img
    :src="smallImage"
    :alt="alt"
    class="img-fluid w-100 h-100 border border-dark rounded cursor-pointer"
    :class="borderVisible ? 'image-border' : ''"
    data-toggle="tooltip"
    data-placement="top"
    :title="imagetitle"
  />
</template>
<script>
export default {
  name: "ThumbnailImages",
  props: {
    smallImage: { type: String, default: "" },
    alt: { type: String, default: "" },
    imagetitle: { type: String, default: "" },
    borderVisible: { type: Boolean, default: false },
  },
};
</script>
<style scoped>
.image-border {
  border: 6px solid rgb(182, 209, 28) !important;
}
.cursor-pointer {
  cursor: pointer;
}
</style>
