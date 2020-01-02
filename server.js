const Koa = require('koa')
const server = new Koa()
const Router = require('koa-router')
const router = new Router()
const next = require('next')
const proxy = require('koa-server-http-proxy')
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const PORT = 3008


server.use(proxy('/api', {
    target: 'https://extension-ms.juejin.im', // 服务器地址
    changeOrigin: true,
    secure: false,
    pathRewrite: {'^/api' : ''},
}))


// 等到pages目录编译完成后启动服务响应请求
app.prepare().then(() => {

  // start
  // 利用koa-router去把/a/1这种格式的路由
  // 代理到/a?id=1去，这样就不会404了
  router.get('/a/:id', async ctx => {
    const id = ctx.params.id
    await handle(ctx.req, ctx.res, {
      pathname: '/a',
      query: {
        id,
      },
    })
    ctx.respond = false
  })
  server.use(router.routes())
  // end

  server.use(async (ctx, next) => {
    await handle(ctx.req, ctx.res)
    ctx.respond = false
  })

  server.listen(PORT, () => {
    console.log(`koa server listening on ${PORT}`)
  })
}).catch(error => {
    console.log('error===>',error)
})