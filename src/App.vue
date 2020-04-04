<template>
  <div id="app">
    <top-bar />
    <transition name="swipe" :enter-class="toSide" :leave-to-class="fromSide">
      <keep-alive>
        <router-view />
      </keep-alive>
    </transition>
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
      toSide: null
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
  mounted() {
    if (window.screen.width >= 768) return undefined;
    var hammertime = new Hammer(this.$el);
    hammertime.on("swipeleft swiperight", e => {
      if (e.type === "swipeleft") {
        let toRoute = this.$router.options.routes.filter(route => {
          return route.meta.order === this.$route.meta.order + 1;
        });
        if (toRoute.length > 0) {
          this.$router.push(toRoute[0]);
        }
      } else {
        let toRoute = this.$router.options.routes.filter(route => {
          return route.meta.order === this.$route.meta.order - 1;
        });
        if (toRoute.length > 0) {
          this.$router.push(toRoute[0]);
        }
      }
    });
  }
};
</script>

<style lang="scss">
$yellow: #fbec55;
$wblack: #2d1c2f;
$texture: url("/assets/img/texture.png");
$textureScale: 48px;
body {
  background-image: $texture;
  background-size: $textureScale $textureScale;
  color: $wblack;
}
</style>

<style lang="scss">
.swipe-enter-active,
.swipe-leave-active {
  position: absolute;
  width: 100%;
  z-index: 0;
  transition: all 0.5s;
}
.left {
  transform: translateX(-100%);
}
.right {
  transform: translateX(100%);
}
</style>
