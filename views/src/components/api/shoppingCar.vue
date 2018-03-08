<!--移动端 / 购物车-->
<template>
  <div class="bodyBox">
    <div class="headerFix">
      <div class="header">
        <div class="leftErCode" @click="backHistory()">
          <i class="iconfont icon-fanhui"></i>
        </div>
        <div class="centerSerch">
          购物车(6)
        </div>
        <div class="rightMessge">
          <i class="iconfont icon-xinxi3"></i>
        </div>
      </div>
    </div>
    <div class="contentBox">
      <ul>
        <li>
          <div>
            <i class="checkBox iconfont icon-weigouxuan"></i>
            <img src="/static/shoppingcar/sf-11.jpg" alt="">
            <div class="witter">
              <h4>【黑卡96折】Apple 苹果 iPhone 7（A1660）移动联通电信4G手机 国内行货</h4>
              <div class="configuration">
                <span>重量:3.3kg</span><span>颜色:标配版</span><span>版本:5.7英寸</span>
              </div>
              <div class="bottomChooseBox">
                <span class="price">￥ 100.00</span>
                <span class="countBox">
                  <a href="" class="reduceCount iconfont icon-jian"></a><span class="count">1</span><a href="" class="addCount iconfont icon-jia"></a>
                </span>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div>
            <i class="checkBox iconfont icon-weigouxuan"></i>
            <img src="/static/shoppingcar/sf-11.jpg" alt="">
            <div class="witter">
              <h4>【黑卡96折】Apple 苹果 iPhone 7（A1660）移动联通电信4G手机 国内行货</h4>
              <div class="configuration">
                <span>重量:3.3kg</span><span>颜色:标配版</span><span>版本:5.7英寸</span>
              </div>
              <div class="bottomChooseBox">
                <span class="price">￥ 100.00</span>
                <span class="countBox">
                  <a href="" class="reduceCount iconfont icon-jian"></a><span class="count">1</span><a href="" class="addCount iconfont icon-jia"></a>
                </span>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div>
            <i class="checkBox iconfont icon-weigouxuan"></i>
            <img src="/static/shoppingcar/sf-11.jpg" alt="">
            <div class="witter">
              <h4>【黑卡96折】Apple 苹果 iPhone 7（A1660）移动联通电信4G手机 国内行货</h4>
              <div class="configuration">
                <span>重量:3.3kg</span><span>颜色:标配版</span><span>版本:5.7英寸</span>
              </div>
              <div class="bottomChooseBox">
                <span class="price">￥ 100.00</span>
                <span class="countBox">
                  <a href="" class="reduceCount iconfont icon-jian"></a><span class="count">1</span><a href="" class="addCount iconfont icon-jia"></a>
                </span>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div>
            <i class="checkBox iconfont icon-weigouxuan"></i>
            <img src="/static/shoppingcar/sf-11.jpg" alt="">
            <div class="witter">
              <h4>【黑卡96折】Apple 苹果 iPhone 7（A1660）移动联通电信4G手机 国内行货</h4>
              <div class="configuration">
                <span>重量:3.3kg</span><span>颜色:标配版</span><span>版本:5.7英寸</span>
              </div>
              <div class="bottomChooseBox">
                <span class="price">￥ 100.00</span>
                <span class="countBox">
                  <a href="" class="reduceCount iconfont icon-jian"></a><span class="count">1</span><a href="" class="addCount iconfont icon-jia"></a>
                </span>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div>
            <i class="checkBox iconfont icon-weigouxuan"></i>
            <img src="/static/shoppingcar/sf-11.jpg" alt="">
            <div class="witter">
              <h4>【黑卡96折】Apple 苹果 iPhone 7（A1660）移动联通电信4G手机 国内行货</h4>
              <div class="configuration">
                <span>重量:3.3kg</span><span>颜色:标配版</span><span>版本:5.7英寸</span>
              </div>
              <div class="bottomChooseBox">
                <span class="price">￥ 100.00</span>
                <span class="countBox">
                  <a href="" class="reduceCount iconfont icon-jian"></a><span class="count">1</span><a href="" class="addCount iconfont icon-jia"></a>
                </span>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div>
            <i class="checkBox iconfont icon-weigouxuan"></i>
            <img src="/static/shoppingcar/sf-11.jpg" alt="">
            <div class="witter">
              <h4>【黑卡96折】Apple 苹果 iPhone 7（A1660）移动联通电信4G手机 国内行货</h4>
              <div class="configuration">
                <span>重量:3.3kg</span><span>颜色:标配版</span><span>版本:5.7英寸</span>
              </div>
              <div class="bottomChooseBox">
                <span class="price">￥ 100.00</span>
                <span class="countBox">
                  <a href="" class="reduceCount iconfont icon-jian"></a><span class="count">1</span><a href="" class="addCount iconfont icon-jia"></a>
                </span>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="settlementBox">
      <i id="allCkecked" class="checkBox iconfont icon-weigouxuan"></i>
      <div class="countBox">
        <span style="color: black;padding-left: 10px">全选</span>
        <span class="countResult">
          合计：
          <i>0.00</i>
        </span>
      </div>
      <div class="goSettlement">
        去结算
      </div>
    </div>
  </div>
</template>

<script>
import BottomfixTab from '@/components/api/BottomfixTab'
export default {
  name: 'index',
  data () {
    return {

    }
  },
  components: {
    BottomfixTab
  },
  methods:{
    backHistory:function () {
      this.$router.go(-1)
    }
  },
  mounted:function(){
    $('.checkBox').on('click',function () {
      if($(this).hasClass('icon-weigouxuan')){
        $(this).removeClass('icon-weigouxuan').addClass('icon-yigouxuan')
      }else if($(this).hasClass('icon-yigouxuan')){
        $(this).removeClass('icon-yigouxuan').addClass('icon-weigouxuan')
      }
    })
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
      background-color: rgb(255, 255, 255);
      position: relative;
      border-bottom: 1px solid #d2d1cc;
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
          color: #9b9b9b;
          font-size: 44px;
        }
        &.centerSerch{
          box-sizing: border-box;
          width: 100%;
          height: 100%;
          padding: 18px 80px;
          line-height: 50px;
          font-size: 32px;
          text-align: center;
        }
      }
    }
  }
  .settlementBox{
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100px;
    text-align: left;
    padding-left: 20px;
    box-sizing: border-box;
    line-height: 100px;
    box-shadow: 0 0 10PX 0PX rgba(155,143,143,0.6);
    -webkit-box-shadow: 0 0 10PX 0PX rgba(155,143,143,0.6);
    background: #fff;
    font-size: 28px;
    .countBox{
      color: #da4644;
      display: inline-block;
      .countResult{
        font-size: 34px;
        padding-left: 10px;
        font-weight: bold;
      }
    }
    .goSettlement{
      position: absolute;
      top: 0;
      right: 0;
      width: 270px;
      height: 100px;
      text-align: center;
      line-height: 100px;
      background: #FF5E53;
      color: white;
      font-size: 32px;
    }
  }
  .contentBox{
    padding-top: 100px;
    background: #f0f2f5;
    li{
      padding: 30px;
      text-align: left;
      margin-bottom: 20px;
      background: #fff;
      >div{
        position: relative;
      }
      i{
        position: absolute;
        left: 0;
        top: 45%;
      }
      img{
        display: inline-block;
        position: absolute;
        left: 60px;
        top: 0;
        width: 160px;
        height: 160px;
      }
      .witter{
        display: inline-block;
        width: 100%;
        padding: 10px 10px;
        padding-left: 260px;
        box-sizing: border-box;
        font-size: 0;
        h4{
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          font-size: 24px;
        }
        .configuration {
          color: #81838e;
          span{
            font-size: 24px;
            line-height: 40px;
          }
        }
        .bottomChooseBox{
          position: relative;
          .price{
            color: #ff0000;
            font-size: 32px;
            line-height: 50px;
          }
          .countBox{
            position: absolute;
            top: 10px;
            right: 0;
            .count{
              border-top: 1px solid #ccc;
              border-bottom: 1px solid #ccc;
              font-size: 24px;
              padding: 7px 12px;
              float: left;
            }
            .iconfont{
              padding: 5px;
              border: 1px solid #ccc;
              font-size: 30px;
              float: left;
            }
          }
        }
      }
    }
  }
  .checkBox{
    display: inline-block;
    width: 38px;
    height: 38px;
    font-size: 36px;
  }
</style>
