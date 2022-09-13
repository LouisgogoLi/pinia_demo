import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';
import i18n from './i18n.js';

import '@/assets/css/reset.css';
import 'element-plus/theme-chalk/display.css';
import '@/assets/css/element.css';
import 'animate.css';
// import "./assets/css/main.css";

const app = createApp(App);

import { fnToDoDirective } from '@/common/directiveCommon';
fnToDoDirective(app);

app.use(i18n);
app.use(createPinia());
app.use(router);

router.isReady().then(() => {
  app.mount('#app');
});
