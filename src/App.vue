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
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "PT Sans", sans;
}
body {
  background: #2d1c2f;
}
</style>
