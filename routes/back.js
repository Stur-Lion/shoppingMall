const router = require('koa-router')();
const multer = require('koa-multer');
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
    backUserSchema.addOne({
        account:query.name,
        password:query.password,
        time:query.time,
        level:1,
    }).then(function (res) {
        console.log(res);
        return backUserSchema.getList(0)
    }).then(function (data) {
        console.log(data);
        ctx.body = {
            info:['添加成功'],
            code:1,
            data:{}
        }
    })
})





//文件上传
//加载配置
const upload = multer({ dest: 'uploads/' });
/*上传照片*/
router.post('/uploadFile', upload.single('avatar'), async (ctx ,next) =>{
    console.log('1111111111111');
    console.log(ctx.req.file.filename);
    ctx.body = {
        filename: ctx.req.file.filename//返回文件名
    }
})

module.exports = router
