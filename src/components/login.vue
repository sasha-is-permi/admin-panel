<template>


        <v-container
          class="fill-height"
          fluid
        >
          <v-row
            align="center"
            justify="center"
          >
            <v-col
              cols="12"
              sm="8"
              md="6"
            >
              <v-card class="elevation-12">
                <v-toolbar
                  color="primary"
                  dark
                  flat
                >
                  <v-toolbar-title>Login form</v-toolbar-title>
                                  
                </v-toolbar>
                <v-card-text>
                      <v-form v-model="valid" ref="form" validation>
                    <v-text-field
                      label="login"
                      name="login"
                      prepend-icon="mdi-account"
                      type="login"
                      v-model="login"
                      :rules="loginRules"
                    > </v-text-field>
  
                    <v-text-field
                      label="password"
                      name="password"
                      prepend-icon="mdi-lock"
                      type="password"
                      v-model="password"
                      :rules="passwordRules"
                    ></v-text-field>
                  </v-form>
                </v-card-text>
                <!-- Под формой- для отправки формы. 
                v-spacer кнопочку Login перемещает вправо.
                При клике на кнопочку "Login"- 
                вызываем метод onSubmit  -->
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                  @click="onSubmit"
                  color="primary"
                  :loading="loading"
                  :disabled="!valid || loading"
                  >Войти</v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
</template>

<script>


export default {

data () {
return {
   email:'',
   password:'',
   valid:false,
       emailRules: [
        v => !!v || 'Логин не может быть пустым'
      ],
       passwordRules: [
        v => !!v || 'Пароль не должен быть пустым',
        v =>( v.length >=2) || 'Пароль должен быть более 2 символов',
      ]
} 
},
 computed: {
      loading () {
        return this.$store.getters.loading
      }
 },

methods: {
onSubmit() {
// login
if (this.$refs.form.validate()) {
    const user= {
        login:this.login,
        password:this.password
    }
      this.$store.dispatch('loginUser',user)
         .then(()=>{
            // this.$store.dispatch('AfterAuth',user)
            // Переходим на главную страницу
            this.$router.push('/')
          })
        .catch(()=>{})
        //  .catch(err=>console.log(err))
    }
}
},
created(){
// обращаемся к текущему роуту 
// (текущей странице)
// Если в запросе передался параметр  loginError
if (this.$route.query['loginError']){
  // вызываем action setError() из store
  this.$store.dispatch('setError','Please log in to access this page')
}

}
}

</script>