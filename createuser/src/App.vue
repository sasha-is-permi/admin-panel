<template>
<v-app>

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
                  <v-toolbar-title class="text-center">Задайте логин и пароль</v-toolbar-title>
                                  
                </v-toolbar>
                <v-card-text>
                      <v-form v-model="valid" ref="form" validation>
                    <v-text-field
                      label="Пользователь"
                      name="login"
                      prepend-icon="mdi-account"
                      type="login"
                      v-model="login"
                      :rules="loginRules"
                    > </v-text-field>
  
                    <v-text-field
                      label="пароль"
                      name="password"
                      prepend-icon="mdi-lock"
                      type="password"
                      v-model="password"
                      :rules="passwordRules"
                    ></v-text-field>
                  </v-form>
                </v-card-text>
         
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                  @click="onSubmit"
                  color="primary"
                  :disabled="!valid"
                  >Задать</v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
		
</v-app>		
</template>

<script>


export default {

data () {
return {
  login:'',
   password:'',
   valid:false,
       loginRules: [
        v => !!v || 'Логин не может быть пустым'
      ],
       passwordRules: [
        v => !!v || 'Пароль не должен быть пустым',
        v =>( v.length >=2) || 'Пароль должен быть более 2 символов',
      ]
} 
},
 computed: {

 },

methods: {
onSubmit() {

if (this.$refs.form.validate()) {
    const user= {
        username:this.login,
        password:this.password
    }
      this.$store.dispatch('loginUser',user)
         .then(()=>{
            // this.$store.dispatch('Auth',user)
			let user = this.$store.getters.user;
           console.log('username',user.username);
           console.log('password',user.password);

          alert(`логин и пароль заданы: ${user.username}, ${user.password}`)       
               
          })
        .catch(()=>{})
        //  .catch(err=>console.log(err))
    }
}
},
created(){

}
}

</script>

<style scoped> 
.text-center {
  text-align:center;
}

</style>
 