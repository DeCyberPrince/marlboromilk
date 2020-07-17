<template>
  <div>
    <main>
      <transition
        :name="swipeSide"
        @after-enter="unblockNav"
        @before-leave="blockNav"
        mode="out-in"
      >
        <keep-alive>
          <routerView />
        </keep-alive>
      </transition>
    </main>
    <TheFooter />
  </div>
</template>

<script>
import TheFooter from "@/components/TheFooter";
import swiper from "@/assets/js/swiper";
import nav from "@/assets/js/nav";

export default {
  name: "TheMain",
  components: {
    TheFooter
  },
  data: () => ({
    swipeSide: null
  }),
  methods: {
    blockNav() {
      nav.navAllowed = false;
    },
    unblockNav() {
      nav.navAllowed = true;
    }
  },
  watch: {
    $route(to, from) {
      this.swipeSide =
        to.meta?.order - from.meta?.order < 0 ? "swipe-right" : "swipe-left";
    }
  },
  mounted() {
    const main = this.$el;
    swiper.left(main, () => {
      nav.goBySide(+1);
    });
    swiper.right(main, () => {
      nav.goBySide(-1);
    });
  }
};
</script>

<style lang="scss" scoped>
main {
  text-align: center;
  margin-top: map-get($header-height, mobile);
  overflow: hidden;
}
</style>

<style lang="scss" scoped>
@include media(md) {
  main {
    margin-top: map-get($header-height, desktop);
  }
}
</style>

<style lang="scss" scoped>
.swipe-left-enter-active,
.swipe-left-leave-active,
.swipe-right-enter-active,
.swipe-right-leave-active {
  animation-duration: $normal;
  animation-timing-function: ease-in-out;
}

.swipe-left-leave-active {
  animation-name: to-left;
  animation-direction: normal;
}
.swipe-left-enter-active {
  animation-name: to-right;
  animation-direction: reverse;
}

.swipe-right-leave-active {
  animation-name: to-right;
  animation-direction: normal;
}
.swipe-right-enter-active {
  animation-name: to-left;
  animation-direction: reverse;
}

@keyframes to-right {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(100%);
  }
}

@keyframes to-left {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}
</style>
