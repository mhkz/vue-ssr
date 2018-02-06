const Koa    = require('koa')
const Vue    = require('vue')
    , router = require('koa-router')()
    , json   = require('koa-json')
    , logger = require('koa-logger')
    , auth   = './server/routers/auth.js';

// const renderer = require('vue-server-renderer').createRenderer({
//     template: require('fs').readdirSync('./index.template.html')
// })

const app = new Koa();
app.use(require('koa-bodyparser')());
app.use(json());
app.use(logger());

app.use(async (ctx, next) => {
    await next();
    let start = new Date;
    let ms = new Date - start;
    console.log('%s %s - %s', this.method, this.url, ms);
    // ctx.response.type = 'text/html';
    // const vueApp = new Vue({
    //     data: {
    //         url: req.url,
    //         data: mockdata,
    //         title: mocktitle
    //     },
    //     template: `<div>The visited URL is: {{url}}
    //     <h3>{{title}}</h3>
    //     <p v-for="item in data">{{item}}</p>
    //     </div>`
    // })
    // renderer.renderToString(vueApp, context, (err, html) => {
    //     if(err) {
    //         ctx.status(500).end('Server is Error');
    //         return;
    //     }
    //     ctx.body = html;
    // })

});

app.on('error', function (err, ctx) {
  console.log('server is error',err)
})
app.listen(3000, () => {
  console.log('app started at port 3000...');
});

module.exports = app;
