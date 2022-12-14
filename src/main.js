import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import "./style.css";
import App from "./App.vue";

import Link from "./views/Link.vue";
import Home from "./views/Home.vue";
import Popup from "./components/Popup.vue";


const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/:mini", name: "Link", component: Link },
    { path: "/", name: "Home", component: Home },
    { path: "/popup", name: "Popup", component: Popup },
  ],
});

createApp(App).use(router).mount("#app");
