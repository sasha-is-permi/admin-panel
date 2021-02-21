<template>
<div>

<!--
Разработчики
1. Просмотр списка Разработчиков  (+фильтр по полям, +постраничная навигация) с выведенными полями:

1.	uuid
2.	ФИО
3.	Команда 
5.  Проект
4.	Массив: JIRA, Telegram, Git, Confluence, BitrixPortal
5.	Login
6.	Email

2. Форма Создания/Редактирования Разработчика
1.	ФИО
2.	Выбор команды или Проекта
3.	Привязки к JIRA, Telegram, Git, Confluence, BitrixPortal
4.	Login
5.	Email
-->


  <v-card
      class ="card1"
      max-width="100%"
      height="520px"
  >
    <v-list dense>
      <v-list-item-group
        v-model="selectedItem"
        color="primary"
      >

        <v-list-item >

            <v-list-item-content>
              <v-list-item-title></v-list-item-title>
              <v-list-item-subtitle></v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-divider></v-divider>

          <v-divider></v-divider>
         
      
        <v-list-item
          v-for="(item, i) in developers"
          :key="i"
        >
          <v-list-item-content>
                 <v-list-item-title v-text="item.uuid + ' '+ item.fio"></v-list-item-title>
                 <v-list-item-title v-text="item.team + ' '+ item.project" ></v-list-item-title>
                 <v-list-item-title v-text="item.login + ' ' +item.email"></v-list-item-title>
                <v-list-item-title v-text="item.connections['jira'] + ' ' + item.connections['telegram']"></v-list-item-title>
                <v-list-item-title v-text="item.connections['confluence'] + ' ' + item.connections['bitrixPortal']"></v-list-item-title>

          </v-list-item-content>
        </v-list-item>
  

      </v-list-item-group>
    </v-list>
  </v-card>

  




</div>
</template>

<script>

export default {
data: () => ({
      selectedItem: 1,
      items: [
        { text: 'Real-Time', icon: 'mdi-clock' },
        { text: 'Audience', icon: 'mdi-account' },
        { text: 'Conversions', icon: 'mdi-flag' },
      ],
    }),


computed:{
  

  developers() {  
    // Обратимся к геттеру (функции) - получаем с помощью него все данные
     return this.$store.getters.developers
  },
  loading(){
    return this.$store.getters.loading
  }
}

}


</script>

<style scoped>


</style>