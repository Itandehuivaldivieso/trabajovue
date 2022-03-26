<template>

    <h1 class="border p-3">Registrar arrendatario</h1>
    <div id="ArreForm" >
    <form id ="fore" class="border p-3 form">
      <div class="form-group mb-3">
        <label for="exampleInputEmail1" class="form-label">RFC</label>
        <input
          type="text"
          class="form-control"
          id="rfc"
          v-model="personas.Rfc"
        />
      </div>
      <div class="mb-3">
        <label for="Nombre" class="form-label">Nombre del arrendatario</label>
        <input
          type="text"
          class="form-control"
          id="nombre"
        v-model="personas.Nombre"
        />
      </div>
      <div class="mb-3">
        <label for="Apellido" class="form-label">Apellido del arrendatario</label>
        <input
          type="text"
          class="form-control"
          id="apellido"
          v-model="personas.Apellido"
        />
      </div>
      <button type="submit" class="btn btn-primary" v-on:click="AgregarArrendatario">Guardar</button>
    </form>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "ArrendatarioInsert",
  mounted() {
    console.log("Component mounted.");
  },
  props: {
    msg: String,
  },
  data() {
    return {
      personas: {
          Rfc:"",
          Nombre:"",
          Apellido:""
      }
    };
  },
  methods: {
    async AgregarArrendatario() {
        console.log(this.personas);
       await axios.post("http://localhost:60775/Arrendatario/Registrar", this.personas);
       this.resetForm();
    },
    resetForm(){
        this.Rfc="";
        this.Nombre="";
        this.Apellido="";
    }
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