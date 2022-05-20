<template>

  <section class="src-components-tabla-usuario">
        <br>

          <table class="table table-dark align-middle align-self-center">
            <tr> 
                <th>Index</th>
                <th>Nombre</th>
                <th>Email</th>
                <th>Telefono</th>
                <th>Avatar</th>
            </tr>
            <tr v-for="(usuario, index) in usuarios" :key="index"> <!-- Desde la segunda Table Row itero sobre la tabla -->
                <td class="align-middle">{{ index + 1 }}</td>
                <td class="align-middle">{{usuario.nombre}}</td>
                <td class="align-middle">{{usuario.email}}</td> 
                <td class="align-middle">{{usuario.telefono}}</td>
                <img :src="usuario.avatar" width="250" :alt="usuario.nombre" :style="{'border-radius': '10px'}"> 
            </tr>
          </table>

  </section>

</template>

<script>

  export default  {
    name: 'src-components-tabla-usuario',
    props: {
      usuarios : Array,
    },
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-tabla-usuario {

  }
</style>
