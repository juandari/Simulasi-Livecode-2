import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

new Vue({
  store,
  router, 
  render: (h) => h(App)
})
// createApp(App).use(store).use(router).mount('#app')
