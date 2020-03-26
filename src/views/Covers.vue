<template>
  <main class="covers">
    <img
      class="cover"
      v-for="cover in covers"
      :key="cover.id"
      :src="`./assets/img/${cover.path}`"
    />
  </main>
</template>

<script>
export default {
  name: "GFX",
  data() {
    return {
      covers: [
        { id: 1, path: "cover-1.png" },
        { id: 2, path: "cover-2.png" },
        { id: 3, path: "cover-3.png" },
        { id: 4, path: "cover-4.png" },
        { id: 5, path: "cover-3.png" },
        { id: 6, path: "cover-2.png" },
        { id: 7, path: "cover-1.png" },
        { id: 8, path: "cover-2.png" },
        { id: 9, path: "cover-3.png" },
        { id: 10, path: "cover-4.png" },
        { id: 11, path: "cover-3.png" },
        { id: 12, path: "cover-2.png" },
        { id: 13, path: "cover-1.png" },
        { id: 14, path: "cover-2.png" },
        { id: 15, path: "cover-3.png" },
        { id: 16, path: "cover-4.png" },
        { id: 17, path: "cover-3.png" },
        { id: 18, path: "cover-2.png" },
        { id: 19, path: "cover-1.png" },
        { id: 20, path: "cover-2.png" }
      ]
    };
  },
  components: {}
};
</script>

<style lang="scss" scoped>
main.covers {
  display: flex;
  flex-flow: row wrap;
  .cover {
    width: 50%;
    min-height: auto;
    height: auto;
    max-height: auto;
    background-position: center;
  }
}
</style>

<style lang="scss" scoped>
@media screen and (min-width: 768px) {
  main.covers {
    flex-flow: row wrap;
    .cover {
      width: 25%;
      background-position: center;
    }
  }
}
</style>
