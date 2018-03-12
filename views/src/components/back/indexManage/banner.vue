<!--用户列表-->
<template>
  <div class="dataBox">
    <div class="whiteBac">
      <div class="operationGroup">
        <el-button type="primary" @click="addBanner">+ 添加</el-button>
      </div>
      <template>
        <el-table
          :data="tableData"
          stripe
          style="width: 100%">
          <el-table-column
            prop="number"
            label="序号"
            width="180">
          </el-table-column>
          <el-table-column
            prop="logo"
            label="图片"
            width="180">
          </el-table-column>
          <el-table-column
            prop="url"
            label="链接">
          </el-table-column>
          <el-table-column
            prop="doit"
            label="操作">
          </el-table-column>
        </el-table>
      </template>
      <model>
        <div slot="modelContent">
          <el-form ref="form" :model="form" label-width="80px" class="modelForm" id="addBanner">
            <el-form-item label="标题：">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="上传图片：">
              <input type="file" value="" name="file" id="file"  @change='onUpload'>
            </el-form-item>
          </el-form>
        </div>
      </model>
    </div>
  </div>
</template>

<script>
  import model from './../model';
  export default {
    name: 'banner',
    data () {
      return {
        tableData: [{
          number: '2016-05-02',
          logo: 'user',
          url: '上海市普陀区金沙江路 1518 弄',
          doit: '上海市普陀区金沙江路 1518 弄'
        }],
        form: {
          name: ''
        }
      }
    },
    methods: {
      addBanner(){
        var that = this;
        this.common.showModel('#addBanner','添加');
      },
      onUpload(e){
        var formData = new FormData();
        formData.append('file', e.target.files[0]);
        formData.append('type', 'test');
        $.ajax({
          url: '/uploadFile',
          type: 'POST',
          dataType: 'json',
          cache: false,
          data: formData,
          processData: false,
          contentType: false,
          success(res){
            console.log(res);
          }
        })
      }
    },
    components:{
      model
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" type="text/scss" scoped>

</style>
