<!--后台管理首页-->
<template>
  <div style="height: 100%;">
    <div class="topFullColumn"></div>
    <div id="mainContent">
      <div style="width: 100%;height: 100%;">
        <el-row class="leftTab">
          <el-col :span="24">
            <el-menu
              default-active="2"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose"
              background-color="#f2f2f2"
              text-color="#000">
              <el-submenu index="1">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>账号管理</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="1-1" path='/backindex/backUser'>
                    后台用户
                  </el-menu-item>
                </el-menu-item-group>
                <el-submenu index="1-2">
                  <template slot="title">用户管理</template>
                  <el-menu-item index="1-2-1" path='/backindex/user'>用户列表</el-menu-item>
                </el-submenu>
              </el-submenu>
            </el-menu>
          </el-col>
        </el-row>
        <div class="rightMainCon">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import ElementUI from 'element-ui';
  import 'element-ui/lib/theme-chalk/index.css';
  Vue.use(ElementUI)
  export default {
    name: 'backindex',
    data () {
      return {}
    },
    methods: {
      handleOpen(key, keyPath) {

      },
      handleClose(key, keyPath) {

      }
    },
    mounted(){
      var that = this;
      $('.el-menu-item').on('click',function () {
        that.$router.push({path:$(this).attr('path')})
      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" type="text/scss" scoped>
  @function toMyPx($px){
    @return $px/0.72
  }
  .topFullColumn{
    height: toMyPx(60px);
    width: 100%;
    background: #212427;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
  }
  #mainContent{
    padding-top: toMyPx(60px);
    height: 100%;
    box-sizing: border-box !important;
    >div{
      position: relative;
      .leftTab{
        width: 250px;
        position: absolute;
        top: 0;
        left: 0;
        text-align: left;
        height: 100%;
        background: #fff;
        .el-menu-item.is-active{
          background-color: #e7e7e7 !important;
          position: relative;
          &:after{
            display: block;
            content: "";
            position: absolute !important;
            right: 0;
            top: 4px;
            border: 8px solid transparent;
            border-width: 14px 10px;
            top: 0px;
            border-right-color: #4574d0;
            border-width: 20px 10px;
          }
        }
      }
      .rightMainCon{
        width: 100%;
        height: 100%;
        padding-left: 250px;
        box-sizing: border-box;
        background-color: #f2f2f2;
      }
    }
  }
  .dataBox{
    padding: 20px 10px;
    box-sizing: border-box;
  }
</style>
