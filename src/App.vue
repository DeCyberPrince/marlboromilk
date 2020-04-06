<template>
  <div id="app">
    <top-bar />
    <main>
      <transition
        name="swipe"
        :enter-class="toSide"
        :leave-to-class="fromSide"
        @after-enter="afterEnter"
        @before-leave="beforeLeave"
      >
        <keep-alive>
          <router-view />
        </keep-alive>
      </transition>
    </main>
    <bottom-bar />
  </div>
</template>

<script>
import Hammer from "hammerjs";
import topBar from "@/components/top-bar";
import bottomBar from "@/components/bottom-bar";
export default {
  data() {
    return {
      fromSide: null,
      toSide: null,
      navAllowed: true
    };
  },
  components: {
    topBar,
    bottomBar
  },
  watch: {
    $route(to, from) {
      if (to.meta.order > from.meta.order) {
        this.fromSide = "left";
        this.toSide = "right";
      } else {
        this.fromSide = "right";
        this.toSide = "left";
      }
    }
  },
  methods: {
    afterEnter() {
      this.navAllowed = true;
      const bottomBar = document.getElementById("bottom-bar");
      bottomBar.style.top = "";
    },
    beforeLeave() {
      this.navAllowed = false;
    }
  },
  mounted() {
    // BLOCK NAV DURING ANIMATION
    this.$router.beforeEach((to, from, next) => {
      const bottomBar = document.getElementById("bottom-bar");
      bottomBar.style.top = bottomBar.getBoundingClientRect().top + "px";
      next(this.navAllowed);
    });

    // SWIPES HANDLER
    if (window.screen.width >= 768) return undefined;
    const hammertime = new Hammer(this.$el);
    let toRoute = [];
    hammertime.on("swipeleft", () => {
      toRoute = this.$router.options.routes.filter(route => {
        return route.meta.order === this.$route.meta.order + 1;
      });
      if (toRoute.length > 0) this.$router.push(toRoute[0]);
    });
    hammertime.on("swiperight", () => {
      toRoute = this.$router.options.routes.filter(route => {
        return route.meta.order === this.$route.meta.order - 1;
      });
      if (toRoute.length > 0) this.$router.push(toRoute[0]);
    });
  }
};
</script>

<style lang="scss">
@import "./assets/vars.scss";
body {
  background-image: $texture;
  background-size: $textureScale $textureScale;
  color: $steelBlue;
}
.swipe-enter-active,
.swipe-leave-active {
  position: absolute;
  transition: all $swipeSpeed linear;
  width: 100%;
  z-index: 0;
}
.left {
  transform: translateX(-90vw);
}
.right {
  transform: translateX(90vw);
}
</style>
