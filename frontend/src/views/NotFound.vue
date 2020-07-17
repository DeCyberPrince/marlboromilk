<template>
  <div id="page404">
    <h1>Page Not Found</h1>
  </div>
</template>

<script>
export default {
  name: "NotFound"
};
</script>

<style lang="scss" scoped>
#page404 {
  text-align: center;
  min-height: calc(
    100vh -
      (
        #{map-get($header-height, mobile)} + #{$bottom-nav-height} + #{$footer-height}
      )
  );
  overflow: hidden;
}
</style>

<style lang="scss" scoped>
@include media(md) {
  #page404 {
    min-height: calc(100vh - (#{map-get($header-height, desktop)} + #{$footer-height}));
  }
}
</style>
