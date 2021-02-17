// Подключаем firebase
//import fb from 'firebase/app';
//require('firebase/auth');
//require('firebase/database');

let user= "admin";
let userPassword="111";


class User {
   constructor (id) {
      this.id = id
       }
}



export default {
  state: {
    user:null  
  },
  mutations: {
    setUser(state,payload) {
        state.user = payload
    }

  },
  actions:{
 
    // Проверка login 
	
    // payload деструктурируем на {login,password}
    async loginUser({commit},{login, password}){
      commit('clearError')
      commit('setLoading',true)
 //    try {
 //    const user = await fb.auth().signInWithEmailAndPassword(email, password)
 //    commit('setUser',new User(user.uid))
 //    commit('setLoading',false) 
 //    }  catch(error) {
//     commit('setLoading',false)
//     commit('setError',error.message)
 //    throw error
//     }
       if ((login===user)&&(password===userPassword)){
          commit('setUser',new User(user.uid))
          commit('setLoading',false)}
       else {
          commit('setLoading',false)
          commit('setError',"Неправильный логин или пароль")
//            throw error	   
            }
        

 },
    
//   autoLoginUser({commit},payload) {       
    // Вызываем setUser
//    commit('setUser', new User(payload.uid))

//   },
   
    
	// Разлогинимся   
    logoutUser({commit}){
     // Разлогинимся
     // fb.auth().signOut()
     // Вызываем mutation setUser со значением null
     // (очищаем User)
     commit('setUser',null)
    }
  },
  
  
  getters:{
    user(state){     
        return state.user       
    },
 
    isUserLoggedIn (state) {
      // Проверяем- зарегистрирован ли пользователь
      return state.user !== null 
    }
  }
}