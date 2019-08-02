import Vue from 'vue'
import i18n from '@/languages'
import ElementUI from 'element-ui'
import './styles.scss'

Vue.use(ElementUI, {
  size: 'small',
  i18n: (key, value) => i18n.t(key, value)
})
