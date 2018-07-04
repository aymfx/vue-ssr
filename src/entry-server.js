import {
    createApp
} from './main'

export default context => {
    // 因为可能存在异步组件，所以等待router将所有异步组件加载完毕，服务器端配置也需要此操作
    // 因为这边 router.onReady 是异步的，所以我们返回一个 Promise
    // 确保路由或组件准备就绪
    return new Promise((resolve, reject) => {
        const {
            app,
            router
        } = createApp(context)
        router.push(context.url)
        router.onReady(() => {
            console.log('router ready')
            resolve(app)
        }, reject)
    })
}