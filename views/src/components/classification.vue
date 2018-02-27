<template>
  <div class="tabBox">
    <div class="headerFix">
      <div class="header">
        <div class="leftErCode">
          <i class="iconfont icon-fanhui"></i>
        </div>
        <div class="centerSerch">
          <span class="iconfont icon-sousuo sousuo"></span>
          <input type="text" placeholder="iphone8你值得拥有">
        </div>
        <div class="rightMessge">
          <i class="iconfont icon-xinxi3"></i>
        </div>
      </div>
    </div>
    <div class="scrollBox" v-if="classifiData!=''">
      <div class="leftTab">
        <ul>
          <li v-for="(item,index) in classifiData.data" :key="index" :class="index == 0?'active':''" @click="toLi($event)">
            {{item.name}}
          </li>
        </ul>
      </div>
      <div class="rightCon">
        <ul>
          <li v-for="(item,index) in classifiData.data" :key="index">
            <img :src="'/static/classifi/'+item.titleLogo" alt="">
            <p>{{item.name}}</p>
            <ul>
              <li></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <BottomfixTab index='2'></BottomfixTab>
  </div>
</template>

<script>
import BottomfixTab from '@/components/BottomfixTab'
export default {
  name: 'index',
  data () {
    return {
      classifiData: ''
    }
  },
  methods: {
    toLi (e) {
      $(e.currentTarget).addClass('active').siblings('li').removeClass('active')
    }
  },
  created () {
    var that = this
    this.axios.post('/classification', {})
      .then(function (res) {
        console.log(res.data)
        that.classifiData = res.data
      })
      .catch(function (error) {
        console.log(error)
      })
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
      border-bottom: 1px solid rgba(000, 000, 000, 0.1);
      box-sizing: border-box;
      >div{
        display:inline-block;
        &.leftErCode{
          position: absolute;
          left: 20px;
          top: 20px;
          color: rgba(000, 000, 000, 0.1);
        }
        &.rightMessge{
          position: absolute;
          right: 20px;
          top: 18px;
          color: rgba(000, 000, 000, 0.1);
        }
        i{
          width: 40px;
          height: 40px;
          display: inline-block;
          font-size: 44px;
        }
        &.centerSerch{
          box-sizing: border-box;
          width: 100%;
          height: 100%;
          padding: 18px 80px;
          position: relative;
          .sousuo{
            position: absolute;
            top: 26px;
            left: 120px;
            font-size: 34px;
          }
          input{
            background-color: rgba(000, 000, 000, 0.1);
            display: inline-block;
            -moz-border-radius: 40px;
            -webkit-border-radius: 40px;
            border-radius: 40px;
            width: 100%;
            height: 54px;
            padding-left: 90px;
            box-sizing: border-box
          }
        }
      }
    }
  }
  .scrollBox{
    padding-top: 90px;
    height: 100%;
    box-sizing: border-box;
    .leftTab{
      float: left;
      width: 145px;
      background-color: #f2f4f5;
      min-height: 100%;
      li{
        height: 96px;
        line-height: 96px;
        &.active{
          background-color: white;
          border-left: 4px solid red;
        }
      }
    }
    .rightCon{
      display: inline-block;
      float: left;
      width: 604px;
      padding: 10px;
      box-sizing: border-box;
      li{
        width: 100%;
        >img{
          width: 100%;
          display: inline-block;
        }
        >p{
          text-align: left;
          padding-left: 20px;
          box-sizing: border-box;
        }
      }
    }
  }
</style>
