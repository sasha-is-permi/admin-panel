




export default {
  state: {
    user:{
		username:"",
		password:""
	}
  },
  mutations: {
    setUser(state,payload) {
        state.user.username = payload.username
        state.user.password = payload.password
    }

  },
  actions:{
 
    // Проверка login 
	
    // payload деструктурируем на {login,password}
    async loginUser({commit},payload){
 //    commit('clearError')
 //    try {
 //    const user = await fb.auth().signInWithEmailAndPassword(email, password)
 //    commit('setUser',new User(user.uid))
 //    commit('setLoading',false) 
 //    }  catch(error) {
//     commit('setLoading',false)
//     commit('setError',error.message)
 //    throw error
//     }

          commit('setUser',payload)

       

          }
    
//   autoLoginUser({commit},payload) {       
    // Вызываем setUser
//    commit('setUser', new User(payload.uid))

//   },
   

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