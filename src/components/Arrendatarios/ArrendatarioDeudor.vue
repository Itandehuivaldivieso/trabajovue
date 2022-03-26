<template>
  <h1 class="border p-3">Arrendatario con mas deuda</h1>
  <div id="ArreForm">
    <form id="fore" class="border p-3 form">
      <div class="form-group mb-3">
        <label for="exampleInputEmail1" class="form-label">RFC</label>
        <input
          type="text"
          class="form-control"
          id="rfc"
          :value="personas[0].rfc"
          readonly
        />
      </div>
      <div class="mb-3">
        <label for="Nombre" class="form-label">Nombre del arrendatario</label>
        <input
          type="text"
          class="form-control"
          id="nombre"
          :value="personas[0].nombre"
          readonly
        />
      </div>
      <div class="mb-3">
        <label for="Apellido" class="form-label"
          >Apellido del arrendatario</label
        >
        <input
          type="text"
          class="form-control"
          id="apellido"
          :value="personas[0].apellido"
          readonly
        />
      </div>
      <div class="mb-3">
        <label for="Apellido" class="form-label">Monto de deuda</label>
        <input
          type="number"
          class="form-control"
          id="apellido"
          :value="personas[0].adeudo"
          readonly
        />
      </div>
    </form>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "ArrendatarioDeudor",
  mounted() {
    console.log("Component mounted.");
  },
  data() {
    return {
      personas: {
        Rfc: "",
        Nombre: "",
        Apellido: "",
      },
    };
  },
  methods: {
    async list() {
      axios
        .get("http://localhost:60775/Contratos/ListarArrendatarioDeudor")
        .then((response) => {
          // Código para manipular la respuesta de la llamada
          // utilizando el objeto response.data
          console.log(response.data);
          this.personas = response.data;
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
