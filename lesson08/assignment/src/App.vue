<template>
  <div>
    <!-- navigation menu -->

    <nav class="container-fluid navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="/">VueApp</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/imagePage">Images</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/popular-shows"
              >Popular Shows</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/faqs">FAQs</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <router-view></router-view>
    <div class="container-fluid pt-5 pb-5 bg-light">
      <p class="text-center mb-0">A Vue Website by Anna Dzhurko</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="scss"></style>
