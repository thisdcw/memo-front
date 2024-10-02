import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import BasicLayout from '@/components/BasicLayout/BasicLayout.vue'
import Footer from '@/components/Footer/Footer.vue'
import Header from '@/components/Header/Header.vue'
import Aside from '@/components/Aside/Aside.vue'
import { createPinia } from 'pinia'
import './style.css'
import App from '@/App.vue'
import router from './router'

const app = createApp(App);
const pinia = createPinia();

app.use(ElementPlus, {
    locale: zhCn,
})
app.use(router)
app.use(pinia)

app.component('basic-layout', BasicLayout)
app.component('cs-footer', Footer)
app.component('cs-header', Header)
app.component('cs-aside', Aside)

app.mount('#app')
