import myAxios from "../service/myAxios";


export const getAllDevice = async (cur: number = 1, size: number = 10): Promise<Model.Page<Model.Device>> => {

    const res = await myAxios.get('/device/all', {
        params: {
            cur,
            size
        }
    });
    if (res) {
        return res.data as Model.Page<Model.Device>;
    }
    return {} as Model.Page<Model.Device>;
}
