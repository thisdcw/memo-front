import {createApp} from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import BasicLayout from '@/components/BasicLayout/BasicLayout.vue'
import Footer from '@/components/Footer/Footer.vue'
import Header from '@/components/Header/Header.vue'
import Aside from '@/components/Aside/Aside.vue'
import AppMain from '@/components/AppMain/index.vue'
import {pinia} from './store'
import './style.css'
import App from '@/App.vue'
import router from './router'

const app = createApp(App);

app.use(ElementPlus, {
    locale: zhCn,
})
app.use(pinia)
app.use(router)

app.component('basic-layout', BasicLayout)
app.component('cs-footer', Footer)
app.component('cs-header', Header)
app.component('cs-aside', Aside)
app.component('app-main', AppMain)

app.mount('#app')
