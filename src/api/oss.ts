import myAxios from "@/service/myAxios";

export namespace OSSService {

    export const getFileList = async (prefix: string): Promise<Model.FileInfo[]> => {
        const res = await myAxios.get('/qiniu/list?prefix=' + prefix);
        if (res) {
            return res.data;
        }
        return {} as Model.FileInfo[];
    }

}
