import {defineStore} from "pinia"

export const userStore = defineStore('user', {
    state: () => ({
        user: null as Model.CurrentUser
    }),
    actions: {
        setUser(user: Model.CurrentUser) {
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
