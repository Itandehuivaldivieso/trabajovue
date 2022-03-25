<template>
  <h1>Arendatarios</h1>
  <div>
    <table class="table">
      <thead class="table-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">RFC</th>
          <th scope="col">NOMBRE</th>
          <th scope="col">APELLIDO</th>
          <th scope="col">ACCIONES</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="contact in personas" :key="contact.Rfc" class="align-bottom">
          <th scope="row">{{ contact.Rfc }}</th>
          <td>{{ contact.Rfc }}</td>
          <td>{{ contact.Nombre }}</td>
          <td>{{ contact.Apellido }}</td>
          <td>
            <button @click="update = true" class="btn btn-warning">
              Editar
            </button>
            
            <button @click="eliminar(contact.id_Alumno)" class="btn btn-danger">
              Eliminar
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "HelloWorld",
  mounted() {
    console.log("Component mounted.");
  },
  props: {
    msg: String,
  },
  data() {
    return {
      personas: [],
      showModel: false,
    };
  },
  filters: {
    currencydecimal(value) {
      return value.toFixed(2);
    },
  },
  methods: {
    
    async list() {
      axios
        .get("http://localhost:60775/Arrendatario/Listar")
        .then((response) => {
          // Código para manipular la respuesta de la llamada
          // utilizando el objeto response.data
          console.log(response);
          this.personas = response.data;
        })
        .catch((error) => {
          // para el manejo de errores
          console.log(error);
        });
      // const res = await axios.get("http://localhost:60775/Arrendatario/Listar");
      // console.log(res)
      // this.personas = res.data;
    },
  },
  created() {
    this.list();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
