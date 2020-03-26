<template>
  <main>
    <video
      class="video"
      v-for="video in videos"
      :key="video.id"
      :src="`./assets/video/${video.path}`"
      @mouseenter="play"
      @mouseleave="stop"
      @loadeddata="log"
    ></video>
  </main>
</template>

<script>
export default {
  name: "GFX",
  data() {
    return {
      videos: [
        { id: 1, path: "video-1.mp4" },
        { id: 2, path: "video-2.mp4" },
        { id: 3, path: "video-3.mp4" },
        { id: 4, path: "video-4.mp4" },
        { id: 5, path: "video-5.mp4" },
        { id: 6, path: "video-5.mp4" },
        { id: 7, path: "video-1.mp4" },
        { id: 8, path: "video-4.mp4" },
        { id: 9, path: "video-2.mp4" },
        { id: 10, path: "video-1.mp4" },
        { id: 11, path: "video-5.mp4" },
        { id: 12, path: "video-5.mp4" },
        { id: 13, path: "video-3.mp4" },
        { id: 14, path: "video-1.mp4" },
        { id: 15, path: "video-4.mp4" },
        { id: 16, path: "video-2.mp4" },
        { id: 17, path: "video-5.mp4" },
        { id: 18, path: "video-5.mp4" }
      ]
    };
  },
  methods: {
    play(e) {
      e.currentTarget.currentTime = 0;
      e.currentTarget.play();
    },
    stop(e) {
      e.currentTarget.pause();
      e.currentTarget.currentTime = 1;
    },
    log(e) {
      e.currentTarget.currentTime = 1;
    }
  },
  components: {}
};
</script>

<style lang="scss" scoped>
main {
  display: flex;
  flex-flow: row wrap;
  .video {
    width: 50%;
  }
}
</style>

<style lang="scss" scoped>
@media screen and (min-width: 768px) {
  main {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    .video {
      width: 20%;
      margin-right: 1rem;
      margin-top: 1rem;
      &:nth-child(6n - 1),
      &:nth-child(6n) {
        height: calc(40% + 1rem);
        width: calc(40% + 1rem);
      }
    }
  }
}
</style>
