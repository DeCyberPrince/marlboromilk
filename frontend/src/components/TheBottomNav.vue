<template>
  <nav>
    <router-link active-class="active" exact to="/" class="milk-placeholder">
    </router-link>
    <router-link active-class="active" to="/GFX" class="milk-placeholder">
    </router-link>
    <router-link active-class="active" to="/merch" class="milk-placeholder">
    </router-link>
    <router-link active-class="active" to="/contacts" class="milk-placeholder">
    </router-link>
  </nav>
</template>

<script>
export default {
  name: "TheBottomNav"
};
</script>

<style lang="scss" scoped>
nav {
  position: fixed;
  bottom: 0;
  left: 0;
  height: $bottom-nav-height;
  width: 100vw;
  background: $primary;
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
    padding: 0 $bottom-nav-space 0 $bottom-nav-space;
    transition: $normal;
    font-size: 1.5rem;
    color: $passive;
    &.active {
      color: $active;
    }
  }
}
</style>
<style lang="scss" scoped>
@include media(md) {
  nav {
    display: none;
  }
}
</style>
