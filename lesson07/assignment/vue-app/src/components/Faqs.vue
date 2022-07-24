<template>
<div class="container-fluid pt-5 pb-5">
  <h1 class="text-center font-weight-bold">Frequently Asked Questions</h1>

  <!-- frequently asked questions displayed using for loop iterating through an array faqData -->

  <div class="container">
    <div id="accordion">
      <div class="card" v-for="(item, index) in faqData" :key="index">
        <div class="card-header" :id="item.id">
          <h5 class="mb-0">
            <button class="btn accordion-btn w-100 text-left" data-toggle="collapse" :data-target="'#' + item.target" aria-expanded="true" :aria-controls="item.target">
              {{ item.question }}
            </button>
          </h5>
        </div>

        <div :id="item.target" class="collapse" :aria-labelledby="item.id" data-parent="#accordion">
          <div class="card-body">
            {{ item.answer }}
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Explore more content displayed on UI by iterating thorugh an array named exploreMoreData -->

  <div class="container pt-5">
    <h3 class="mb-3">Explore More >>></h3>
    <div class="row">
      <div class="col-lg-4 col-md-6 col-sm-12" v-for="(item, index) in exploreMoreData" :key="index">
        <div class="img-div-2">
          <img :src="item.src" class="img-fluid w-100 h-100" :alt="item.alt" />
        </div>
        <div class="pt-3 pb-3">
          <h4>{{ item.title }}</h4>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script>
import image1 from "../assets/images/img4.avif";
import image2 from "../assets/images/img5.avif";
import image3 from "../assets/images/img6.avif";
export default {
  name: "faqs-page",
  data() {
    return {
      faqData: [{
          id: "headingOne",
          target: "collapseOne",
          question: "Lorem ipsum dolor?",
          answer: `Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. 3 wolf moon officia aute, non
              cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
              laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
              on it squid single-origin coffee nulla assumenda shoreditch et.
              Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
              nesciunt sapiente ea proident. Ad vegan excepteur butcher vice
              lomo. Leggings occaecat craft beer farm-to-table, raw denim
              aesthetic synth nesciunt you probably haven't heard of them
              accusamus labore sustainable VHS.`,
        },
        {
          id: "headingTwo",
          target: "collapseTwo",
          question: "Lorem ipsum dolor fit sit?",
          answer: `Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. 3 wolf moon officia aute, non
              cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
              laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
              on it squid single-origin coffee nulla assumenda shoreditch et.
              Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
              nesciunt sapiente ea proident. Ad vegan excepteur butcher vice
              lomo. Leggings occaecat craft beer farm-to-table, raw denim
              aesthetic synth nesciunt you probably haven't heard of them
              accusamus labore sustainable VHS.`,
        },
        {
          id: "headingThree",
          target: "collapseThree",
          question: "Lorem ipsum dolor sit?",
          answer: `Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. 3 wolf moon officia aute, non
              cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
              laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
              on it squid single-origin coffee nulla assumenda shoreditch et.
              Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
              nesciunt sapiente ea proident. Ad vegan excepteur butcher vice
              lomo. Leggings occaecat craft beer farm-to-table, raw denim
              aesthetic synth nesciunt you probably haven't heard of them
              accusamus labore sustainable VHS.`,
        },
      ],
      exploreMoreData: [{
          src: image1,
          alt: "image1",
          title: "Lorem ipsum dolor sit."
        },
        {
          src: image2,
          alt: "image2",
          title: "Lorem ipsum dolor sit.",
        },
        {
          src: image3,
          alt: "image3",
          title: "Lorem ipsum dolor sit.",
        },
      ],
    };
  },
};
</script>
