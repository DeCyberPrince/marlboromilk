<template>
  <footer>
    <div class="soc-links">
      <span>&#8864;</span>
      <span>&#8864;</span>
      <span>&#8864;</span>
    </div>
    <div class="watermark">
      <span>&#169; 2020 marlboromilk all rights reserved</span>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/assets/vars.scss";
footer {
  background-image: $texture;
  background-size: $textureScale $textureScale;
  color: $steelBlue;
  width: 100%;
  .soc-links,
  .watermark {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.2rem 0;
  }
}
</style>
