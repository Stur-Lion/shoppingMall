<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <router-link to="/text/admin">跳转admin</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'texts',
  created () {
    this.getMovie()
  },
  data () {
    return {
      msg: 'text'
    }
  },
  methods: {
    getMovie () {
      console.log(1)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
