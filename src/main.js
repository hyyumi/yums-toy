import 'babel-polyfill'

import Vue from 'vue'

import 'normalize.css'
import './plugins/element-ui'

import './styles/index.scss'

import App from './App.vue'
import router from './routes'
import store from './vuex/store'

import i18n from './languages'
import './routes/routerGuard'

import './plugins/firebase'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
