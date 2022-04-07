import { createWebHistory, createRouter } from "vue-router";
import HelloWorld from "../components/Home.vue";
import Functionize from "../components/Functionize.vue";
import DevPortal from "../components/DevPortal.vue";
import SystemOutages from "../components/SystemOutages.vue";
import CDCProject from "../components/CDCProject.vue";

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
  {
    path: "/status",
    name: "SystemOutages",
    component: SystemOutages,
  },
  {
    path: "/cdcproject",
    name: "CDCProject",
    component: CDCProject,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;