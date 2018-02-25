const router = require('koa-router')();
const fs = require('fs');

router.post('/indexPushMessage', async (ctx, next) => {
    console.log(1);
    var postHtml = await readFile('indexPushMessage.json')
    console.log(postHtml);
    ctx.body = postHtml;
})

async function readFile(flename) {
    return new Promise((resolve,reject)=>{
        console.log('./postjson/' + flename);
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
