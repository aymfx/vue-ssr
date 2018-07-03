import {
  createApp
} from './main'
export default context => {
  // 因为有可能会是异步路由钩子函数或组件，所以我们将返回一个 Promise，
  // 以便服务器能够等待所有的内容在渲染前，
  // 就已经准备就绪。
  return new Promise((resolve, reject) => {
    const {
      app,
      router
    } = createApp();
    // 设置服务器端router位置
    router.push(context.url)
    //等到router将可能的异步组件和钩子函数解析完
    router.onReady(() => {
      const mathchedComponents = router.getMatchedComponents();
      // 匹配不到路由，执行reject函数，并返回404
      if (!mathchedComponents.length) {
        return reject({
          code: 404
        })
      }
      resolve(app)
    }, reject)
  })
}
