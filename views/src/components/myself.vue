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
          color: white;
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
</style>
