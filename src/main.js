import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueMeta from 'vue-meta'

import './styles.scss';

Vue.use(VueMeta);


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')



new Vue({
  router,
  render: h => h(App),
  mounted() {
    Pace.start()
    Pace.on('hide', () => {
      document.dispatchEvent(new Event('app.rendered'));
    })
  }
}).$mount('#app')