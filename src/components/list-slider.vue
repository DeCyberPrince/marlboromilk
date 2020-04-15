<template>
  <div id="list-slider">
    <div
      class="list-slider-wrapper"
      :style="`transform: translateX(-${currentPage * 100 - 100}%);`"
    >
      <div class="list-slider-item" v-for="item in items" :key="item.id">
        <img :src="`/assets/img/${item.filename}`" alt="cover-1" />
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
    items: Array
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
    }
  },
  mounted() {
    // SWIPE HANDLER}
    if (window.screen.width <= 768) return undefined;
    const hammertime = new Hammer(this.$el);
    hammertime.on("swipeleft", ev => {
      if (this.currentPage < this.pageAmount) {
        this.currentPage++;
      }
    });
    hammertime.on("swiperight", ev => {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    });
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/vars.scss";
.list-slider-wrapper {
  display: grid;
  grid-auto-flow: column;
  width: 100%;
  grid-template-columns: 50%;
  grid-template-rows: repeat(3, calc(100% / 3 - 3px));
  grid-auto-columns: 50%;
  align-items: center;
  justify-items: center;
  transition: $slow;
  .list-slider-item {
    margin: $coversGridGapMibile;
    img {
      width: 100%;
    }
  }
}

#list-slider {
  position: relative;
  overflow: hidden;
  .pagination {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: 100%;
    transform: translateY(-50%);
    .dots {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      bottom: 1rem;
      left: 50%;
      transform: translateX(-50%);
      .dot {
        height: 1rem;
        width: 1rem;
        border-radius: 50%;
        background: rgba($color: $black, $alpha: $paginatorOpacity);
        transition: $slow;
        box-shadow: inset 0 0 0 0 $yellow;
        margin: 0 0.2rem;
        &.active {
          box-shadow: inset 0 0 0 1rem $yellow;
        }
      }
    }
    button {
      background: rgba(255, 255, 255, 0);
      padding: 0.5rem;
      font-size: 2rem;
      color: $yellow;
      transition: $slow;
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
  .list-slider-wrapper {
    grid-template-columns: calc(100% / 3);
    grid-template-rows: repeat(2, calc(50% - 3px));
    grid-auto-columns: calc(100% / 3);
    .list-slider-item {
      margin: $coversGridGapDesktop;
    }
  }
  #list-slider {
    .pagination {
      transform: translateY(-50.7%);
      .dots {
        bottom: 1.5rem;
      }
    }
  }
}
</style>
