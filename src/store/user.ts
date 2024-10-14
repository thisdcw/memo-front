import {defineStore} from "pinia"

export const userStore = defineStore('user', {
    state: () => ({
        user: null as Model.User,
        token: '37ac921d-a3c3-4317-8583-1a45cafda9ac' as string,
    }),
    actions: {
        setUser(user: Model.User) {
            this.user = user
        },
        setToken(token: string) {
            this.token = token
        },
        clearUser() {
            this.user = null
            this.token = null
        },
    },
    getters: {
        getUser: (state) => state.user,
        getToken: (state) => state.token,
    }
})
