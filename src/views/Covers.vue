<template>
  <div id="covers">
    <main>
      <list-slider :items="covers" />
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
      covers: []
    };
  },
  components: {
    mFooter,
    listSlider
  },
  async mounted() {
    let response = await fetch("/assets/data/covers.json");
    this.covers = await response.json();
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/vars.scss";
#covers {
  background: $black;
  color: $yellow;
  overflow: hidden;
}
</style>

<style lang="scss" scoped>
@import "../assets/vars.scss";

@media screen and (min-width: 1440px) {
  #covers {
    main {
      padding: 0 100px;
    }
  }
}
</style>
