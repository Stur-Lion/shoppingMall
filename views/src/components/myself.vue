<template>
  <div class="bodyBox">
    <div class="headerFix">
      <div class="header">
        <div class="leftErCode">
          <i class="iconfont icon-fanhui"></i>
        </div>
        <div class="rightMessge">
          <i class="iconfont icon-shezhi"></i>
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
    <div class="aui-dri"></div>
    <!--tab-->
    <div class="myselfTab">
      <ul class="myselfTabBox">
        <li>
          <i class="" style="background-image: url('/static/myselftab/1.jpg')"></i>
          <p>邀请好友</p>
        </li>
        <li>
          <i class="" style="background-image: url('/static/myselftab/2.jpg')"></i>
          <p>签到领币</p>
        </li>
        <li>
          <i class="" style="background-image: url('/static/myselftab/3.jpg')"></i>
          <p>优惠券</p>
        </li>
        <li>
          <i class="" style="background-image: url('/static/myselftab/4.jpg')"></i>
          <p>我的拼团</p>
        </li>
        <li>
          <i class="" style="background-image: url('/static/myselftab/5.jpg')"></i>
          <p>商品推手</p>
        </li>
        <li>
          <i class="" style="background-image: url('/static/myselftab/6.jpg')"></i>
          <p>充值中心</p>
        </li>
        <li>
          <i class="" style="background-image: url('/static/myselftab/7.jpg')"></i>
          <p>帮助中心</p>
        </li>
        <li>
          <i class="" style="background-image: url('/static/myselftab/8.jpg')"></i>
          <p>我的问答</p>
        </li>
        <li>
          <i class="" style="background-image: url('/static/myselftab/9.jpg')"></i>
          <p>我的评价</p>
        </li>
        <li>
          <i class="" style="background-image: url('/static/myselftab/10.jpg')"></i>
          <p>我的分享</p>
        </li>
      </ul>
    </div>
    <!--maybeLike-->
    <div class="maybeLike">
      <ul v-if="dataArr!=''">
        <li v-for="(item , index) in dataArr" :key="index">
          <img :src="'/static/myselftab/'+item.img" alt="">
          <p>{{item.constructor}}</p>
          <div class="priceBox">
            <span class="price">￥{{item.price}}</span>
            <del class="costPrice">{{item.costPrice}}</del>
          </div>
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
      dataArr:'',
      titleLogo:""
    }
  },
  created () {
    var that = this
    this.axios.post('/maybeyoulike', {})
      .then(function (res) {
        that.dataArr = res.data.dataArr;
        that.titleLogo = res.data.titleLogo;
      })
      .catch(function (error) {
        console.log(error);
      })
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
    background-color: rgb(255, 91, 93);
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
      border-bottom: 1px solid #e2e2e2;
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
        padding: 15px 0;
        i{
          color: red;
          display: inline-block;
          width: 64px;
          height: 64px;
          font-size: 48px;
        }
        p{
          line-height: 50px;
        }
      }
    }
  }
  .aui-dri{
    height: 14px;
    background-color: #f0f2f5;
  }
  .myselfTab{
    .myselfTabBox{
      padding: 20px 0;
      font-size: 0;
      li{
        padding: 12px 0;
        width: 20%;
        display: inline-block;
        font-size: 24px;
        p{
          line-height: 42px;
        }
        i{
          background-size: 64px;
          display: inline-block;
          width: 64px;
          height: 64px;
        }
      }
    }
  }
  .maybeLike{
    padding: 0 8px;
    font-size: 0;
    ul{
      li{
        width: 50%;
        padding: 0 4px 10px 4px;
        box-sizing: border-box;
        display: inline-block;
        img{
          width: 100%;
          display: inline-block;
        }
        p{
          font-size: 28px;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          padding: 20px 0 5px 0;
        }
        .priceBox{
          padding-left: 20px;
          box-sizing: border-box;
          font-size: 28px;
          text-align: left;
          .price{
            color: #e73c3c;
            font-size: 32px;
            padding-left: 20px;
          }
          .costPrice{
            color: #999;
            padding-left: 20px;
          }
        }
      }
    }
  }
</style>
