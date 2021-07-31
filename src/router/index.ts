import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: () => import(/* webpackChunkName: "home" */ "../views/Home.vue")
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/resume",
    name: "Resume",
    component: () =>
      import(/* webpackChunkName: "resume" */ "../views/Resume.vue")
  },
  {
    path: "/portfolio",
    name: "Portfolio",
    component: () =>
      import(/* webpackChunkName: "portfolio" */ "../views/Portfolio.vue")
  }
];

const router = new VueRouter({
  routes,
  scrollBehavior: function(to, from, savedPosition) {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  },
  mode: "history"
});

export default router;
