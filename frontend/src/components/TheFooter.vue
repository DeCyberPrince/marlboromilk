<template>
  <footer>
    <h2>
      <a href="https://vk.me/marlboromilk" target="_blank" class="milk-vk"></a>
      <a href="http://t.me/MARLBOROMILK" target="_blank" class="milk-tg"></a>
      <a
        href="https://www.instagram.com/uglylowflex/"
        target="_blank"
        class="milk-insta"
      ></a>
    </h2>
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
  margin-bottom: $bottom-nav-height;
  h2,
  h4 {
    padding-top: 0.5rem;
    text-align: center;
    color: $secondary;
    .milk- {
      &vk {
        &::before {
          color: $vk;
          transition: $normal;
        }
        &:hover::before {
          color: darken($vk, 10);
        }
      }
      &tg {
        &::before {
          color: $tg;
          transition: $normal;
        }
        &:hover::before {
          color: darken($tg, 10);
        }
      }
      &insta {
        &::before {
          background: linear-gradient(45deg, #ffc551, #df2460, #4253cf);
          background-size: 500% 500%;
          transition: $normal;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        &:hover::before {
          background-size: 100% 100%;
        }
      }
    }
    * {
      display: inline-block;
      margin: 0 1rem;
      color: inherit;
      font-size: 1.7rem;
    }
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
