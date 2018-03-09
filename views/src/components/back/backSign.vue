<!--后台登录-->
<template>
  <div style="height: 100%;">
    <div class="topFullColumn"></div>
    <div id="mainContent">
      <el-form ref="form" :model="form" label-width="80px" class="signForm">
        <el-form-item label="账号：">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="密码：">
          <el-input v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit($event)">登录</el-button>
          <a href="" id="forgetPassword">忘记密码</a>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import ElementUI from 'element-ui';
  import 'element-ui/lib/theme-chalk/index.css';
  import { mapState,mapMutations } from 'vuex';
  Vue.use(ElementUI)
  export default {
    name: 'backSign',
    data() {
      return {
        form: {
          name: '',
          password: ''
        }
      }
    },
    methods: {
      onSubmit(e) {
        console.log(this);
        var that = this;
        this.axios.post('/signBack',
          {
            name:that.form.name,
            password:that.form.password
          })
          .then(function (res) {
            console.log(res.data);
            if(res.data.code==1){
              that.changeSession('1')
              that.$router.push({path:'/backindex'})
            }
          })
          .catch(function (error) {
            console.log(error);
          })
      },
      ...mapMutations(['mapState','changeSession'])
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
    .signForm{
      box-shadow: 0 0 10px 0px rgba(155,143,143,0.6);
      -webkit-box-shadow: 0 0 10px 0px rgba(155,143,143,0.6);
      padding: 60px 130px;
      width: 800px;
      margin: 80px auto;
    }
  }
  #forgetPassword{
    padding: 2px 15px;
    color: #5c9aff;
  }
</style>
