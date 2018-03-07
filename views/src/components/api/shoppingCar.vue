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
    <div class="settlementBox">
      <i id="allCkecked" class="checkBox iconfont icon-weigouxuan"></i>
      <div class="countBox">
        <span style="color: black;padd合计：ing-left: 10px">全选</span>
        <span class="countResult">

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
  .checkBox{
    display: inline-block;
    width: 38px;
    height: 38px;
    font-size: 36px;
  }
</style>
