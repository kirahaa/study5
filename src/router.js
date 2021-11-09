import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/./pages/Home';
import About from '@/./pages/About';
import List from '@/./pages/List';

Vue.use(Router);

let router = new Router({

    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            components: {
                default: Home
            }
        },
        {
            path: '/about',
            name: 'about',
            components: {
                default: About
            }
        },
        {
            path: '/list',
            name: 'list',
            components: {
                default: List
            }
        }
    ],


})

export default router;