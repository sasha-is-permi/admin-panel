  <template>
     <v-main>
        <div class="div1">     
           <p class="text-center">  </p>
           <!-- Запускаем метод по разлогиниванию -->
            {{onLogout()}}
        </div>
     </v-main>
  </template>

<script>



export default {  

methods: {
    onLogout() {
     // Разлогинивание- чтобы не показывалось меню 
      this.$store.dispatch('logoutUser');
     // переходим на главную страницу раз разлогинились
     this.$router.push('/');
    }

}

}


</script>

<style scoped>
  .text-center {
    font-size:18px;
    text-align:center;
    color:green;
  }
  .div1{
    height:600px;
    display:flex;
    justify-content:center;
    margin-top:50px;
   /* align-items:center; */
  }

</style>