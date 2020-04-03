<template>
  <nav id="bottom-bar">
    <router-link :to="{ name: 'Covers' }">A</router-link>
    <router-link :to="{ name: 'GFX' }">B</router-link>
    <router-link :to="{ name: 'merch' }">C</router-link>
    <router-link :to="{ name: 'contacts' }">D</router-link>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
nav#bottom-bar {
  position: fixed;
  backface-visibility: hidden;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  max-width: 100vw;
  height: 50px;
  border: 1px solid #000;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #fbec55;
  z-index: 10;
  a {
    display: inline-block;
    color: rgba($color: #2d1c2f, $alpha: 0.25);
    transition: 0.4s;
    &.router-link-exact-active {
      color: rgba($color: #2d1c2f, $alpha: 1);
    }
  }
}
</style>

<style lang="scss" scoped>
@media screen and (min-width: 768px) {
  nav#bottom-bar {
    display: none;
  }
}
</style>
