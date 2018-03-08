<!--移动端layout-->
<template>
  <router-view/>
</template>

<script>
  import Vue from 'vue'
  import MintUI from 'mint-ui'
  import 'mint-ui/lib/style.css'
  import 'lib-flexible'
  Vue.use(MintUI)
  export default {
    name: 'api'
  }
</script>

<style lang="scss" type="text/scss" scoped>

</style>
