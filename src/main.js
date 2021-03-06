import Vue from 'vue'
import App from './App.vue'
import { createRouter } from './router'
import { createStore } from './store'
import i18n from './i18n'

Vue.config.productionTip = false;

export async function createApp ({ beforeApp = () => {}, afterApp = () => {}, lang = 'ua' } = {}) {
  const router = createRouter();
  const store = createStore({ lang });

  await beforeApp({
    router,
    store,
  });

  const app = new Vue({
    router,
    store,
    i18n: i18n(lang),
    render: h => h(App)
  });

  const result = {
    app,
    router,
    store,
  };

  await afterApp(result);

  return result
}
