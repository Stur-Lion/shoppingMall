const router = require('koa-router')();
const fs = require('fs');

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

router.post('/indexPushMessage', async (ctx, next) => {
    var postHtml = await readFile('indexPushMessage.json')
    ctx.body = postHtml;
})
router.post('/classification', async (ctx, next) => {
    var postHtml = await readFile('classification.json')
    ctx.body = postHtml;
})
router.post('/maybeyoulike', async (ctx, next) => {
    var postHtml = await readFile('maybeyoulike.json')
    ctx.body = postHtml;
})

async function readFile(flename) {
    return new Promise((resolve,reject)=>{
        fs.readFile('./postjson/'+flename, function(err, data){
            if(err){
                reject(err)
            }else{
                resolve(data.toString())
            }
        });
    })
}



module.exports = router
