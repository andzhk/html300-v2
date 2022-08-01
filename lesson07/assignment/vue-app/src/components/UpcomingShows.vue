<template>
<div>
  <!-- showing upcoming shows by iterating through an array -->

  <h2 class="text-center font-weight-bold">Upcoming Shows</h2>
  <div class="row pt-5">
    <div class="col-lg-4 col-md-6 col-sm-12" v-for="(item, index) in upcomingShowData" :key="index">
      <div class="img-div-2">
        <img :src="item.src" class="img-fluid w-100 h-100" :alt="item.alt" />
      </div>
      <div class="pt-3 pb-3">
        <h4>{{ item.title }}</h4>
      </div>
    </div>
  </div>
  <div class="row pt-5">
    <div class="col-lg-12 col-md-12 col-sm-12">
      <p class="text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
        expedita commodi libero iste recusandae porro hic? Reiciendis
        temporibus aut repellendus similique porro, quibusdam quam ab quos
        blanditiis! Similique, at nemo sapiente laudantium, rem dolorem
        pariatur obcaecati cumque dignissimos, ut quis! Velit corporis
        dignissimos libero optio, ducimus possimus tenetur ex minima molestias
        neque voluptatum modi nisi. Consequuntur sit recusandae maxime
        numquam?
      </p>
      <div>
        <img src="../assets/images/img7.avif" alt="image7" class="img-fluid w-100 h-100" />
      </div>
      <h4 class="mt-3">Lorem ipsum dolor sit amet.</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis sed
        tempore eum at neque eos, dignissimos animi. At, esse tenetur!
      </p>
    </div>
  </div>
</div>
</template>
<script>
import image3 from "../assets/images/img4.avif";
import image4 from "../assets/images/img5.avif";
import image5 from "../assets/images/img6.avif";
export default {
  name: "upcoming-shows",
  data() {
    return {
      upcomingShowData: [{
          src: image3,
          alt: "image3",
          title: "Lorem ipsum dolor sit.",
        },
        {
          src: image4,
          alt: "image4",
          title: "Lorem ipsum dolor sit.",
        },
        {
          src: image5,
          alt: "image5",
          title: "Lorem ipsum dolor sit.",
        },
      ],
    };
  },
};
</script>
