<template>
  <footer>
    <h4>&copy; 2020 marlboromilk all rights reserved</h4>
  </footer>
</template>

<script>
export default {
  name: "TheFooter"
};
</script>

<style lang="scss" scoped>
footer {
  background: $primary;
  padding: 1rem;
  height: $footer-height;
  margin-bottom: $bottom-nav-height;
  h4 {
    text-align: center;
    color: $secondary;
  }
}
</style>

<style lang="scss" scoped>
@include media(md) {
  footer {
    margin-bottom: auto;
  }
}
</style>
