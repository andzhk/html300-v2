import { createWebHistory, createRouter } from "vue-router";
import Home from "./components/Home.vue";
import Images from "./components/Images.vue";
import PopularShows from "./components/PopularShows.vue";
import Faqs from "./components/Faqs.vue";
const routes = [
  {
    name: "Home",
    path: "/",
    component: Home,
  },
  {
    name: "Images",
    path: "/imagePage",
    component: Images,
  },
  {
    name: "PopularShows",
    path: "/popular-shows",
    component: PopularShows,
  },
  {
    name: "Faqs",
    path: "/faqs",
    component: Faqs,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
