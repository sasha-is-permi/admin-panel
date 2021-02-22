import Vue from 'vue'
// импорт vuex из компонента установленного
import Vuex from 'vuex'

import user from './user'
import shared from './shared'
import developers from './developers'



// Подключение vuex к vue
Vue.use(Vuex)

// Экспортируем данные vuex в другие компоненты
export default new Vuex.Store({
  modules: {
    user, shared, developers
  }
})
