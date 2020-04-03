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
    component: Covers,
    meta: { order: 1 }
  },
  {
    path: "/GFX",
    name: "GFX",
    component: GFX,
    meta: { order: 2 }
  },
  {
    path: "/merch",
    name: "merch",
    component: Merch,
    meta: { order: 3 }
  },
  {
    path: "/contacts",
    name: "contacts",
    component: Contacts,
    meta: { order: 4 }
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
