const Router = require('koa-router')
const router = new Router()
const path = require('path')
const fs = require('fs-extra')

const knex=require('knex')({
	dialect:'sqlite3',
	connection:{
		filename:'./data.db'
	}
})


router.get('/',async (ctx,next)=>{
	ctx.body = await fs.readFile('src/views/index.html','utf8')
})

router.post('/user',async(ctx,next)=>{
	await knex.table('users').insert(ctx.request.body).then()
	ctx.body = {code:1}
})

router.get('/user',async(ctx,next)=>{
	ctx.body = await knex.table('users').select().then()
})


module.exports = router