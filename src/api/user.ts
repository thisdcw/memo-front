import myAxios from "../service/myAxios";


export namespace UserService {

    export const getAllUser = async (cur: number = 1, size: number = 10, search: string = ''): Promise<Model.Page<Model.User>> => {

        const res = await myAxios.get('/user/all', {
            params: {
                cur,
                size,
                search
            }
        });
        if (res) {
            return res.data as Model.Page<Model.User>;
        }
        return {} as Model.Page<Model.User>;
    }

    export const login = async (account: string, password: string): Promise<Model.User> => {
        const res = await myAxios.post('/user/login', {
            account,
            password
        })
        if (res) {
            return res.data;
        }
        return {} as Model.User;
    }

    export const getCurrentUser = async (): Promise<Model.User> => {

        const res = await myAxios.get('/user/current');
        if (res) {
            return res.data
        }
        return {} as Model.User;
    }
}


