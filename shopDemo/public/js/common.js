/* 打开盒子 */
function showModel(content,title){
    $(content).modal('show')
    $(content).find('.modal-title').html(title)
}

/* 关闭弹出框 */
function closeModel(content){
    $(content).modal('hide')
}

/* ajax */
function ajaxrequest(url,data,success,error,before,complete){
    $.ajax({
        url:url,
        dataType:'JSON',
        type:'POST',
        data:data,
        beforeSend:function (res) {
            if(before &&typeof before==="function"){
                before(res)
            }
        },
        complete:function (res) {
            if(complete&&typeof complete==="function"){
                complete(res,$self)
            }
        },
        success: function(res) {
            if(success &&typeof success==="function"){
                if(res.retcode==1){
                    success(res)
                }else{
                    alert(res.info[0])
                }
            }
        },
        error: function(res) {
            if(error &&typeof error==="function"){
                error(res)
            }
        }
    })
}
