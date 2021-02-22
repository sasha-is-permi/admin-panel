<!-- 
Настройка графической библиотеки vutify:
https://vuetifyjs.com/en/getting-started/installation/

<v-app> 
    <v-content>
    //..
    </v-content>
</v-app>

Документация гласит :

    Для того чтобы ваше приложение работало должным образом,
     вы должны завернуть его в v-app компонент. 

Директива app для тегов- свойство, которое говорит vuetify
  о том как правильно следить за поведением элементов 
  drawer- всплывающее меню слева 
  toolbar- верхняя часть приложения
  content- основная часть приложения
  footer- подвал
  container - контейнер как в bootstrap.
  Данные строки превращаются в обычные div с классами. 
  Они работают на flexbox. 

-->

<template>
  <v-app>
  <v-container class="container" >
    <v-row >
      <v-col cols="12">
             <h1 class="h1"> Административная панель </h1>     
      </v-col>
    </v-row>
   
    <!-- **************************************************** -->
    <!-- Панель для desctop экранов с разрешением >= 600 px   -->  
    <v-row class="container1">  

    <v-col sm="3" > 
    <!-- Общий размер раздела-карточки-->  
    <v-card 
      class ="card1"
      style="margin-top:20px;" 
      height="520px"
      width="400px"
    >
    <!-- навигационное меню (выдвижное- возможность) 
    permanent - Панель остаётся видимой независимо от размера экрана
              Панель остаётся видимой независимо от размера экрана
    mini-variant - сжимать панель -только картинки показываются

    

    -->
      <v-navigation-drawer
        height="520px"
        width="400px"
        v-model="drawer"
        :color="color"
        :mini-variant="miniVariant"
        :permanent="permanent"
      >
        <v-list
          dense
          nav
          class="py-0"
        >

              <v-list-item >

            <v-list-item-content>
              <v-list-item-title></v-list-item-title>
              <v-list-item-subtitle></v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-divider></v-divider>

          <v-list-item
            v-for="item in items"
            :key="item.title"
             :to='item.url'
          >
            <v-list-item-icon class="list-item-icon">
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content class="list-item-content">

                 <v-list-item-title class="list-item-title">                                     
                  {{ item.title }}                      
                </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-card>
    </v-col>

    <v-col sm="9">
   <v-card
      class="card2"
      style="margin-top:20px;" 
      height="520px"
      width="600px"
    >
          <router-view> </router-view>      
  
    </v-card>
    </v-col>
 
   </v-row>

  <!-- Панель для мобильной версии  -->
  <!-- ************************************************** -->
  
   <v-row class="container2">
            

       <v-card
    class="mx-auto "
    height="70"
    width="100%"
  >
    <v-system-bar :color="color"></v-system-bar>

    <v-app-bar
      :color="color"
      prominent
    >
      <v-app-bar-nav-icon @click.stop="drawer2 = !drawer2"></v-app-bar-nav-icon>

       <v-spacer></v-spacer>

    </v-app-bar>

  </v-card>

    <v-navigation-drawer
      width="100%"
      height="750"
      v-model="drawer2"
      absolute      
      center
      temporary
      :color="color"
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          
           <v-list-item >

            <v-list-item-content>
              <v-list-item-title></v-list-item-title>
              <v-list-item-subtitle></v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-divider></v-divider>

          <v-list-item
            v-for="item in items"
            :key="item.title"
             :to='item.url'
          >
            <v-list-item-icon class="list-item-icon">
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content class="list-item-content">

                 <v-list-item-title class="list-item-title">                                     
                  {{ item.title }}                      
                </v-list-item-title>
            </v-list-item-content>
          </v-list-item>






          </v-list-item-group>
        </v-list>
    </v-navigation-drawer>





  <v-card
      class="card2"
      style="margin-top:20px;" 
      height="480"
      width="100%"
    >
          <router-view> </router-view>      
  
    </v-card>
   
   
   
   
   
   </v-row> 


  </v-container>

  <!-- Показываем сообщение только если есть ошибка -->
  <template v-if="error">
  <v-snackbar
      :multi-line="true"
      :timeout="5000"
      color="error"
      @input="closeError"
      :value="true"
    >
      {{ error }}


        <v-btn
          dark
          @click.native="closeError"
        >
          Close
        </v-btn>

    </v-snackbar>
    </template>

  </v-app>
</template>


<script>
  export default {
    data () {
      return {
        drawer: true,
        drawer2:false,
        group:null,
        color: "#E1F5FE",
        permanent: true,
        miniVariant: false
      }
    },
    
    
    methods: {
        closeError () {
     // Очищаем ошибки при закрытии окна с ошибками
     this.$store.dispatch('clearError')

    }

    },
    computed: {
         error() {  
     // Обращаемся к геттеру с ошибками  
    return this.$store.getters.error    
                  },
     // Обращаемся к геттеру который проверяет- 
     // залогинен ли пользователь             
   isUserLoggedIn () {
    return this.$store.getters.isUserLoggedIn
   },   

          items() {
        // Если пользователь авторизирован- показываем ему все меню   
        if (this.isUserLoggedIn){
        return [

          { title: 'Рабочие пространства', icon: 'mdi-view-dashboard', url:'/workspaces' },
          { title: 'Разработчики', icon: 'mdi-view-dashboard', url:'/developers' },
          { title: 'Команды', icon: 'mdi-view-dashboard' , url:'/teams'},
          { title: 'Проекты', icon: 'mdi-view-dashboard', url:'/projects' },
          { title: 'Группы проектов', icon: 'mdi-view-dashboard', url:'/projectgroups' },        
          { title: 'Процессы', icon: 'mdi-view-dashboard', url:'/processes' },
          { title: 'Метрики', icon: 'mdi-view-dashboard', url:'/metrics' },
          { title: 'Настройки', icon: 'mdi-view-dashboard', url:'/settings' },
          { title: 'Интеграции', icon: 'mdi-view-dashboard',url:'/integrations' },
          { title: 'Выйти из системы', icon: 'mdi-view-dashboard',url:'/logout'  }
        ]                              }
      // Если не авторизирован- показываем только меню регистрации    
      return [
      {title:'Авторизация',icon:'lock', url:'/login'}
      ]        
                 }  
             }

  }
</script>

<style scoped>
   
    .container {
    width:1200px!important;
    }


    .list-item-title {
      margin-left:3px!important;
      padding-left:0px!important;
   }

    .list-item-icon {
      margin-right:0px!important;
      padding-right:0px!important;
   }

       .list-item-content {
      margin-right:0px!important;
      padding-right:0px!important;
   }

  @media (min-width: 850px) and (max-width: 899px) {
     .list-item-title {  font-size:16px!important; }
  }  



  .pointer {
    cursor:pointer;
    }



   .h1{
       text-align:center;
       color:blue;       
   }
   .list-item-title {
      font-size:13px!important;
      padding-left:3px;
   }
   .text-center{
     text-align:center;
   }


   
   @media (min-width: 600px) and (max-width: 849px) {

    .list-item-title {
      font-size:12px!important;   }
     }

      @media (min-width: 0px) and (max-width: 599px) {

    .container1 {
     display:none!important;
   }
     }
       @media (min-width: 600px) {

    .container2 {
     display:none!important;
   }
     }

</style>
 