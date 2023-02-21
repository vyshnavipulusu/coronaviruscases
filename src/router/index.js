import MainPage from '@/components/MainPage/MainPage.vue';
import HomePage from '@/components/HomePage/HomePage.vue';
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'MainPage',
        component: MainPage
    },
    {
        path: '/home',
        name: 'HomePage',
        component: HomePage
    }
];

const router = new VueRouter({
    mode: 'history',
    routes
  });

export default router;