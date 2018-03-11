<!--管理员列表-->
<template>
  <div class="dataBox">
    <div class="whiteBac">
      <div class="operationGrounp">
        <el-button type="primary" @click="addBackuser">+ 添加</el-button>
      </div>
      <template>
        <el-table
          :data="tableData"
          stripe
          style="width: 100%">
          <el-table-column
            prop="serial"
            label="序号"
            min-width="5%">
          </el-table-column>
          <el-table-column
            prop="name"
            label="用户名"
            min-width="15%">
          </el-table-column>
          <el-table-column
            prop="accountNumber"
            label="账号"
            min-width="15%">
          </el-table-column>
          <el-table-column
            prop="time"
            label="注册时间"
            min-width="20%">
          </el-table-column>
          <el-table-column label="操作" min-width="15%">
            <template slot-scope="scope">
              <el-button size="mini">修改密码</el-button>
              <el-button size="mini" type="danger">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </template>
    </div>
    <model>
      <div slot="modelContent">
        <el-form ref="form" :model="form" label-width="80px" class="modelForm" id="addBackuser">
          <el-form-item label="邮箱：">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="密码：">
            <el-input v-model="form.password"></el-input>
          </el-form-item>
        </el-form>
      </div>
    </model>
  </div>
</template>

<script>
  import store from '@/vuex/store';
  import model from './model';
  export default {
    name: 'backUser',
    data () {
      return {
        tableData: [{
          serial : 1,
          name: '管理员',
          accountNumber: 'admin@shop.com',
          time: '2018-03-09 09:51'
        }],
        form: {
          name: '',
          password: ''
        }
      }
    },
    methods:{
      addBackuser(){
        var that = this;
        this.common.showModel('#addBackuser','添加');
        $('.btnPrimary').off('click').on('click',function () {
          if(that.form.name==''||that.form.password==''){
            return
          }
          that.axios.post('/addBackuser', {
            name: that.form.name,
            password: that.form.password,
            time:that.common.getTime()
          })
            .then(function (res) {
              console.log(res.data);
            })
            .catch(function (error) {
              console.log(error);
            })
        })
      }
    },
    components:{
      model
    },
    store
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" type="text/scss" scoped>

</style>
