<template>
  <v-container>
    <v-row >
      <v-col cols="12">
             <h1 class="h1"> Административная панель </h1>     
      </v-col>
    </v-row>
      
    <v-card
      style="margin-top:20px;" 
      height="600"
      width="250"
    >
      <v-navigation-drawer
        v-model="drawer"
        :color="color"
        :expand-on-hover="xpandOnHover"
        :mini-variant="miniVariant"
        :right="right"
        :permanent="permanent"
        :src="bg"
        absolute
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
            link
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title class="list-item-title">{{ item.title }}</v-list-item-title>
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
          { title: 'Рабочие пространства', icon: 'mdi-view-dashboard' },
          { title: 'Разработчики', icon: 'mdi-view-dashboard' },
          { title: 'Команды', icon: 'mdi-view-dashboard' },
          { title: 'Проекты', icon: 'mdi-view-dashboard' },
          { title: 'Группы проектов', icon: 'mdi-view-dashboard' },        
          { title: 'Процессы', icon: 'mdi-view-dashboard' },
          { title: 'Метрики', icon: 'mdi-view-dashboard' },
          { title: 'Интеграции', icon: 'mdi-view-dashboard' },
          { title: 'Настройки', icon: 'mdi-view-dashboard' },
          { title: 'Интеграции', icon: 'mdi-view-dashboard' }
        ],
        color: 'blue',
        right: false,
        permanent: true,
        miniVariant: false,
        expandOnHover: false
      }
    },
    computed: {
      bg () {
 //       return 'https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg'
       return ""
      }
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
 