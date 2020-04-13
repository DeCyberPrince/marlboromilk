<template>
  <nav id="bottom-bar">
    <router-link :to="{ name: 'covers' }">&#8864;</router-link>
    <router-link :to="{ name: 'gfx' }">&#8864;</router-link>
    <router-link :to="{ name: 'merch' }">&#8864;</router-link>
    <router-link :to="{ name: 'contacts' }">&#8864;</router-link>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../assets/vars.scss";
nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  max-width: 100vw;
  height: 50px;
  background-image: $texture;
  background-size: $textureScale $textureScale;
  z-index: 10;
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    height: 100%;
    max-height: 100vw;
    color: rgba($color: $steelBlue, $alpha: $navButtonsInactiveOpacity);
    transition: $bottomBarIconsFadeSpeed;
    &.router-link-exact-active {
      color: rgba($color: $steelBlue, $alpha: 1);
    }
  }
}
</style>

<style lang="scss" scoped>
@media screen and (min-width: 768px) {
  nav {
    display: none;
  }
}
</style>
