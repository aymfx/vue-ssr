import Vue from 'vue'
import App from './App.vue'
import {
    createRouter
} from './router'

Vue.config.productionTip = false

export function createApp(ssrContext) {
     // 创建 router 实例
    const router = createRouter()
    const app = new Vue({
        // 注入 router 到根 Vue 实例
        router,
        //
        ssrContext,
        render: h => h(App)
    })
    return {
        app,
        router
    }
}