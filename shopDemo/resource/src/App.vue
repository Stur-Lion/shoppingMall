<template>
  <div>
    <div class="carouselbox">
      <mt-swipe :auto="4000">
        <mt-swipe-item v-for="item in imgList" :key="item.orderId">
          <img src="" class="carouselImg">
        </mt-swipe-item>
      </mt-swipe>
    </div>
  </div>
</template>

<script>
  export default{
    data: function () {
      return {
        imgList: []
      }
    },
    created: function () {
      console.log(1)
      console.log(this)
      this.carousel()
    },
    methods: {
      carousel: function () {
        var that = this
        this.$http.post('/frontApi', {})
          .then(res => {
            var carousellist = res.data.carousellist
            console.log(carousellist)
            var imgList = []
            for (var i = 0; i < carousellist.length; i++) {
              imgList.push({
                url: carousellist[i].avtor,
                evelId: carousellist[i].evelId,
                orderId: carousellist[i].orderId
              })
            }
            that.imgList = imgList
          })
          .catch(e => console.log(e))
      }
    }
  }
</script>

<style>
  .carouselbox{
    height: 180px;
    background: #e5e5e5;
  }
  .carouselImg{
    display: block;
    height: 180px;
    width: 100%;
  }
</style>
</style>
