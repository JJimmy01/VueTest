<template>
  <div id="app">
    <Tab :bannerNode="banner"></Tab>
  </div>
</template>

<script>
  import Tab from './banner'

  export default {
    name: 'app',
    data() {
      return {
        banner:{
          image: ['img/1.jpg', 'img/2.jpg', 'img/3.jpg', 'img/4.jpg', 'img/5.jpg', 'img/6.jpg'],
          msg: ['图片1', '图片2', '图片3', '图片4', '图片5', '图片6'],
          index: 0,
          scope: 1
        }
      }
    },
    components:{
      Tab
    }
  }
</script>

<style>
</style>
