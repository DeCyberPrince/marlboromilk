<template>
  <div id="app">
    <top-bar />
    <transition name="fade">
      <keep-alive>
        <router-view />
      </keep-alive>
    </transition>
    <bottom-bar />
  </div>
</template>

<script>
import topBar from "@/components/top-bar";
import bottomBar from "@/components/bottom-bar";
export default {
  components: {
    topBar,
    bottomBar
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
.fade-enter-active,
.fade-leave-active {
  position: absolute;
  width: 100%;
  z-index: 0;
  transition: all 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
</style>
