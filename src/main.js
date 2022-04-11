import 'vuetify/styles'; // Global CSS has to be imported
import { createApp } from 'vue';
import { createVuetify } from 'vuetify';
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

app.use(vuetify);
app.use(mixpanel);
app.mixin(titleMixin);

app.mount('#app');
