/* 打开盒子 */
function showModel(title,content,sureCallback){
    layer.open({
        title:title,
        content: content,
        area:['600px','400px'],
        move:false,
        fix:true
        ,btn: ['按钮一', '按钮二']
        ,yes: function(index, layero){
            if(sureCallback&&typeof sureCallback=='function'){
                sureCallback()
            }
        }
        ,btn2: function(index, layero){

        }
        ,cancel: function(){

        }
    });
}

/* 关闭弹出框 */
function closeModel(){
    layer.closeAll()
}
