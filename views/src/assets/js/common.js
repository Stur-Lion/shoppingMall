export default {
  showModel (id,title){
    $('#fade').fadeIn(200,function () {
      $('#fade .model').fadeIn(200)
      $(id).fadeIn(200).siblings('.modelForm').fadeOut(200);
      if(title && title !=''){
        $('#fade #modelHeader h4').text(title)
      }else {
        $('#fade #modelHeader h4').text('确认')
      }
    })
  },
  getTime () {
    var format = "yyyy-MM-dd hh:mm:ss",that = new Date();
    var args = {
      "M+": that.getMonth() + 1,
      "d+": that.getDate(),
      "h+": that.getHours(),
      "m+": that.getMinutes(),
      "s+": that.getSeconds(),
      "q+": Math.floor((that.getMonth() + 3) / 3),  //quarter
      "S": that.getMilliseconds()
    };
    if (/(y+)/.test(format))
      format = format.replace(RegExp.$1, (that.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var i in args) {
      var n = args[i];
      if (new RegExp("(" + i + ")").test(format))
        format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? n : ("00" + n).substr(("" + n).length));
    }
    return format;
  }
}
