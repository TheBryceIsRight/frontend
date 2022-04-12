import 'vuetify/styles'; // Global CSS has to be imported
import { createApp } from 'vue';
import { createVuetify } from 'vuetify';
import { createStore } from 'vuex'
import App from './App.vue';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { aliases, mdi } from 'vuetify/lib/iconsets/mdi-svg';
import router from './router/index';
import mixpanel from 'mixpanel-browser';
import titleMixin from './mixins/titleMixin';


const app = createApp(App).use(router);

const vuetify = createVuetify(
  components,
  directives,
  {
    icons: {
      defaultSet: 'mdi',
      aliases,
      sets: {
        mdi,
      },
    },
  }
); // Replaces new Vuetify(...)

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
    setProjects (projects) {
      this.projects = projects
    },
    setFZEProjects (functionize_article) {
      this.functionize_article = functionize_article
    },
    setDEVProjects (devportal_article) {
      this.devportal_article = devportal_article
    },
    setCDCProjects (cdc_article) {
      this.cdc_article = cdc_article
    },
    setOUTProjects (outages_article) {
      this.outages_article = outages_article
    },
  },
  getters: {
    getProjects (projects) {
      return projects
    },
    getFZEProjects (functionize_article) {
      return functionize_article
    },
    getDEVProjects (devportal_article) {
      return devportal_article
    },
    getCDCProjects (cdc_article) {
      return cdc_article
    },
    getOUTProjects (outages_article) {
      return outages_article
    },
    
}
})

app.use(store);
app.use(vuetify);
app.use(mixpanel);
app.mixin(titleMixin);

app.mount('#app');
