<template>
  <div class="bodyBox">
    1
    <BottomfixTab index='2'></BottomfixTab>
  </div>
</template>

<script>
import BottomfixTab from '@/components/BottomfixTab'
export default {
  name: 'index',
  data () {
    return {

    }
  },
  created () {
    this.axios.post('/classification', {})
      .then(function (res) {
        console.log(res.data)
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

</style>
