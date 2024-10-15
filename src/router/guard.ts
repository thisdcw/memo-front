import {Router} from "vue-router";
import NProgress from "../plugins/NProgress";


const whiteList = ['/login', '/register']

export function setupRouterGuard(router: Router) {
    router.beforeEach(async (to, _, next) => {
        NProgress.start();
        const token = localStorage.getItem('token');
        if (token) {
            if (to.path === '/login') {
                next({path: '/'})
            } else {
                next()
            }
        } else {
            if (whiteList.includes(to.path)) {
                next()
            } else {
                next(`/login?redirect=${to.path}`)
            }
        }
    })

    /**
     * @description 路由跳转错误
     * */
    router.onError(error => {
        NProgress.done();
        console.warn("路由错误", error.message);
    });

    /**
     * @description 路由跳转结束
     * */
    router.afterEach(() => {
        NProgress.done();
    });
}
