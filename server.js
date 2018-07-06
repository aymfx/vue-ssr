/*
 * @Author: ly 
 * @Date: 2018-07-05 10:01:44 
 * @Last Modified by: ly
 * @Last Modified time: 2018-07-06 10:00:28
 * @description: {'koa服务器配置'} 
 */

const Koa = require('koa')
const app = new Koa()
const fs = require('fs')
const path = require('path')
const {
    createBundleRenderer
} = require('vue-server-renderer')

const resolve = file => path.resolve(__dirname, file)

const isProd = process.env.NODE_ENV === 'production';
const template = fs.readFileSync(resolve('./src/index.template.html'), 'utf-8')
const clientManifest = require('./dist/vue-ssr-client-manifest.json')
const serverBundle = require('./dist/vue-ssr-server-bundle.json')


// 生成服务端渲染函数
const renderer = createBundleRenderer(serverBundle, {
    // 推荐
    runInNewContext: false,
    // 模板html文件
    template,
    // client manifest
    clientManifest
})



function renderToString(context) {
    return new Promise((resolve, reject) => {
        renderer.renderToString(context, (err, html) => {
            err ? reject(err) : resolve(html)
        })
    })
}
app.use(require('koa-static')(resolve('./dist')))
// response
app.use(async (ctx, next) => {
    const context = {
        title: '服务端渲染测试',
        url: ctx.url
    };
    try {
        console.log(context, 12)
        // 将服务器端渲染好的html返回给客户端
        ctx.body = await renderToString(context)

        // 设置请求头
        ctx.set('Content-Type', 'text/html')
        ctx.set('Server', 'Koa2 server side render')
    } catch (e) {
        // 如果没找到，放过请求，继续运行后面的中间件
        next()
    }
})

if (isProd) {

}

app.listen(3000)