<template>

  <section class="src-components-usuario">

      <div class="jumbotron">
        <h1>Componente Usuario</h1>
        <br>

        <button class="btn btn-warning mr-4 mb-3" @click="getUsuariosAxios()">Axios-GET</button>
        <button class="btn btn-warning mr-4 mb-3" @click="getUsuariosFetch()">Fetch-GET</button>
        <button class="btn btn-warning mr-2 mb-3" @click="getUsuariosXHR()">XHR-GET</button>

        <TablaUsuarios :usuarios="usuarios" v-show="usuarios.length" />

      
      </div>

  </section>

</template>

<script>

import '/src/axios.js'
import TablaUsuarios from './TablaUsuario'

  export default  {
    name: 'src-components-usuario',
    components: {
      TablaUsuarios
    },
    props: [],
    mounted ()   {
     /*  this.getUsuarios() */
    } , 
    data () {
      return {
        url: 'https://6286d6fae9494df61b2e1214.mockapi.io/api/usuarios',
        usuarios : []
      }
    },
    methods: {

    async getUsuariosAxios() {
        try {
          let { data } = await this.axios(this.url)
          console.log(data);
          this.usuarios = data
        } catch (error) {
          console.error('Error al buscar usuarios con axios', error.messages);
        }
      },

    async getUsuariosFetch() {
      try {
        let res = await fetch(this.url)
        let respuesta = await res.json()
          this.usuarios = respuesta
      } catch (error) {
          console.log('Error al buscar usuarios con Fetch', error);
      }
    },
    getUsuariosXHR() {
      const xhr = new XMLHttpRequest()
      xhr.open('get',this.url)

      xhr.addEventListener('load', () => {
        if (xhr.status == 200) {
          let respuesta = JSON.parse(xhr.response)
          this.usuarios = respuesta
        } else {
          console.log('Error XHR',xhr.status);
        }
      })

      xhr.addEventListener('error', e => {
        console.log('Error XHR', e);
      })

      xhr.send()

    }

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-usuario {

  }
  .jumbotron {
    background-color: rgb(51, 128, 102);
    color: white
  }
  hr {
    color: white
  }
  
</style>
