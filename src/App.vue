<template>
  <v-container>
    <v-row >
      <v-col cols="12">
             <h1 class="h1"> Административная панель </h1>     
      </v-col>
    </v-row>
      
    <!-- Общий размер раздела-карточки-->  
    <v-card
      style="margin-top:20px;" 
      height="600"
      width="250"
    >
    <!-- навигационное меню (выдвижное- возможность) 
    permanent - Панель остаётся видимой независимо от размера экрана
              Панель остаётся видимой независимо от размера экрана
    mini-variant - сжимать панель -только картинки показываются
    expandOnHover - при включенном mini-variant при наведении на меню оно
     раскрывается
    

    -->
      <v-navigation-drawer
        v-model="drawer"
        :color="color"
        :expand-on-hover="xpandOnHover"
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
              <v-list-item-title>User</v-list-item-title>
              <v-list-item-subtitle>Иванов А.В.</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-divider></v-divider>

          <v-list-item
            v-for="item in items"
            :key="item.title"
             :to='item.url'
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>

                 <v-list-item-title class="list-item-title" @click="onItemClick">
                  
                   
                  {{ item.title }}
                      


                </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-card>

 

  </v-container>
</template>


<script>
  export default {
    data () {
      return {
        drawer: true,
        items: [
          { title: 'Рабочие пространства', icon: 'mdi-view-dashboard', url:'/workspaces' },
          { title: 'Разработчики', icon: 'mdi-view-dashboard', url:'/workspaces' },
          { title: 'Команды', icon: 'mdi-view-dashboard' , url:'/workspaces'},
          { title: 'Проекты', icon: 'mdi-view-dashboard', url:'/workspaces' },
          { title: 'Группы проектов', icon: 'mdi-view-dashboard', url:'/workspaces' },        
          { title: 'Процессы', icon: 'mdi-view-dashboard', url:'/workspaces' },
          { title: 'Метрики', icon: 'mdi-view-dashboard', url:'/workspaces' },
          { title: 'Интеграции', icon: 'mdi-view-dashboard', url:'/workspaces' },
          { title: 'Настройки', icon: 'mdi-view-dashboard', url:'/workspaces' },
          { title: 'Интеграции', icon: 'mdi-view-dashboard',url:'/workspaces' }
        ],
        color: "#E1F5FE",
        permanent: true,
        miniVariant: false,
        expandOnHover: true
      }
    },
    methods: {
        onItemClick() {
     // переходим на главную страницу раз разлогинились
   <view-router></view-router>
   //  this.$router.push('workspaces')

    }

    },
    computed: {
    }
  }
</script>

<style scoped>
   .h1{
       text-align:center;
       color:blue;       
   }
   .list-item-title {
      font-size:18px!important;
      padding-left:10px;
   }

</style>
 