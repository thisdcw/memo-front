import { defineStore } from "pinia"

export const userStore = defineStore('user', {
    state: () => ({
        user: null as any,
        token: null as any,
    }),
    actions: {
        setUser(user: any) {
            this.user = user
        },
        setToken(token: any) {
            this.token = token
        },
        clearUser() {
            this.user = null
            this.token = null
        },
    },
})
