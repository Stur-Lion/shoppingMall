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
          <img src="/static/banner/news-banner1.jpg" alt="">
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="/static/banner/news-banner2.jpg" alt="">
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="/static/banner/news-banner3.jpg" alt="">
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="tabBox">
      <ul>
        <li v-for="(item , index) in tabData" :key="index">
          <img :src="'/static/tablogo/'+item.url" :alt="item.name">
          <p>{{item.name}}</p>
        </li>
      </ul>
    </div>
    <BottomfixTab></BottomfixTab>
  </div>
</template>

<script>
import BottomfixTab from '@/components/BottomfixTab'
export default {
  name: 'index',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      defaultClass: 'iconfont',
      tabData: [
        {
          name: '每日签到',
          url: 'qiandao.png'
        },
        {
          name: '限时抢购',
          url: 'xianshiqianggou.png'
        },
        {
          name: '会员专享',
          url: 'huiyuan.png'
        },
        {
          name: '好货拼团',
          url: 'haohuo.png'
        },
        {
          name: '分享领券',
          url: 'fenxiang.png'
        },
        {
          name: '手机充值',
          url: 'shoujichongzhi.png'
        },
        {
          name: '金融理财',
          url: 'jinronglicai.png'
        },
        {
          name: '电器商城',
          url: 'dianqi.png'
        },
        {
          name: '萌宝超市',
          url: 'mengbaochaoshi.png'
        },
        {
          name: '个人中心',
          url: 'gerenzhongxin.png'
        }
      ]
    }
  },
  components: {
    BottomfixTab
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" type="text/scss" scoped>
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
  .tabBox{
    padding: 20px 10px;
    ul{
      li{
        display: inline-block;
        width: 20%;
        padding-top: 20px;
        img{
          display: inline-block;
          width: 40%;
        }
        p{
          line-height: 60px;
        }
      }
    }
  }
</style>
