<template>
    <div class="SearchDir">
        <div class="col mb-2">
            <input type="text" class="form-control-plaintext" v-model="textsearch" placeholder="Buscador" ><button class="btn btn-primary mb-2" v-on:click="getInmueblesByDir()">buscar</button>
         </div>
        <table class="table">
            <thead class="table-dark">
                <tr>
                    <th scope="col">Calle</th>
                    <th scope="col">Numero</th>
                    <th scope="col">Colonia</th>
                    <th scope="col">Nombre del Arrendador</th>
                </tr>
            </thead>
            <tbody>  
                <tr v-for="inmueble in inmueblesbydir" :key="inmueble.id" class="align-bottom">
                    <td>{{inmueble.calle}}</td>
                    <td>{{inmueble.numero}}</td>
                    <td>{{inmueble.colonia}}</td>
                    <td>{{inmueble.nombreArrendador}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from 'axios'

export default({
    setup() {
        
    },
    name: 'SearchDir',
    data(){
        return {
            inmueblesbydir:this.textsearch
        }
    },
    mounted(){
        this.getInmueblesByDir();
    },
    methods:{
        getInmueblesByDir(){
            let post={
                direccion:this.textsearch
            };
            axios.post('http://localhost:51947/Inmuebles/SearchAdress',post,{'Content-Type': 'application/json;charset=utf-8'}).then(
                response => {
                    this.inmueblesbydir=response.data;
                    console.log(response.data);
                }
            ).catch(e=>console.log(e));
        }    
    }
})
</script>

<style scoped>

</style>
