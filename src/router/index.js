import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Layout from "../views/Layout.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "",
      name: "Layout",
      component: Layout,
      children: [
        {
          path: "",
          redirect: "home",
          pathMatch: "full",
        },
        {
          path: "home",
          name: "home",
          component: Home,
        },
      ],
    },
    // Invalid routes
    {
      path: "/:pathMatch(.*)*",
      redirect: "home",
    },
  ],
});

export default router;
