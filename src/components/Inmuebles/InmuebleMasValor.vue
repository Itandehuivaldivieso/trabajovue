<template>
  <h1 class="border p-3">Inmueble mas caro</h1>
  <div id="ArreForm">
    <form id="fore" class="border p-3 form">
      <div class="form-group mb-3">
          <h4>Datos del inmueble</h4>
        <label for="exampleInputEmail1" class="form-label">Calle</label>
        <input
          type="text"
          class="form-control"
          id="rfc"
          :value="inmueble[0].calle"
          readonly
        />
      </div>
      <div class="mb-3">
        <label for="Nombre" class="form-label">Colonia</label>
        <input
          type="text"
          class="form-control"
          id="nombre"
          :value="inmueble[0].colonia"
          readonly
        />
      </div>
      <div class="mb-3">
        <label for="Apellido" class="form-label"
          >Numero</label
        >
        <input
          type="text"
          class="form-control"
          id="apellido"
          :value="inmueble[0].numero"
          readonly
        />
      </div>
      
    </form >
 
    <div class="border p-3 mb-3" id="fore">
          <h4>Datos del dueño</h4>
      <div class="mb-3">
        <label for="Nombre" class="form-label">Nombre del dueño</label>
        <input
          type="text"
          class="form-control"
          id="nombre"
          :value="inmueble[0].nombre"
          readonly
        />
      </div>
      <div class="mb-3">
        <label for="Apellido" class="form-label"
          >Apellido del dueño</label
        >
        <input
          type="text"
          class="form-control"
          id="apellido"
          :value="inmueble[0].apellido"
          readonly
        />
      </div>
      <div class="mb-3">
        <label for="Apellido" class="form-label">Valor del inmueble</label>
        <input
          type="number"
          class="form-control"
          id="apellido"
          :value="inmueble[0].adeudo"
          readonly
        />
      </div>
      </div>
      
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "InmuebleMasValor",
  mounted() {
    console.log("Component mounted.");
  },
  data() {
    return {
      inmueble: []
    };
  },
  methods: {
    async list() {
      axios
        .get("http://localhost:60775/Contratos/ListarInmueble")
        .then((response) => {
          // Código para manipular la respuesta de la llamada
          // utilizando el objeto response.data
          console.log(response.data);
          this.inmueble = response.data;
        })
        .catch((error) => {
          // para el manejo de errores
          console.log(error);
        });
    },
  },

  created() {
    console.log("entrando");
    this.list();
  },
};
</script>
<style>
#ArreForm {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 50vh;
}

#fore {
  width: 450px;
}
</style>
