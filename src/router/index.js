import Vue from 'vue';
import VueRouter from 'vue-router';
import MainPage from '@/views/MainPage';
import FavoritesProducts from '@/views/FavoritesProducts';
import PageProduct from '@/views/PageProduct';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: MainPage,
  },
  {
    path: '/favorites',
    name: 'favorites',
    meta: { title: 'Избранное' },
    /* Для тестирования функционала раскоментировать строки ниже и в адресной строке перейти по маршруту /favorites/bar */
    // children: [
    //   { path: 'bar', component: PageProduct,meta: {'title' :'test'}}
    // ],
    component: FavoritesProducts,
  },
  {
    path: '/prod/:id',
    name: 'prod',
    component: PageProduct,
    props: true,
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
