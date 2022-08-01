import { createApp } from "vue";
import App from "./App.vue";
import router from "./routes";
import "bootstrap";
import "../src/assets/scss/style.scss";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

createApp(App).use(router).mount("#app");
