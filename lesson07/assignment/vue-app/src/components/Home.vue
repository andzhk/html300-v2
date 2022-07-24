<template>
<!-- home page/Landing Page -->

<div>
  <div class="container-fluid pt-5 pb-5">
    <div class="container">
      <h1 class="text-center display-1 font-weight-bold main-heading">
        Unlimited movies, TV shows and more.
      </h1>
      <h3 class="text-center font-weight-normal">
        Watch anywhere. Cancel anytime.
      </h3>
      <form class="form-inline text-center justify-content-center my-2 my-lg-0 pt-5 pb-5">
        <input class="form-control email-input mr-sm-2 p-2" type="email" placeholder="Email Address..." aria-label="Search" />
        <button class="submit-btn btn btn-success my-2 my-sm-0 p-2" type="submit">
          Submit
        </button>
      </form>
    </div>
  </div>
  <hr class="mt-5 mb-5" />
  <div class="container-fluid pt-5 pb-5">
    <div class="container">
      <div class="row">
        <div class="col1 col-lg-6 col-md-6 col-sm-12">
          <div class="content1">
            <h2 class="display-4 font-weight-bold">Enjoy on your TV.</h2>
            <p>
              Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
              Blu-ray players and more.
            </p>
          </div>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-12">
          <img class="w-100" src="../assets/images/image2.webp" alt="stranger things" />
        </div>
      </div>
    </div>
  </div>
  <hr class="mt-5 mb-5" />
  <div class="container-fluid pt-5 pb-5">
    <div class="container pb-5">
      <div class="row">
        <div class="col-lg-6 col-md-6 col-sm-12">
          <img class="w-100" src="../assets/images/image1.jpg" alt="stranger things" />
        </div>
        <div class="col1 col-lg-6 col-md-6 col-sm-12">
          <div class="content2">
            <h2 class="display-4 font-weight-bold">
              Download your shows to watch offline.
            </h2>
            <p>
              Save your favourites easily and always have something to watch.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script>
export default {
  name: "home-page",
};
</script>
