declare namespace PostForm {
    type AddDeviceForm = {
        deviceId: string,
        deviceName: string,
    };
    type UpdateDeviceForm = {
        deviceId: string;
        deviceName: string;
        remark: string;
        mode: number;
    }
}
declare namespace Model {
    type R<T> = {
        code: number,
        msg: string,
        description: string,
        data: T
    };
    type Page<T> = {
        total: number,
        size: number,
        current: number,
        pages: number,
        records: T[]
    };
    type CurrentUser = {
        uid: number,
        username: string,
        email: string,
        create_at: string,
        avatar: string,
        user_status: number,
        account: string,
        token: string,
        address: string,
        phone: string,
        city: string,
        roleName: string,
        permissions: string[],
        roadVOList: Road[],
        skillsList: Skill[],
        frameworkList: Skill[]
    };
    type Road = {
        id: number,
        date_at: String,
        title: string,
        description: string
    };
    type Skill = {
        id: number,
        name: string,
        level: number,
        score: number,
    };
    type User = {
        uid: number,
        username: string,
        email: string,
        create_at: string,
        avatar: string,
        role: number,
        role_id: number,
        user_status: number,
        account: string,
        token: string
    };
    type Device = {
        id: number,
        device_id: string,
        device_name: string,
        create_at: Date,
        last_upload: Date,
        device_status: number,
        remark?: string,
        mode?: number,
        isLocked: number
    };
    type FileInfo = {
        key: string,
        hash: string,
        size: number,
        putTime: string,
        mimeType: string,
        status: number
    }
}
