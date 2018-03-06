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
    <BottomfixTab index='3'></BottomfixTab>
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
      border-bottom: 1px solid #b7b6b1;
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
</style>
