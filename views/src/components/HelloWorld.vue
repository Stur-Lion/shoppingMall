<template>
  <div>
    <div class="headerFix">
      <div class="header">
        <div class="leftErCode">
          <i class="iconfont icon-saoma"></i>
        </div>
        <div class="centerSerch">
          <input type="text">
        </div>
        <div class="rightMessge">
          <i class="iconfont icon-62"></i>
        </div>
      </div>
    </div>
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
<style scoped lang="scss">
  .headerFix{
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
  }
  .header{
    height: 90px;
    background-color: rgba(255, 0, 0, 0.41);
    position: relative;
    >div{
      display:inline-block;
      &.leftErCode{
        position: absolute;
        left: 20px;
        top: 20px;
      }
      &.rightMessge{
        position: absolute;
        right: 20px;
        top: 18px;
      }
      i{
        width: 40px;
        height: 40px;
        display: inline-block;
        color: white;
        font-size: 44px;
      }
      &.centerSerch{
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        padding: 18px 80px;
        input{
          display: inline-block;
          -moz-border-radius: 40px;
          -webkit-border-radius: 40px;
          border-radius: 40px;
          background-color: white;
          width: 100%;
          height: 54px;
          padding-left: 40px;
          box-sizing: border-box
        }
      }
    }
  }
  .swiperBox {
    height: 375px;
    img {
      display: inline-block;
      width: 100%;
      height: 100%;
    }
  }
</style>
