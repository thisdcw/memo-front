import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import BasicLayout from '@/components/BasicLayout/BasicLayout.vue'
import './style.css'
import App from '@/App.vue'

const app = createApp(App);

app.use(ElementPlus, {
    locale: zhCn,
})
app.component('basic-layout', BasicLayout)

app.mount('#app')
