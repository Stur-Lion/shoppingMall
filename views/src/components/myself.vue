<template>
  <div class="bodyBox">
    <div class="headerFix">
      <div class="header">
        <div class="leftErCode">
          <i class="iconfont icon-fanhui"></i>
        </div>
        <div class="rightMessge">
          <i class="iconfont icon-62"></i>
        </div>
      </div>
    </div>
    <div id="topBac"></div>
    <!--个人信息-->
    <div class="personMess">
      <div class="cnterBlackBox">
        <div class="topMess">
          <img src="/static/myselftab/head-2.jpg" class="headPortrait">
          <div class="selfName">小茗同学</div>
          <ul class="selfOtherMess">
            <li>
              <p>100</p>
              <p>收藏</p>
            </li>
            <li>
              <p>100</p>
              <p>关注</p>
            </li>
            <li>
              <p>100</p>
              <p>足迹</p>
            </li>
            <li>
              <p>100</p>
              <p>分享</p>
            </li>
          </ul>
        </div>
        <div class="bottomBlackVip clearfix">
          <i></i>
          <span>plus会员</span>
          <div>开通享8大权益</div>
        </div>
      </div>
    </div>
    <!--我的订单-->
    <div class="myselfOrder">
      <div class="allOrder clearfix">
        <span>我的订单</span>
        <span>查看全部 <i class="iconfont icon-qianjin"></i></span>
      </div>
      <ul class="orderMess">
        <li>
          <i class="iconfont icon-daifukuan"></i>
          <p>待付款</p>
        </li>
        <li>
          <i class="iconfont icon-daifahuo"></i>
          <p>待发货</p>
        </li>
        <li>
          <i class="iconfont icon-tubiaolunkuo-"></i>
          <p>待收货</p>
        </li>
        <li>
          <i class="iconfont icon-daipingjia01"></i>
          <p>待评价</p>
        </li>
        <li>
          <i class="iconfont icon-tuihuobaozhang"></i>
          <p>退货退款</p>
        </li>
      </ul>
    </div>
    <BottomfixTab index='4'></BottomfixTab>
  </div>
</template>

<script>
import BottomfixTab from '@/components/BottomfixTab'
export default {
  name: 'index',
  data () {
    return {
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll () {
      if (window.scrollY < 100) {
        $('#topBac').fadeOut();
      } else {
        $('#topBac').fadeIn();
      }
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
    display: none;
    top: 0;
    left: 0;
    z-index: 50;
    background-color: rgba(251,55,67,0.8);
  }
  .personMess{
    height: 290px;
    background: linear-gradient(to right,#ff5e3e 0,#ff1679 100%);
    padding-top: 100px;
    .cnterBlackBox{
      background-color: #282828;
      border-radius: 15px;
      width: 92%;
      height: 90%;
      margin: 0 auto;
      .topMess{
        height: 75%;
        background-color: white;
        border-radius: 10px;
        padding: 40px;
        box-sizing: border-box;
        .headPortrait{
          float: left;
          width: 120px;
          height: 120px;
        }
        .selfName{
          padding-left: 150px;
          text-align: left;
          font-size: 32px;
          font-weight: bold;
        }
        .selfOtherMess{
          padding-left: 10px;
          padding-top: 20px;
          display: flex;
          justify-content: space-around;
          font-weight: 600;
        }
      }
      .bottomBlackVip{
        color: #d5c9ab;
        padding: 15px 40px;
        i{
          background: url("/static/myselftab/vip.jpg") no-repeat;
          background-size: 40px 40px;
          display: inline-block;
          float: left;
          width: 40px;
          height: 40px;
        }
        span{
          display: inline-block;
          float: left;
          font-size: 30px;
          padding-left: 6px;
        }
        div{
          float: right;
        }
      }
    }
  }
  .myselfOrder{
    .allOrder{
      height: 90px;
      border-bottom: 1px solid #ccc;
      padding: 30px;
      box-sizing: border-box;
      span:nth-child(1){
        float: left;
        font-weight: 700;
        font-size: 30px;
      }
      span:nth-child(2){
        float: right;
        i{
          display: inline-block;
          width: 20px;
          height: 20px;
          font-size: 24px;
        }
      }
    }
    .orderMess{
      padding: 20px 0;
      display: flex;
      justify-content: space-around;
      li{
        i{
          color: red;
          display: inline-block;
          width: 64px;
          height: 64px;
          font-size: 40px;
        }
      }
    }
  }
</style>
