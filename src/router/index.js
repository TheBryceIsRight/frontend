import { createWebHistory, createRouter } from "vue-router";
import HelloWorld from "../components/HelloWorld.vue";
import Functionize from "../components/Functionize.vue";
import DevPortal from "../components/DevPortal.vue";


const routes = [
  {
    path: "/",
    name: "Home",
    component: HelloWorld,
  },
  {
    path: "/fze",
    name: "Functionize",
    component: Functionize,
  },
  {
    path: "/elavon",
    name: "DevPortal",
    component: DevPortal,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;