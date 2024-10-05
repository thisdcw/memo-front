import { createRouter, createWebHistory } from 'vue-router';
import Device from '@/view/device/Device.vue';
import NotFound from '@/view/NotFound/NotFound.vue'

const routes = [
    { path: '/device', component: Device },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
] as any[];

const router = createRouter({
    history: createWebHistory(),
    routes,
})


export default router;
