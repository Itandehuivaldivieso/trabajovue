<template>
    <div class="ListarArrendadores">
        <table class="table">
            <thead class="table-dark">
                <tr>
                    <th scope="col">RFC</th>
                    <th class="scope">Nombre</th>
                    <th class="scope">Apellido</th>
                    <th class="scope"></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="arrendador in arrendadores" :key="arrendador.rfc">
                    <td>{{arrendador.rfc}}</td>
                    <td>{{arrendador.nombre}}</td>
                    <td>{{arrendador.apellido}}</td>
                    <td>
                        <button @click="update = true" class="btn btn-warning">
                        Editar
                        </button>
                        <button @click="deleteArrendadores(arrendador.rfc)" class="btn btn-danger">
                        Eliminar
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
        <br>
        <br>

            <p>
                <label for="rfc">RFC</label>
                <input
                id="rfc"
                v-model="rfc"
                type="text"
                name="rfc"
                >
            </p>

            <p>
                <label for="nombre">Nombre</label>
                <input
                id="name"
                v-model="name"
                type="text"
                name="name"
                >
            </p>
            <p>
                <label for="ap">Apellidos</label>
                <input
                id="ap"
                v-model="ap"
                type="ap"
                name="ap"
                >
            </p>

            <p>
                <button
                class="btn btn-primary mb-2"
                type="submit"
                value="Enviar"
                v-on:click="AddArrendadores()"
                >Guardar</button>
            </p>
        <!-- <button class="btn btn-primary mb-2" v-on:click="getInmueblesByDir()">Adicionar</button> -->
    </div>
</template>

<script>
import axios from 'axios'

export default({
    setup() {
        
    },
    name: 'ListarArrendadores',
    data(){
        return {
            arrendadores:null
        }
    },
    mounted(){
        this.getArrendadores();
    },
    methods:{
        getArrendadores(){
            axios.get('http://localhost:51947/Arrendadores/Listar').then(
                response => {
                    this.arrendadores=response.data;
                }
            ).catch(e=>console.log(e));
        },
        deleteArrendadores(rfc){
            axios.post('http://localhost:51947/Arrendadores/Eliminar',{rfc:rfc}).then(
                response => {
                    this.arrendadores=response.data;
                    this.getArrendadores();
                }
            ).catch(e=>console.log(e));
        },
        AddArrendadores(){
            let arrendadores={
                rfc:this.rfc,
                nombre:this.name,
                apellido:this.ap
            };
            axios.post('http://localhost:51947/Arrendadores/Registrar',arrendadores).then(
                response => {
                    this.arrendadores=response.data;
                    this.getArrendadores();
                }
            ).catch(e=>console.log(e));
        }    
    }
})
</script>

<style>

</style>
