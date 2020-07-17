import router from "../../router/index";

export default {
  navAllowed: true,
  go(path) {
    router.push(path);
  },
  goBySide(side) {
    const goRoute = router.options.routes.find(route => {
      return route.meta?.order === router.currentRoute.meta?.order + side;
    });
    if (goRoute) {
      router.push(goRoute);
    }
  }
};
