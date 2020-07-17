import Vue from "vue";
import VueRouter from "vue-router";
import nav from "@/assets/js/nav";

Vue.use(VueRouter);

const routes = [
  {
    path: "*",
    name: "NotFound",
    component: () => import("../views/NotFound.vue")
  },
  {
    path: "/",
    name: "Covers",
    component: () => import("../views/Covers.vue"),
    meta: { order: 1 }
  },
  {
    path: "/GFX",
    name: "GFX",
    component: () => import("../views/GFX.vue"),
    meta: { order: 2 }
  },
  {
    path: "/merch",
    name: "Merch",
    component: () => import("../views/Merch.vue"),
    meta: { order: 3 }
  },
  {
    path: "/contacts",
    name: "Contacts",
    component: () => import("../views/Contacts.vue"),
    meta: { order: 4 }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior: () => ({ x: 0, y: 0 })
});

router.beforeEach((to, from, next) => {
  if (nav.navAllowed) {
    next();
  }
});

export default router;
