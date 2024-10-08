import { Router } from "vue-router";
import { getToken } from "../utils/auth";


const whiteList = ['/login', '/register']

export function setupRouterGuard(router: Router) {
    router.beforeEach(async (to, from, next) => {
        const token = getToken()

        console.log(token)

        if (token) {
            if (to.path === '/login') {
                next({ path: '/' })
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
}
