import {defineStore} from "pinia"

export const userStore = defineStore('user', {
    state: () => ({
        user: null as Model.User
    }),
    actions: {
        setUser(user: Model.User) {
            this.user = user
        },
        clearUser() {
            this.user = null
        },
    },
    getters: {
        getUser: (state) => state.user,
    }
})
