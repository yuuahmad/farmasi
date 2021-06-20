import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/views/Home.vue'
import Toko from '/src/views/Toko.vue'
import Admin from '/src/views/Admin.vue'
import Event from '/src/views/Event.vue'
import Lomba from '/src/views/Lomba.vue'

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
    {
        path: '/admin',
        name: 'Admin',
        component: Admin,
    },
    {
        path: '/event',
        name: 'Event',
        component: Event,
    },
    {
        path: '/lomba',
        name: 'Lomba',
        component: Lomba,
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router