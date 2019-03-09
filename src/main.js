import Vue from 'vue'
import App from './App.vue'
import router from './router'

import 'bulma/bulma.sass'
import './styles.scss'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
