<template>
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    v-if="modalShow"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">
            Editar arrendatario
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <form>
            <div class="form-group">
              <label for="recipient-name" class="col-form-label">RFC</label>
              <input
                type="text"
                class="form-control"
                id="rfcNuevo"
                ref="rfcNuevo"
                :value="persona.Rfc"
                readonly
              />
            </div>
            <div class="form-group">
              <label for="message-text" class="col-form-label">Nombre:</label>
              <input
                type="text"
                class="form-control"
                id="nombreNuevo"
                ref="nombreNuevo"
                :value="persona.Nombre"
              />
            </div>
            <div class="form-group">
              <label for="message-text" class="col-form-label">Apellido:</label>
              <input
                type="text"
                class="form-control"
                id="recipient-name"
                ref="apellidoNuevo"
                :value="persona.Apellido"
              />
            </div>
           
          </form>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button
            type="button"
            class="btn btn-primary"
            v-on:click="AgregarArrendatario"
          >
            Guardar cambios
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  props: {
    persona: {
      typed: Array,
      required: true,
    },
  },
  data() {
    return {
      modalShow: true
    };
  },
  methods: {
    async AgregarArrendatario() {
      const rfc = this.$refs.rfcNuevo.value;
      const nombre = this.$refs.nombreNuevo.value;
      const apellido = this.$refs.apellidoNuevo.value;
     
      console.log(rfc, nombre, apellido);
      await axios.post("http://localhost:60775/Arrendatario/Actualizar", {
        rfc,
        nombre,
        apellido,
      }) .then(() => {

            this.modalShow = false
        })
        .catch(error => {
            if (error.response.status === 422) {
                this.invalidUpdateMsg = error.response.data.errors;
            }
        });
       
    },
     closeModal() {
       this.isModalVisible = false;
     }
  },
};
</script>
