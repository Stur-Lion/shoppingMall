<template>
  <div class="swiperBox">
    <mt-swipe :auto="2000" class="swiper">
      <mt-swipe-item>
        <img src="../assets/news-banner1.jpg" alt="">
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../assets/news-banner2.jpg" alt="">
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../assets/news-banner3.jpg" alt="">
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .swiperBox{
    height: 300px;
  }
  .swiper img{
    display: inline-block;
    width: 100%;
    height: 100%;
  }
</style>
