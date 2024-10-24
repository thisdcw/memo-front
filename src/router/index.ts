import {createRouter, createWebHashHistory} from 'vue-router';
import Device from '@/view/device/Device.vue';
import NotFound from '@/view/NotFound/NotFound.vue'
import Login from '@/view/login/index.vue';
import User from '@/view/user/index.vue';
import Profile from '@/view/profile/index.vue';
import Other from '@/view/other/index.vue';
import Dashboard from '@/view/dashboard/index.vue';
import Welcome from '@/view/welcome/index.vue';
import OSS from '@/view/OSSManager/OSS.vue';
import BasicLayout from "../components/BasicLayout/BasicLayout.vue";
import {setupRouterGuard} from './guard'

const routes = [
    {
        path: '/', component: BasicLayout, redirect: '/dashboard',
        children: [
            {path: '/welcome', component: Welcome},
            {path: '/dashboard', component: Dashboard},
            {path: '/user', component: User},
            {path: '/device', component: Device},
            {path: '/oss', component: OSS},
            {path: '/other', component: Other},
            {path: '/profile', component: Profile},
        ]
    },
    {path: '/login', component: Login},
    {path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound},
] as any[];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

// 应用路由守卫
setupRouterGuard(router)

export default router;
