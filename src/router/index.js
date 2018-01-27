const Router = require('koa-router')
const router = new Router()
const fs = require('fs-extra')

const knex = require('knex')({
  dialect: 'sqlite3',
  connection: {
    filename: './data.db'
  }
})

router.get('/', async ctx => {
  ctx.body = await fs.readFile('src/views/index.html', 'utf8')
})


router.post('/user', async ctx => {
  await knex.table('users').insert(ctx.request.body).then()
  ctx.body = {code: 1}
})

router.get('/user', async ctx => {
  ctx.body = await knex.table('users').select().then()
})

router.delete('/user/:id', async ctx => {
  ctx.body = await knex.table('users').where('id', ctx.params.id).delete().then()
})


module.exports = router