import Vue from "vue";
import VueRouter from "vue-router";
import Covers from "../views/Covers.vue";
import GFX from "../views/GFX.vue";
import Merch from "../views/Merch.vue";
import Contacts from "../views/Contacts.vue";

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
  },
  {
    path: "/merch",
    name: "merch",
    component: Merch
  },
  {
    path: "/contacts",
    name: "contacts",
    component: Contacts
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  }
});

export default router;
