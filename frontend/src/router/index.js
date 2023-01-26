import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Register from '@/views/Register.vue';
import Login from '@/views/Login.vue';
import Movie from '@/views/MovieView.vue';
import Cinema from '@/views/CinemaView.vue';
import Broadcast from '@/views/BroadcastView.vue';
import SingleBroadcast from '@/views/SingleBroadcastView.vue';
import Reservation from '@/views/ReservationView.vue';
import SingleMovie from '@/views/SingleMovieView.vue';
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },{
    path: '/movie',
    name: 'Movie',
    component: Movie
  },  {
    path: '/cinema',
    name: 'Cinema',
    component: Cinema
  },   {
    path: '/broadcast',
    name: 'Broadcast',
    component: Broadcast
  },    {
    path: '/broadcast/:id',
    name: 'SingleBroadcast',
    component: SingleBroadcast
  },     {
    path: '/reservation',
    name: 'Reservation',
    component: Reservation
  },      {
    path: '/movie/:id',
    name: 'SingleMovie',
    component: SingleMovie
  }, 
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
