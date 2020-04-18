<template>
  <div id="list-slider">
    <div
      class="list-slider-wrapper"
      :style="`transform: translateX(-${currentPage * 100 - 100}%);`"
    >
      <div class="list-slider-item" v-for="item in items" :key="item.id">
        <img
          v-if="img"
          draggable="false"
          :src="`/assets/img/${item.filename}`"
          alt="cover-1"
        />
        <video
          v-if="video"
          :src="`/assets/video/${item.filename}`"
          muted
          @mouseenter="play"
          @mouseleave="stop"
        ></video>
      </div>
    </div>
    <div class="pagination">
      <button class="prev" :disabled="currentPage <= 1" @click="prev">
        &#8864;
      </button>
      <div class="dots">
        <div
          class="dot"
          :class="{ active: page === currentPage }"
          v-for="page in pageAmount"
          :key="page"
          @click="goToPage(page)"
        ></div>
      </div>
      <button class="next" :disabled="currentPage >= pageAmount" @click="next">
        &#8864;
      </button>
    </div>
  </div>
</template>

<script>
import Hammer from "hammerjs";
export default {
  data() {
    return {
      currentPage: 1
    };
  },
  props: {
    items: Array,
    img: Boolean,
    video: Boolean
  },
  computed: {
    pageAmount() {
      return Math.ceil((this.items.length - 1) / 6);
    }
  },
  methods: {
    prev() {
      this.currentPage--;
    },
    next() {
      this.currentPage++;
    },
    goToPage(page) {
      this.currentPage = page;
    },
    play(e) {
      e.currentTarget.play();
    },
    stop(e) {
      e.currentTarget.currentTime = 0;
      e.currentTarget.pause();
    }
  },
  mounted() {
    // SWIPE HANDLER
    const hammertime = new Hammer(this.$el);
    hammertime.on("swipeleft", () => {
      if (this.currentPage < this.pageAmount) {
        this.currentPage++;
      }
    });
    hammertime.on("swiperight", () => {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    });
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/vars.scss";
#list-slider {
  position: relative;
  padding: $coversGridGapMibile;
  overflow: hidden;
  .list-slider-wrapper {
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: 50%;
    grid-auto-columns: 50%;
    grid-template-rows: repeat(3, auto);
    align-items: center;
    justify-items: center;
    width: 100%;
    transition: $slow;
    .list-slider-item {
      height: 100%;
      width: 100%;
      padding: $coversGridGapMibile;
      img,
      video {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
  .pagination {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    .dots {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 1rem;
      pointer-events: auto;
      .dot {
        height: 0.5rem;
        width: 0.5rem;
        border-radius: 50%;
        background: rgba($color: $black, $alpha: $paginatorOpacity);
        transition: $slow;
        box-shadow: inset 0 0 0 0 $yellow;
        margin: 0 0.2rem;
        &.active {
          box-shadow: inset 0 0 0 1rem $yellow;
          height: 1rem;
          width: 1rem;
        }
      }
    }
    button {
      background: rgba(255, 255, 255, 0);
      padding: 0.5rem;
      font-size: 2rem;
      color: $yellow;
      transition: $fast;
      align-self: center;
      pointer-events: auto;
      &:disabled {
        opacity: 0;
      }
    }
  }
}
</style>

<style lang="scss" scoped>
@import "../assets/vars.scss";

@media screen and (min-width: 768px) {
  #list-slider {
    .list-slider-wrapper {
      grid-template-columns: calc(100% / 3);
      grid-auto-columns: calc(100% / 3);
      grid-template-rows: repeat(2, auto);
    }
    .pagination {
      justify-content: center;
      button {
        align-self: flex-end;
      }
    }
  }
}
</style>
