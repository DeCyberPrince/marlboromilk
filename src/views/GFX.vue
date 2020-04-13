<template>
  <div id="gfx">
    <h1>GFX</h1>
    <m-footer />
  </div>
</template>

<script>
import mFooter from "@/components/m-footer";
export default {
  components: {
    mFooter
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/vars.scss";
div {
  background: $black;
  color: $yellow;
  h1 {
    height: 80vh;
  }
}
</style>
