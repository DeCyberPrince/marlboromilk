<template>
  <div id="app">
    <top-bar />
    <router-view />
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
