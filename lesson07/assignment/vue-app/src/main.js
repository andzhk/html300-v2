import { createApp } from "vue";
import App from "./App.vue";
import router from "./routes";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "../src/assets/scss/style.scss";

createApp(App).use(router).mount("#app");
