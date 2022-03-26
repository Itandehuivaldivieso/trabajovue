<template>
    <div class="NumInmuebles">
        <table class="table">
            <thead class="table-dark">
                <tr>
                    <th scope="col">Nombre</th>
                    <th scope="col">Apellidos</th>
                    <th scope="col">No. Inmuebles sin usar</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="inmueble in inmuebles" :key="inmueble.nombre" class="align-bottom">  
                <td>{{inmueble.nombre}}</td>
                <td>{{inmueble.apellido}}</td>
                <td>{{inmueble.numInmuebles}}</td>
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
    name: 'NumInmuebles',
    data(){
        return {
            inmuebles:null
        }
    },
    mounted(){
        this.getInmuebles();
    },
    methods:{
        getInmuebles(){
            axios.get('http://localhost:51947/Inmuebles/NumInmuebles').then(
                response => {
                    this.inmuebles=response.data;
                }
            ).catch(e=>console.log(e));
        }    
    }
})
</script>

<style>

</style>
