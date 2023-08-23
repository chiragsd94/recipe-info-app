import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import SearchMealsByLetter from "../views/SearchMealsByLetter.vue";
import SearchMealByName from "../views/SearchMealByName.vue";
import About from "../views/About.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", name: "home", component: Home },
    {
      path: "/meal/bymealname",
      name: "SearchMealByName",
      component: SearchMealByName,
    },
    {
      path: "/meals/:letter",
      name: "SearchMealsByLetter",
      component: SearchMealsByLetter,
    },
    {
      path: "/about",
      name: "about",
      component: About,
    },
  ],
});

export default router;
