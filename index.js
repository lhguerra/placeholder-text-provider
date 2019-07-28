const Koa = require("koa");

const app = new Koa();

/**
 * Usage:
 *
 * <p data-text-placeholder="my-text">
 *   <link href="http://c300dcf8.ngrok.io" type="text/html" rel="import">
 * </p>
 */
app.use(async ctx => {
  ctx.set("Access-Control-Allow-Origin", "*");
  ctx.body = `<script>
    document.querySelector("[data-text-placeholder=my-text]").innerHTML = 3
  </script>`;
});

app.listen(3000);
