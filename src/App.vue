<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Bienes raices</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link active"
                  :to="{ name: 'listararrendatario' }"
                  >Home</router-link >
          </li>
         <li class="nav-item">
            <router-link class="nav-link active"
                  :to="{ name: 'adeudosGenerales' }"
                  >Adeudo general</router-link >
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Arrendadores
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                
                <router-link
                  :to="{ name: 'arrendadorDebe' }"
                  class="dropdown-item"
                  >Arrendador al que se le debe mas</router-link
                >
              </li>
              
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Arrendatarios
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                
                <router-link
                  :to="{ name: 'listararrendatario' }"
                  class="dropdown-item"
                  >Lista de arrendatarios</router-link
                >
              </li>
              <li>
                <router-link
                  :to="{ name: 'arrendatarioInsert' }"
                  class="dropdown-item"
                  >Registrar Arrendatario</router-link
                >
              </li>
              <li>
                <router-link
                  :to="{ name: 'arrendatarioDeudor' }"
                  class="dropdown-item"
                  >Arrendatario dedudor</router-link
                >
              </li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Inmuebles
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                
                <router-link
                  :to="{ name: 'inmuebleCaro' }"
                  class="dropdown-item"
                  >Inmueble con mas valor</router-link
                >
              </li>
               <li>
                
                <router-link
                  :to="{ name: 'listararrendadoreslibres' }"
                  class="dropdown-item"
                  >Inmuebles libres</router-link
                >
              </li>
              <li>
        
                <router-link
                  :to="{ name: 'buscarInmueble' }"
                  class="dropdown-item"
                  >Buscar inmuebles</router-link
                >
              </li>
            </ul>
          </li>
        </ul>
        
      </div>
    </div>
  </nav>
  <!-- <nav>
     <router-link :to="{ name: 'arrendatario' }">Arrendamiento</router-link>
   </nav> -->
  <router-view> </router-view>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
