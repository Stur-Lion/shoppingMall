const router = require('koa-router')();
const backUserSchema = require('../model/backUserSchema');

/*登录*/
router.post('/signBack', async (ctx, next) => {
    console.log(ctx.request.body);
    var parseObj = ctx.request.body
    if(parseObj.name=='lion'&&parseObj.password=='123123'){
        ctx.body = {
            info:['登陆成功'],
            code:1,
            data:{session:'1'}};
        ctx.session = '1'
    }else {
        ctx.body = {info:['登陆失败'],code:0,data:{}};
    }

})

/*添加后台管理员*/
router.post('/addBackuser', async (ctx ,next) =>{
    var query = ctx.request.body;
    console.log(query);
    await backUserSchema.getUserInfo({
        account:query.name,
    })
    await backUserSchema.addOne({
        account:query.name,
        password:query.password,
        time:query.time,
        level:1,
    })
    console.log('添加');
    ctx.body = {
        info:['添加成功'],
        code:1,
        data:{}
    }
})

module.exports = router
