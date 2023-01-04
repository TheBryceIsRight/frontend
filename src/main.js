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
      allvoices_article: [],
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
    setOUTProjects (state, outages_article) {
      state.outages_article = outages_article
    },
    setAVProjects (state, allvoices_article) {
      state.allvoices_article = allvoices_article
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
    getOUTProjects (state) {
      return state.outages_article
    },
    getAVProjects (state) {
      return state.allvoices_article
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
app.config.globalProperties.window = window

// if (process.env.NODE_ENV === 'production') {
//   // Handle SPA
//   app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
// }

// This function creates anonymous visitor IDs in Pendo unless you change the visitor id field to use your app's values
// This function uses the placeholder 'ACCOUNT-UNIQUE-ID' value for account ID unless you change the account id field to use your app's values
// Call this function in your authentication promise handler or callback when your visitor and account id values are available
// Please use Strings, Numbers, or Bools for value types.
// pendo.initialize({
//   visitor: {
//       id:              'VISITOR-UNIQUE-ID'   // Required if user is logged in, default creates anonymous ID
//       // email:        // Recommended if using Pendo Feedback, or NPS Email
//       // full_name:    // Recommended if using Pendo Feedback
//       // role:         // Optional

//       // You can add any additional visitor level key-values here,
//       // as long as it's not one of the above reserved names.
//   },

//   account: {
//       id:           'ACCOUNT-UNIQUE-ID' // Required if using Pendo Feedback, default uses the value 'ACCOUNT-UNIQUE-ID'
//       // name:         // Optional
//       // is_paying:    // Recommended if using Pendo Feedback
//       // monthly_value:// Recommended if using Pendo Feedback
//       // planLevel:    // Optional
//       // planPrice:    // Optional
//       // creationDate: // Optional

//       // You can add any additional account level key-values here,
//       // as long as it's not one of the above reserved names.
//   }
// });



app.mount('#app');
