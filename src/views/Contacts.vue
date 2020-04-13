<template>
  <div id="contacts">
    <h1>Contacts</h1>
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
    height: 70vh;
  }
}
</style>
