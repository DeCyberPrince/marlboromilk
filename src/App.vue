<template>
  <div id="app">
    <top-bar />
    <router-view />
  </div>
</template>

<script>
import topBar from "@/components/top-bar";
export default {
  components: {
    topBar
  }
};
</script>

<style lang="scss">
$yellow: #fbec55;
$wblack: #2d1c2f;
</style>
