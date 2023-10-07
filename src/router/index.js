import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import DetalleNoticia from '../views/DetalleNoticia.vue';
import ListaEventos from '../views/ListaEventos.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/detalle/:id',
      name: 'detalle',
      component: DetalleNoticia,
      props: true
    },
    {
      path: '/eventos',
      name: 'eventos',
      component: ListaEventos,
      props: true
    }
  ]
})

export default router
