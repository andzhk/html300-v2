<template>
<!-- images component -->

<div>
  <!-- a large image just to show make a good UI -->

  <img src="../assets/images/image3.webp" class="img-fluid w-100" alt="big bang theory" />
  <div class="container-fluid pt-5 pb-5">
    <div class="container">
      <!-- iterating through an image array and displaying images on UI -->

      <div class="row">
        <div class="col-sm-6 col-lg-3 col-md-4 mb-4" v-for="(item, index) in images" :key="index">
          <img :src="item.src" :alt="item.alt" class="img-fluid w-100 h-100 border border-dark rounded" data-toggle="tooltip" data-placement="top" :title="item.title" />
        </div>
      </div>
      <p class="pt-4 pb-4">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio
        ratione nihil quas dicta assumenda culpa minima, non praesentium
        repudiandae pariatur quam voluptatibus magni laudantium, libero
        deserunt nostrum eius expedita quos explicabo! Quo, doloremque!
        Dignissimos error molestias dolor facere accusantium ducimus
        laudantium magni qui vitae quod, veniam facilis alias ea delectus
        culpa temporibus consectetur praesentium, assumenda sapiente
        inventore. Quisquam dolore, repellendus autem sint veritatis odio
        incidunt reprehenderit eligendi blanditiis totam fugiat accusantium
        vero natus sapiente libero sit quae? Corporis cupiditate quod
        voluptate impedit ipsum tenetur magni recusandae quasi at itaque?5
        Praesentium eius eaque molestiae libero excepturi quod ex ad illo
        tempore.
      </p>
    </div>
  </div>
</div>
</template>
<script>
import image1 from "../assets/images/image1.jpg";
import image2 from "../assets/images/image2.webp";
import image3 from "../assets/images/image3.webp";
import image4 from "../assets/images/image1.jpg";
import image5 from "../assets/images/image2.webp";
import image6 from "../assets/images/image3.webp";
export default {
  name: "images-page",
  data() {
    return {
      // images array
      images: [{
          src: image1,
          title: "image1",
          alt: "movie1",
        },
        {
          src: image2,
          title: "image2",
          alt: "movie2",
        },
        {
          src: image3,
          title: "image3",
          alt: "movie3",
        },
        {
          src: image4,
          title: "image4",
          alt: "movie4",
        },
        {
          src: image5,
          title: "image5",
          alt: "movie5",
        },
        {
          src: image6,
          title: "image6",
          alt: "movie6",
        },
      ],
    };
  },
};
</script>
