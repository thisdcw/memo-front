import {Router} from "vue-router";
import {getToken} from "../utils/token.ts";
import NProgress from "../plugins/NProgress.ts";


const whiteList = ['/login', '/register']

export function setupRouterGuard(router: Router) {
    router.beforeEach(async (to, _, next) => {
        NProgress.start();

        const token = getToken()

        console.log(token)

        if (token) {
            if (to.path === '/login') {
                next({path: '/'})
            } else {
                next()
            }
        } else {
            console.log("没有token")
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
