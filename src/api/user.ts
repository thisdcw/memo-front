import myAxios from "../service/myAxios";

export const getCurrentUser = async () => {

    const res = await myAxios.get('/device/all');
    if (res) {
        return res.data
    }
    return null
}
