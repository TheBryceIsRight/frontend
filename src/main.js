import 'vuetify/styles'; // Global CSS has to be imported
import { createApp } from 'vue';
import { createVuetify } from 'vuetify';
import { createStore } from 'vuex'
import App from './App.vue';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import router from './router/index';
// import VueAnalytics from 'vue-analytics';
import mixpanel from 'mixpanel-browser';
import titleMixin from './mixins/titleMixin';


const app = createApp(App).use(router);

const vuetify = createVuetify(
  components,
  directives,
  {
    icons: {
      iconfont: 'mdiSVG',
    },
  }); // Replaces new Vuetify(...)

// Create a new store instance.
const store = createStore({
  state () {
    return {
      count: 0,
      projects: [],
      functionize_article: [],
      devportal_article: [],
      cdc_article: [],
      outages_article: [],
    }
  },
  mutations: {
    increment (state) {
      state.count++
    },
    setProjects (state, projects) {
      state.projects = projects
    },
    setFZEProjects (state, functionize_article) {
      state.functionize_article = functionize_article
    },
    setDEVProjects (state, devportal_article ) {
      state.devportal_article = devportal_article
    },
    setCDCProjects (state, cdc_article) {
      state.cdc_article = cdc_article
    },
    setOUTProjects (state, outages_article) {
      state.outages_article = outages_article
    },
  },
  getters: {
    getProjects (state) {
      return state.projects
    },
    getFZEProjects (state) {
      return state.functionize_article
    },
    getDEVProjects (state) {
      return state.devportal_article
    },
    getCDCProjects (state) {
      return state.cdc_article
    },
    getOUTProjects (state) {
      return state.outages_article
    },
    
}
})
// app.use(VueAnalytics, {
//   id: 'UA-159586413-1',
//   router
// });
app.use(store);
app.use(vuetify);
app.use(mixpanel);
app.mixin(titleMixin);



app.mount('#app');
