<template>
  <div id="gfx">
    <main>
      <list-slider :video="true" :items="gfxs" />
    </main>
    <m-footer />
  </div>
</template>

<script>
import mFooter from "@/components/m-footer";
import listSlider from "@/components/list-slider";
export default {
  data() {
    return {
      gfxs: []
    };
  },
  components: {
    mFooter,
    listSlider
  },
  async mounted() {
    const response = await fetch("/assets/data/gfxs.json");
    this.gfxs = await response.json();
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/vars.scss";
div {
  background: $black;
  color: $yellow;
}
</style>

<style lang="scss" scoped>
@import "../assets/vars.scss";

@media screen and (min-width: 1440px) {
  #gfx {
    main {
      padding: 0 100px;
    }
  }
}
</style>
