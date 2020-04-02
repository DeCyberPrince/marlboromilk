import Vue from "vue";
import VueRouter from "vue-router";
import Covers from "../views/Covers.vue";
import GFX from "../views/GFX.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Covers",
    component: Covers
  },
  {
    path: "/GFX",
    name: "GFX",
    component: GFX
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
