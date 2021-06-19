import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/views/Home.vue'
import Toko from '/src/views/Toko.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/toko',
        name: 'Toko',
        component: Toko,
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router