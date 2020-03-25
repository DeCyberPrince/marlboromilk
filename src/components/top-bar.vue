<template>
  <header>
    <h1>MARLBOROMILK</h1>
    <nav>
      <router-link :to="{ name: 'Covers' }">COVERS</router-link>
      <router-link :to="{ name: 'GFX' }">GFX</router-link>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
$yellow: #fbec55;
$black: #2d1c2f;
header {
  display: flex;
  flex-flow: column wrap;
  background: $yellow;
  height: 84px;
  color: $black;
  h1 {
    font-size: 32px;
    height: 50%;
    width: 100%;
    text-align: center;
    flex-basis: 50%;
  }
  nav {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50%;
    flex-basis: 50%;
    a {
      text-decoration: none;
      font-weight: bold;
      color: rgba($color: $black, $alpha: 0.2);
      transition: 0.5s;
      &.router-link-exact-active {
        color: $black;
      }
    }
  }
}
</style>

<style lang="scss" scoped>
@media screen and (min-width: 768px) {
  header {
    display: flex;
    flex-flow: row wrap;
    height: 64px;
    h1 {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 46px;
      height: 100%;
      width: 100%;
      text-align: center;
      flex-basis: calc(100% / 3);
      margin-left: 1rem;
    }
    nav {
      display: flex;
      align-items: center;
      justify-content: space-around;
      height: 100%;
      flex-basis: calc(100% / 3);
    }
  }
}
</style>
