<template>
  <div id="app">
    <TheHeader />
    <TheMain />
    <TheBottomNav />
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader";
import TheMain from "@/components/TheMain";
import TheBottomNav from "@/components/TheBottomNav";
export default {
  data: () => ({}),
  components: {
    TheHeader,
    TheMain,
    TheBottomNav
  }
};
</script>

<style lang="scss">
@import "@/assets/styles/_reset.scss";
</style>
