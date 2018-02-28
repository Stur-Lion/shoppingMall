<template>
  <div class="bodyBox">
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
    <div id="topBac"></div>
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
    <div class="pushMessage">
      <div class="SelectedSpecialty" v-if="pushMessage!=''">

        <!--精選 SelectedSpecialty-->
        <img :src="'/static/pushmessage/'+pushMessage.SelectedSpecialty.boundary" class="boundary">
        <div class="SelectedSpecialtybanner pushBannerBox">
          <ul class="pushBanner">
            <li v-for="(item,index) in pushMessage.SelectedSpecialty.SelectedSpecialtyArr" :key="index">
              <img :src="'/static/pushmessage/'+item" alt="">
            </li>
          </ul>
        </div>

        <!--家电-->
        <img :src="'/static/pushmessage/'+pushMessage.HomeApplianceSales.boundary" class="boundary">
        <img :src="'/static/pushmessage/'+pushMessage.HomeApplianceSales.titleLogo" class="titleLogo">
        <div class="SelectedSpecialtybanner pushBannerBox">
          <ul class="pushBanner">
            <li v-for="(item,index) in pushMessage.HomeApplianceSales.HomeApplianceSalesArr" :key="index">
              <img :src="'/static/pushmessage/'+item.url" alt="">
              <p>{{item.product}}</p>
              <div>
                <span class="price">￥{{item.price}}</span>
                &nbsp;
                <del class="costPrice">{{item.costPrice}}</del></div>
            </li>
          </ul>
        </div>

        <!--时尚女装-->
        <img :src="'/static/pushmessage/'+pushMessage.fashionWomenClothes.boundary" class="boundary">
        <img :src="'/static/pushmessage/'+pushMessage.fashionWomenClothes.titleLogo" class="titleLogo">
        <div class="SelectedSpecialtybanner pushBannerBox">
          <ul class="pushBanner">
            <li v-for="(item,index) in pushMessage.fashionWomenClothes.HomeApplianceSalesArr" :key="index">
              <img :src="'/static/pushmessage/'+item.url" alt="">
              <p>{{item.product}}</p>
              <div>
                <span class="price">￥{{item.price}}</span>
                &nbsp;
                <del class="costPrice">{{item.costPrice}}</del></div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <BottomfixTab index='1'></BottomfixTab>
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
      ],
      pushMessage: ''
    }
  },
  components: {
    BottomfixTab
  },
  created () {
    var that = this
    this.axios.post('/indexPushMessage', {})
      .then(function (res) {
        that.pushMessage = res.data
      })
      .catch(function (error) {
        console.log(error);
      })
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll () {
      if (window.scrollY < 100) {
        $('#topBac').fadeOut()
      } else {
        $('#topBac').fadeIn()
      }
    }
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
    .header{
      height: 90px;
      background-color: rgba(0, 0, 0, 0);
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
  }
  #topBac{
    width: 100%;
    height: 90px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 50;
    background-color: rgba(251,55,67,0.8);
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
  .pushMessage{
    padding: 0 10px;
    .boundary{
      width: 100%;
      height: 100px;
    }
    .titleLogo{
      width: 100%;
      height: 210px;
      padding-bottom: 20px;
    }
    .pushBannerBox{
      width: 100%;
      min-height: 247px;
      overflow-x: auto;
      overflow-y: hidden;
      .pushBanner{
        width: auto;
        display: flex;
        justify-content:flex-start;
        li{
          min-width: 192px;
          margin-right: 24px;
          img{
            width: 100%;
          }
          p{
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
            padding: 20px 0 5px 0;
          }
          .price{
            color: #e73c3c;
          }
          .costPrice{
            color: #999;
          }
        }
      }
    }
  }
</style>
