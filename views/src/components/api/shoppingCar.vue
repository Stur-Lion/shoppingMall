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
      <mt-checklist>
      </mt-checklist>
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
          line-height: 50px;
          font-size: 32px;
        }
      }
    }
  }
</style>
