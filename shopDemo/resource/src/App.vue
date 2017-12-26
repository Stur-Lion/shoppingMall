<template>
  <div>
    <div class="carouselbox">
      <mt-swipe :auto="4000">
        <mt-swipe-item>1</mt-swipe-item>
        <mt-swipe-item>2</mt-swipe-item>
        <mt-swipe-item>3</mt-swipe-item>
      </mt-swipe>
    </div>
  </div>
</template>

<script>
  import $ from 'jquery'
  $(function () {
    console.log(123)
  })
  export default{

  }
</script>

<style>
  .carouselbox{
    height: 180px;
    background: #e5e5e5;
  }
</style>
</style>
