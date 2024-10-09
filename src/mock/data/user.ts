import Mock from 'mockjs';

const userList: Model.User[] = []
const count = 14;


for (let i = 0; i < count; i++) {
    userList.push(Mock.mock({
        uid: '@increment', // 自增数字
        username: '@word(5, 10)', // 随机用户名，长度在5到10之间
        email: '@email', // 随机邮箱地址
        create_at: Mock.Random.date(), // 时间戳格式的日期
        avatar: '@/assets/avatar.png', // 固定路径
        role: '@integer(0, 1)', // 0或1
        role_id: '@integer(1, 5)', // 1到5之间的随机数，假设有5种角色
        account: '@string("lower", 6, 10)' // 随机账号，长度在6到10之间的随机小写字母组合
    }));
}

const user: Model.User = Mock.mock({
    uid: '@increment', // 自增数字
    username: '@word(5, 10)', // 随机用户名，长度在5到10之间
    email: '@email', // 随机邮箱地址
    create_at: Mock.Random.date(), // 时间戳格式的日期
    avatar: '@/assets/avatar.png', // 固定路径
    role: '@integer(0, 1)', // 0或1
    role_id: '@integer(1, 5)', // 1到5之间的随机数，假设有5种角色
    account: '@string("lower", 6, 10)', // 随机账号，长度在6到10之间的随机小写字母组合
    token: 'admin-token',
})

export const getUserList = (): Model.User[] => {
    return userList;
}

export const getCurrentUser = (): Model.User => {
    return user;
}

