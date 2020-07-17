import Hammer from "hammerjs";

const swipe = action => {
  return function(elem, callback, options) {
    const swiper = new Hammer(elem, options);
    swiper.on(action, event => {
      callback(event);
    });
    swiper.get("swipe").set({ velocity: 0.45 });
  };
};

export default {
  left: swipe("swipeleft"),
  right: swipe("swiperight")
};
