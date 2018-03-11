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
  }
}
