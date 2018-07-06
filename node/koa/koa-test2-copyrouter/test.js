const http = require('http');

const Koa = require('koa');
const Router = require('./router');

const request = require('supertest');
const chai = require('chai');
const expect = chai.expect;

describe('测试开始', () => {

  it('测试路由工作是否正常', (done) => {
    const app = new Koa();
    const router = new Router();
    router.get(/^\/$/, async (ctx) => {
      ctx.body = { msg: 'home' };
    });
    app.use(router.middleware());

    request(http.createServer(app.callback()))
      .get('/')
      .expect(200)
      .end((err, res) => {
        if (err) done(err);
        expect(res.body.msg).to.equal('home');
        done();
      });
  });

  it('测试GET方法请求是否正常', (done) => {
    const app = new Koa();
    const router = new Router();
    router.get(/^\/hello$/, async (ctx) => {
      ctx.body = { msg: 'hello' };
    });
    app.use(router.middleware());

    request(http.createServer(app.callback()))
      .get('/hello')
      .expect(200)
      .end((err, res) => {
        if (err) done(err);
        expect(res.body.msg).to.equal('hello');
        done();
      });
  });

  it('测试POST方法请求是否正常', (done) => {
    const app = new Koa();
    const router = new Router();
    router.post(/^\/hello$/, async (ctx) => {
      ctx.body = { msg: 'hello' };
    });
    app.use(router.middleware());

    request(http.createServer(app.callback()))
      .post('/hello')
      .expect(200)
      .end((err, res) => {
        if(err) done(err);
        expect(res.body.msg).to.equal('hello');
        done();
      });
  });

  it('测试路径参数是否传递', (done) => {
    const app = new Koa();
    const router = new Router();
    router.get(/^\/param\/(.+)/, async (ctx) => {
      ctx.body = { msg: ctx.params[0] };
    });
    app.use(router.middleware());

    request(http.createServer(app.callback()))
      .get('/param/hello')
      .expect(200)
      .end((err, res) => {
        if (err) done(err);
        expect(res.body.msg).to.equal('hello');
        done();
      });
  });

  it('测试请求未定义的路由', (done) => {
    const app = new Koa();
    const router = new Router();
    app.use(router.middleware());

    request(http.createServer(app.callback()))
      .get('/404')
      .expect(404)
      .end((err) => {
        if (err) done(err);
        done();
      });
  });

});