<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

          <table class="table">
            <thead class="table-dark">
                <tr>
                    <th scope="col">Nombre</th>
                    <th scope="col">Apellidos</th>
                    <th scope="col">Adeudo total</th>
                </tr>
            </thead>
            <tbody>  
                <tr v-for="todo in todos" :key="todo.nombre" class="align-bottom">
                  <td>{{todo.nombre}}</td>
                  <td>{{todo.apellido}}</td>
                  <td>{{todo.adeudo}}</td>
                </tr>
            </tbody>
        </table>    
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return {
      todos:null
    }
  },
  mounted(){
    console.log('Hola ');
    this.getTodos();
  },
  methods:{
    getTodos(){
      console.log('Get todos');
      axios.get('http://localhost:51947/Inmuebles/SumaAdeudos').then(
        response => {
          console.log(response);
          this.todos=response.data;
        }
      ).catch(e=>console.log(e));
    }    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
