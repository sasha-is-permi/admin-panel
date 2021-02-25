// Объект vue
import Vue from 'vue'
// главный файл приложения
import App from './App.vue'
// включение роутинга- разбиение на странички
// (app.vue, components/*.vue)
import router from './router'
// импорт vuex из компонента установленного
// (для того чтобы работал store- 
// (state,actions,mutations,getters)
//- общие данные и методы для всех файлов 
//(компонентов) vue )
// Данные и методы store будут находится в папке 
// /store
import store from './store'

// импорт библиотеки vuetify- 
// графической библиотеки для vue
import vuetify from './plugins/vuetify';
import 'vuetify/dist/vuetify.min.css'

// для режима разработки
Vue.config.productionTip = false

new Vue({
// Подключение импортированных компонентов для 
// объектов vue  
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')



