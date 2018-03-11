<!--底部导航-->
<template>
  <div id="fade" @click="backgroundClick($event)">
    <div class="model">
      <div id="modelHeader">
        <h4>确认</h4>
        <i class="iconfont icon-cha" @click="closeModel"></i>
      </div>
      <div id="modelBody">
        <slot name="modelContent"></slot>
      </div>
      <div id="modelfooter">
        <el-button @click="closeModel">取消</el-button>
        <el-button type="primary" class="btnPrimary">确认</el-button>
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
  },
  methods:{
    closeModel(){
      $('#fade').fadeOut();
      $('#fade .model').fadeOut();
    },
    backgroundClick(event){
      if(event.target == $('#fade')[0]){
        this.closeModel()
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" type="text/scss" scoped>
  #fade{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1000;
    background: rgba(0, 0, 0, 0.27);
    display: none;
    .model{
      display: none;
      margin: 150px auto;
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
        .modelForm{
          display: none;
        }
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
