<template>
    <div id="box">
      <input type="button" @click="schange" value="儿子">
      <span>{{smsg}}</span>

    </div>
</template>

<script>
  import {mapGetters,mapActions} from 'vuex'
    export default {
        name: "son",
      computed:mapGetters(['smsg']),
      methods:mapActions(['schange'])
    }
</script>

<style scoped>

</style>
