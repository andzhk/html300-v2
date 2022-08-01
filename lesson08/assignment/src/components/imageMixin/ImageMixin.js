//mixin to toggle border of an image on click

export default {
  data() {
    return {
      // taking data variable to apply border css on the basis of this

      borderVisible: false,
    };
  },
  methods: {
    //method which would run on click of image and add border on that image

    applyBorder(id) {
      this.images.map((item, index) => {
        if (index === id) {
          if (this.images[id].borderVisible)
            this.images[id].borderVisible = false;
          else this.images[id].borderVisible = !this.borderVisible;
        } else this.images[index].borderVisible = false;
      });
    },
  },
};
