import axios, { AxiosInstance, CreateAxiosDefaults } from "axios";

const myAxios: AxiosInstance = axios.create({
    baseURL: 'https://thisdcw.cn/api'
    // baseURL: 'http://127.0.0.1:8088/api'
} as CreateAxiosDefaults);

myAxios.defaults.withCredentials = true;

// 添加请求拦截器
myAxios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    // config.headers['Token'] = "37ac921d-a3c3-4317-8583-1a45cafda9ac"; // 设置 Authorization 头
    console.log("发送请求...")
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
myAxios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    console.log("响应成功...")
    return response.data;
}, function (error) {
    // 对响应错误做点什么
    console.log("响应失败...")
    return Promise.reject(error);
});

export default myAxios;
