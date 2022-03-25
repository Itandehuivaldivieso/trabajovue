import { createRouter, createWebHashHistory } from 'vue-router'
const routes =[
    {
        path: '/',
        name: 'arrendatario',
        component: () => import(/* webpackChunkName: "arrendamiento" */ '../components/HelloWorld.vue')
      },
    {
        path: '/arrendatario',
        name: 'arrendatario',
        component: () => import(/* webpackChunkName: "arrendamiento" */ '../components/HelloWorld.vue')
      },
      // {
      //   path: '/arrendatarioInsert',
      //   name: 'arrendatarioInsert',
      //   component: () => import(/* webpackChunkName: "arrendamiento" */ '../components/Arrendatarios/ArrendatarioInsert.vue')
      // }
      {
        path: '/listararrendatario',
        name: 'listararrendatario',
        component: () => import(/* webpackChunkName: "arrendamiento" */ '../components/Arrendatarios/ListarArrendatario.vue')
      }
]
const router = createRouter({
    history: createWebHashHistory(),
    routes
    
})
export default router