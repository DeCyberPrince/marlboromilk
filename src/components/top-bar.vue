<template>
  <header>
    <div id="logo">
      <img src="/assets/img/logo.png" alt="MARLBOROMILK" />
    </div>
    <nav id="top-nav">
      <router-link :to="{ name: 'covers' }">Covers</router-link>
      <router-link :to="{ name: 'gfx' }">GFX</router-link>
      <router-link :to="{ name: 'merch' }">Merch</router-link>
      <router-link :to="{ name: 'contacts' }">Contacts</router-link>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../assets/vars.scss";
header {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 56px;
  width: 100%;
  max-width: 100vw;
  background-image: $texture;
  background-size: $textureScale $textureScale;
  z-index: 10;
  #logo {
    height: 100%;
    img {
      height: 100%;
    }
  }
  nav {
    display: none;
  }
}
</style>

<style lang="scss" scoped>
@import "../assets/vars.scss";
@media screen and (min-width: 768px) {
  header {
    height: 86px;
    justify-content: flex-start;
    nav {
      display: flex;
      margin: 0 40% 0 calc(40% - 353px);
      a {
        display: inline-block;
        color: rgba($color: $steelBlue, $alpha: $navButtonsInactiveOpacity);
        margin: 0 1rem;
        transition: 0.4s;
        &.router-link-exact-active {
          color: rgba($color: $steelBlue, $alpha: 1);
        }
      }
    }
  }
}
</style>
