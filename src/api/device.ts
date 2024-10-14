import myAxios from "../service/myAxios";
import Device = Model.Device;

export namespace DeviceService {


    export const unlockAllDevice = async (): Promise<string> => {
        const res = await myAxios.post('/device/unlock/all')
        if (res) {
            return res.data;
        }
        return '';
    }

    export const lockAllDevice = async (): Promise<string> => {
        const res = await myAxios.post('/device/lock/all')
        if (res) {
            return res.data;
        }
        return '';
    }

    export const updateDevice = async (form: PostForm.UpdateDeviceForm): Promise<string> => {
        const res = await myAxios.post('/device/update', form)
        if (res) {
            return res.data;
        }
        return '';
    }

    export const unlockDevice = async (deviceId: string): Promise<string> => {
        const res = await myAxios.post('/device/unlock', {
            params: {
                deviceId,
            }
        });
        if (res) {
            return res.data;
        }
        return '';
    }
    export const lockDevice = async (deviceId: string): Promise<string> => {
        const res = await myAxios.post('/device/lock?deviceId=' + deviceId);
        if (res) {
            return res.data;
        }
        return '';
    }

    export const addNewDevice = async (form: PostForm.AddDeviceForm): Promise<string> => {

        const res = await myAxios.post('/device/add', form)
        if (res) {
            return res.data;
        }
        return '';
    }

    export const getAllDevice = async (cur: number = 1, size: number = 10, search: string = ''): Promise<Model.Page<Model.Device>> => {

        const res = await myAxios.get('/device/all', {
            params: {
                cur,
                size,
                search
            }
        });
        if (res) {
            return res.data as Model.Page<Model.Device>;
        }
        return {} as Model.Page<Model.Device>;
    }
}
