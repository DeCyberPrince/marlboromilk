<template>
  <header>
    <div id="logo">
      <img src="/assets/img/logo.png" alt="MARLBOROMILK" />
    </div>
    <nav id="top-nav">
      <router-link :to="{ name: 'Covers' }">COVERS</router-link>
      <router-link :to="{ name: 'GFX' }">GFX</router-link>
      <router-link :to="{ name: 'merch' }">MERCH</router-link>
      <router-link :to="{ name: 'contacts' }">CONTACTS</router-link>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
$texture: url("/assets/img/texture.png");
$textureScale: 48px;
header {
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  backface-visibility: hidden;
  top: 0;
  left: 0;
  width: 100%;
  max-width: 100vw;
  background-image: $texture;
  background-size: $textureScale $textureScale;
  z-index: 10;
  #logo {
    img {
      height: 100%;
      max-height: 56px;
    }
  }
  nav {
    display: none;
  }
}
</style>

<style lang="scss" scoped>
@media screen and (min-width: 768px) {
  header {
    height: 86px;
    justify-content: space-between;
    #logo {
      img {
        height: 100%;
        max-height: 86px;
      }
    }
    nav#top-nav {
      display: flex;
      flex: 1;
      justify-content: flex-end;
      a {
        display: inline-block;
        color: rgba($color: #2d1c2f, $alpha: 0.25);
        margin: 0 1rem;
        transition: 0.4s;
        &.router-link-exact-active {
          color: rgba($color: #2d1c2f, $alpha: 1);
        }
      }
    }
  }
}
</style>

<style lang="scss" scoped>
@media screen and (min-width: 1024px) {
  header {
    nav {
      a {
        margin: 0 2rem;
      }
    }
  }
}
</style>
