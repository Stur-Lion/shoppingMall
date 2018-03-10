<!--底部导航-->
<template>
  <div id="fade" class="">
    <div class="model">

    </div>
  </div>
</template>

<script>
export default {
  name: 'nodel',
  data () {
    return {

    }
  },
  mounted () {
    var index = $('.fixTab').attr('index')
    $('.fixTab li').eq(index - 1).addClass('active').siblings('li').removeClass('active')
  },
  methods: {
    toLink (e) {
      var li = $(e.currentTarget)
      this.$router.push(li.attr('linkRouter'))
    }
  },
  props: ['index']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" type="text/scss" scoped>
.fixTab{
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  font-size: 0;
  background-color: rgb(254, 254, 254);
  padding: 10px 0 0 0;
  border-top: 1px solid rgba(188, 188, 188, 0.54);
  text-align: center;
  li{
    display: inline-block;
    width: 25%;
    font-size: 12px;
    &.active{
      color: red;
    }
    i{
      display: block;
      font-size: 45px;
    }
    p{
      line-height: 40px;
    }
  }
}
</style>
