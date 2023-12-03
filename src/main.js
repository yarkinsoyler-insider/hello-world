import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueMobileDetection from 'vue-mobile-detection'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false
Vue.use(VueMobileDetection)
 

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
