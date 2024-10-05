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
    type User = {
        uid: number,
        username: string,
        email: string,
        create_at: string,
        avatar: string,
        role: number,
        role_id: number,
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
    }
}
