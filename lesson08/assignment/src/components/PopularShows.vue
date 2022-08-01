<template>
  <div class="container-fluid pt-5 pb-5">
    <div class="container">
      <div class="btns-div d-flex m-auto justify-content-center">
        <!-- button on click of it, we can show "popular shows" -->

        <button
          @click="showPopularShows"
          type="button"
          class="btn btn-primary m-3"
        >
          Popular Shows
        </button>

        <!-- button on click of it, we can show "upcoming shows" -->
        <button
          @click="showUpcomingShows"
          type="button"
          class="btn btn-primary m-3"
        >
          Upcoming Shows
        </button>
      </div>
    </div>
    <div class="container pt-5">
      <!-- rendering upcoming and popuplar shows on the basis of conditions using v-if v-else-->

      <upcoming-shows v-if="upcomingShows" />
      <popular-show-component v-else />
    </div>
  </div>
</template>
<script>
import PopularShowComponent from "../components/PopularShowsComponent.vue";
import UpcomingShows from "../components/UpcomingShows.vue";
export default {
  name: "popular-shows",
  components: { PopularShowComponent, UpcomingShows },
  data() {
    return {
      upcomingShows: false,
    };
  },
  methods: {
    showPopularShows() {
      this.upcomingShows = false;
    },
    showUpcomingShows() {
      this.upcomingShows = true;
    },
  },
};
</script>
