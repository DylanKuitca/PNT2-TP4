<template>

  <section class="src-components-formulario">
    <div class="jumbotron">
      <h1>Componente Formulario</h1>
      <br>

      <vue-form :state="formState" @submit.prevent="enviar()">
  
      <validate tag="div">
        <label for="nombre">Nombre</label>
          <input 
          v-model="formData.nombre" 
          name="nombre" 
          type="text"
          class="form-control"
          caracteres-nombre
          required
          />
        <field-messages name="nombre" show="$dirty">
          <div class="alert alert-success mt-1">Esta OK!</div>
          <div class="alert alert-danger mt-1" slot="required">El nombre es requerido</div>
          <div class="alert alert-warning mt-1" slot="caracteres-nombre">El nombre debe estar entre 5 y 15 caractes</div>
        </field-messages>
      </validate>
      <br>
      <validate tag="div">
        <label for="edad">Edad</label>
          <input 
          v-model="formData.edad" 
          name="edad" 
          type="number"
          class="form-control"
          edad-valida
          required
          />
        <field-messages name="edad" show="$dirty">
          <div class="alert alert-success mt-1">Esta OK!</div>
          <div class="alert alert-danger mt-1" slot="required">La edad es requerido</div>
          <div class="alert alert-warning mt-1" slot="edad-valida">El edad debe ser mayor a 18 y menor a 120</div>
        </field-messages>
      </validate>
      <br>
       <validate tag="div">
        <label for="email">Email</label>
          <input 
          v-model="formData.email" 
          name="email" 
          type="email"
          class="form-control"
          caracteres-email
          required
          />
        <field-messages name="email" show="$dirty">
          <div class="alert alert-success mt-1">Esta OK!</div>
          <div class="alert alert-danger mt-1" slot="required">El email es requerido</div>
        </field-messages>
      </validate>

      <button class="btn btn-success my-4" :disabled="formState.$invalid" type="submit">Enviar</button>
    </vue-form>

     <div v-if="validElements.length" class="table-responsive">
        <table class="table table-dark">
            <tr> 
                <th>Index</th>
                <th>Nombre</th>
                <th>Edad</th>
                <th>Email</th>
            </tr>
            <tr v-for="(data, index) in validElements" :key="index"> <!-- Desde la segunda Table Row itero sobre la tabla -->
                <td>{{ index + 1 }}</td>
                <td>{{data.nombre}}</td>
                <td>{{data.edad}}</td>
                <td>{{data.email}}</td> 
            </tr>
             <tr v-if="(formState.$valid)"> <!-- Desde la segunda Table Row itero sobre la tabla -->
                <td>{{formData.nombre}}</td>
                <td>{{formData.edad}}</td>
                <td>{{formData.email}}</td> 
            </tr>
        </table>
    </div>

    {{validElements}}
    

    </div>

  </section>

</template>

<script lang="js">

  export default  {
    name: 'src-components-formulario',
    props: [],
    mounted () {

    },
    data () {
      return {
        formData: this.InitFormData(),
        formState: {},
        validElements: [{}]

      }
    },
    methods: {
      InitFormData() {
        return {
          nombre: '',
          edad: '',
          email: '',
        }
      },
      enviar() {
        console.log({...this.formData});
        this.validElements.push(this.formData)
        this.formData = this.InitFormData();
        this.formState._reset()
      },

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-formulario {

  }

  .jumbotron {
    background-color: rgb(63, 10, 170);
    color: white
  }
  hr {
    color: white
  }
</style>
