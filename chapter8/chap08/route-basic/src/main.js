import Vue from 'vue'
import App from './App.vue'
//router.jsが有効になる

Vue.config.productionTip = false

new Vue({
  //router.jsが有効になる
  render: h => h(App)
}).$mount('#app')
