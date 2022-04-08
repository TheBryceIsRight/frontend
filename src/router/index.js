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
    meta: {
      title: 'Home Page',
      metaTags: [
        {
          name: 'description',
          content: 'The home page of my portfolio.'
        },
        {
          property: 'og:description',
          content: 'The home page of my portfolio.'
        }
      ]
    }
  },
  {
    path: "/fze",
    name: "Functionize",
    component: Functionize,
    meta: {
      title: 'Functionize',
      metaTags: [
        {
          name: 'description',
          content: 'The functionize page of my portfolio.'
        },
        {
          property: 'og:description',
          content: 'The functionize page of my portfolio.'
        }
      ]
    },
  },
  {
    path: "/elavon",
    name: "DevPortal",
    component: DevPortal,
    meta: {
      title: 'Dev Portal',
      metaTags: [
        {
          name: 'description',
          content: 'The Developer Portal page of my portfolio.'
        },
        {
          property: 'og:description',
          content: 'The Developer Portal of my portfolio.'
        }
      ]
    },
  },
  {
    path: "/status",
    name: "SystemOutages",
    component: SystemOutages,
    meta: {
      title: 'System Outages',
      metaTags: [
        {
          name: 'description',
          content: 'The system outages page of my portfolio.'
        },
        {
          property: 'og:description',
          content: 'The system outages page of my portfolio.'
        }
      ]
    },
    
  },
  {
    path: "/cdcproject",
    name: "CDCProject",
    component: CDCProject,
    meta: {
      title: 'CDC Project',
      metaTags: [
        {
          name: 'description',
          content: 'The air toxcity page of my portfolio.'
        },
        {
          property: 'og:description',
          content: 'The air toxcity page of my portfolio.'
        }
      ]
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;