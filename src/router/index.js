import { createRouter, createWebHashHistory } from 'vue-router'
const routes =[
    {
        path: '/',
        name: 'arrendatario',
        component: () => import(/* webpackChunkName: "arrendamiento" */ '../components/Arrendatarios/ListarArrendatario.vue')
      },
    {
        path: '/arrendatario',
        name: 'arrendatario',
        component: () => import(/* webpackChunkName: "arrendamiento" */ '../components/HelloWorld.vue')
      },
      {
        path: '/arrendatarioInsert',
        name: 'arrendatarioInsert',
        component: () => import(/* webpackChunkName: "arrendamiento" */ '../components/Arrendatarios/RegistrarArrendatario.vue')
      },
      {
        path: '/listararrendatario',
        name: 'listararrendatario',
        component: () => import(/* webpackChunkName: "arrendamiento" */ '../components/Arrendatarios/ListarArrendatario.vue')
      },
      {
        path: '/arrendatarioDeudor',
        name: 'arrendatarioDeudor',
        component: () => import(/* webpackChunkName: "arrendamiento" */ '../components/Arrendatarios/ArrendatarioDeudor.vue')
      },
      {
        path: '/arrendadorDebe',
        name: 'arrendadorDebe',
        component: () => import(/* webpackChunkName: "arrendamiento" */ '../components/Arrendadores/ArrendadorDeudor.vue')
      },
      {
        path: '/inmuebleCaro',
        name: 'inmuebleCaro',
        component: () => import(/* webpackChunkName: "arrendamiento" */ '../components/Inmuebles/InmuebleMasValor.vue')
      }
]
const router = createRouter({
    history: createWebHashHistory(),
    routes
    
})
export default router