import "./assets/style.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
library.add(fas, faFacebook, faTwitter, faInstagram);
createApp(App).component("fa", FontAwesomeIcon).use(router).mount("#app");
