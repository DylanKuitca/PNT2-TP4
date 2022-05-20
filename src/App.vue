<template>
  <div class="container-fluid mt-3">
    <div class="jumbotron">
      <h1>TP Nro 4</h1>
      <br>

      <Navbar/>
      <router-view></router-view>
     <!--  <Formulario/> -->
      
    </div>
  </div>

  

</template>

<script>
//import Formulario from './components/Formulario.vue'
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    //Formulario,
    Navbar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
