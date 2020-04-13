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
  computed: {
    bottomBar() {
      return document.getElementById("bottom-bar");
    }
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
      this.bottomBar.style.top = "";
    },
    beforeLeave() {
      this.navAllowed = false;
    }
  },
  mounted() {
    // BLOCK NAV DURING ANIMATION
    this.$router.beforeEach((to, from, next) => {
      this.bottomBar.style.top = `${
        this.bottomBar.getBoundingClientRect().top
      }px`;
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
html {
  background: $black;
}
body {
  background-image: $texture;
  background-size: $textureScale $textureScale;
  color: $steelBlue;
  overflow-x: hidden;
  margin-bottom: 50px;
  margin-top: 56px;
}
.swipe-enter-active,
.swipe-leave-active {
  position: absolute;
  transition: all $swipeSpeed;
  width: 100%;
  z-index: 0;
}
.left {
  transform: translateX(-98vw);
}
.right {
  transform: translateX(98vw);
}
</style>

<style lang="scss">
@media screen and (min-width: 768px) {
  body {
    margin-bottom: 0;
    margin-top: 86px;
  }
}
</style>
