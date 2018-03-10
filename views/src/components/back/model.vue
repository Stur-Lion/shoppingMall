<!--底部导航-->
<template>
  <div id="fade" class="">
    <div class="model">
      <div id="modelHeader">
        <h4>确认</h4>
        <i class="iconfont icon-cha"></i>
      </div>
      <div id="modelBody"></div>
      <div id="modelfooter">
        <el-button>取消</el-button>
        <el-button type="primary">确认</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'model',
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" type="text/scss" scoped>
  #fade{
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 1000;
    background: rgba(0, 0, 0, 0.27);
    .model{
      display: block;
      margin: 100px auto;
      background: #fff;
      width: 800px;
      border-radius: 5px;
      box-shadow: 0px 0px 10px 0 rgba(0,0,0,.5);
      #modelHeader{
        width: 100%;
        padding: 0 20px;
        box-sizing: border-box;
        line-height: 60px;
        position: relative;
        i{
          position: absolute;
          right: 10px;
          top: 0;
          cursor: pointer;
          width: 40px;
          height: 100%;
          text-align: center;
        }
      }
      #modelBody{
        padding: 30px 0;
        border-top: 1px solid #e5e5e5;
        border-bottom: 1px solid #e5e5e5;
      }
      #modelfooter{
        text-align: center;
        padding: 15px 0;
        button{
          margin: 0 20px;
        }
      }
    }
  }
</style>
