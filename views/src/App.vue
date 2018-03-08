<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss" type="text/scss" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
}
  .bodyBox{
    padding-bottom: 100px;
    min-height: 100%;
    box-sizing: border-box;
  }
  .tabBox{
    padding-bottom: 100px;
    height: 100%;
    box-sizing: border-box;
  }
</style>
