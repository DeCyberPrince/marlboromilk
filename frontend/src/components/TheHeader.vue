<template>
  <header>
    <img class="logo" src="@/assets/img/logo.png" alt="MARLBOROMILK" />
    <nav>
      <router-link active-class="active" exact to="/">
        Covers
      </router-link>
      <router-link active-class="active" to="/GFX">
        GFX
      </router-link>
      <router-link active-class="active" to="/merch">
        Merch
      </router-link>
      <router-link active-class="active" to="/contacts">
        Contacts
      </router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: "TheHeader"
};
</script>

<style lang="scss" scoped>
header {
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  display: flex;
  width: 100vw;
  height: map-get($header-height, mobile);
  background: $primary;
  img.logo {
    object-fit: contain;
    width: 100%;
  }
  nav {
    display: none;
  }
}
</style>

<style lang="scss" scoped>
@include media(md) {
  header {
    height: map-get($header-height, desktop);
    img.logo {
      position: absolute;
      top: 0;
      left: 0;
      height: inherit;
      width: 30%;
      object-fit: scale-down;
    }
    nav {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      a {
        display: inline-block;
        position: relative;
        color: $passive;
        transition: $slow;
        margin: 1rem;
        &.active {
          color: $active;
        }
      }
    }
  }
}
</style>

<style lang="scss" scoped>
@include media(lg) {
  header {
    img.logo {
      width: 25%;
    }
    nav {
      a {
        margin: 2rem;
      }
    }
  }
}
</style>

<style lang="scss" scoped>
@include media(xl) {
  header {
    img.logo {
      width: 20%;
    }
  }
}
</style>
