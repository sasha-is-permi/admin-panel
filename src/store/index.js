// импорт объекта vue
import Vue from 'vue'
// импорт vuex из компонента установленного
// (для того чтобы работал store- 
//(state,actions,mutations,getters)
//- общие данные и методы для всех файлов 
//(компонентов) vue )
import Vuex from 'vuex'

import user from './user'
import shared from './shared'
import employee from './employee'



// Подключение vuex к vue
Vue.use(Vuex)

// Экспортируем данные vuex в другие компоненты
export default new Vuex.Store({
  modules: {
    user, shared, employee
  }
})
