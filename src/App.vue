

  <!-- Директива app - свойство, которое говорит vuetify
  о том как правильно следить за поведением элементов 
  drawer- всплывающее меню слева 
  toolbar- верхняя часть приложения
  content- основная часть приложения
  footer- подвал
  container - контейнер как в bootstrap.
  Данные строки превращаются в обычные div с классами. 
  
  -->


<template>
<!-- App.vue -->

<v-app>
  <!-- не работает
  <v-navigation-drawer  app>

  </v-navigation-drawer> -->

  <v-app-bar app>
    <!-- -->  app-bar
  </v-app-bar>

  <!-- Sizes your content based upon application components -->
  <v-main>

    <!-- Provides the application the proper gutter -->
    <v-container fluid>
      container
      <!-- If using vue-router -->
      <router-view></router-view>
    </v-container>
  </v-main>

  <v-footer app>
    <!-- --> footer
  </v-footer>
</v-app>
</template>

<script>
  export default {

  }
</script>
