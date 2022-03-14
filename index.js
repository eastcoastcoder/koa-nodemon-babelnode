import Koa from 'koa';

const app = new Koa();

app.use(async (ctx) => {
  ctx.body = testCopy;
});

app.listen(3000);
console.log('Application is running on port 3000');
