const Koa = require('koa')
const Router = require('koa-router')
const app = new Koa()
const router = new Router()
const register = require('./Routes/register')

const port = process.env.PORT || 8080


router.get('/', async(ctx)=>{
    ctx.body = 'Welcome to the koa-server'
})

// this is just for testing the user's actual ip and host details.


router.get('/info', async(ctx)=>{
    const ip = ctx.ip;
    const host = ctx.host = ctx.host
    ctx.body = {ip, host}
})


app.use(register.routes())
app.use(router.routes())
app.listen(port, () => console.log(`The server is listening on port ${port}`))