import {defineStore} from "pinia"

export const userStore = defineStore('user', {
    state: () => ({
        user: null as Model.User,
        token: null as string,
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
