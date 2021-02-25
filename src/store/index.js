// импорт объекта vue
import Vue from 'vue'
// импорт vuex из компонента установленного
// (для того чтобы работал store- 
//(state,actions,mutations,getters)
//- общие данные и методы для всех файлов 
//(компонентов) vue )
import Vuex from 'vuex'

// импорт всех компонентов из папки /store
// а затем объединение их в один файл для 
// использованиея store в компонентах *.vue
import user from './user'
import shared from './shared'
import employee from './employee'
import project from './project'
import projectgroup from './projectgroup'
import team from './team'
import process from './process'
import metric from './metric'
import workspace from './workspace'
import integration from './integration'
import setting from './setting'



// Подключение vuex к vue
Vue.use(Vuex)

// Экспортируем данные vuex в *.vue файлы
export default new Vuex.Store({
  modules: {
    user, shared,
    employee, project, projectgroup, team, process,
    metric, workspace, integration, setting
  }
})
