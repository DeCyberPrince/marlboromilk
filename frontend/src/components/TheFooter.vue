<template>
  <footer>
    <div class="soc_media">
      <a href="https://vk.me/marlboromilk" target="_blank" class="milk-vk"></a>
      <a href="http://t.me/MARLBOROMILK" target="_blank" class="milk-tg"></a>
      <a
        href="https://www.instagram.com/uglylowflex/"
        target="_blank"
        class="milk-insta"
      ></a>
    </div>
    <h4 class="copyright">&copy; 2020 marlboromilk all rights reserved</h4>
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
  .soc_media,
  .copyright {
    padding-top: 0.5rem;
    text-align: center;
    color: $secondary;
    .milk- {
      &vk {
        color: $vk;
      }
      &tg {
        color: $tg;
      }
      &insta {
        background: linear-gradient(45deg, #ffc551, #df2460, #4253cf);
        background-size: 320% 320%;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        &:hover {
          background-size: 100% 100%;
        }
      }
    }
    * {
      display: inline-block;
      opacity: 1;
      transition: $normal;
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
    .soc_media,
    .copyright {
      * {
        opacity: $semitransparent;
        &:hover {
          opacity: 1;
        }
      }
    }
  }
}
</style>
