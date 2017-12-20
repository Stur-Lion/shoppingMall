<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
      <router-link to="/">跳转hello</router-link>
      <router-link to="/text">跳转text</router-link>
      <router-link to="/duoge">跳转多个</router-link>
    </div>
    <router-view/>
    <router-view name="left"></router-view>
    <router-view name="right"></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
