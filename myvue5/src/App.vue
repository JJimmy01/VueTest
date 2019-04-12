<template>
  <div id="app">
    <input type="button" @click="gchange" value="爷爷">
    <span>{{gmsg}}</span>
    <son></son>

    </div>
</template>

<script>
  import {mapGetters,mapActions} from 'vuex'
  import son from './son'
export default{
  name: 'app',
  computed:mapGetters(['gmsg']),
  methods:mapActions(['gchange']),
  components:{
    son
  }
}
</script>

<style>

</style>
