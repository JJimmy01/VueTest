<template>
    <div class="outNode">
      <div class="topNode">
        <div v-if="image.length<4?false:true" class="left" @mousedown.prevent @click="leftCl">左</div>
        <div v-if="image.length<4?false:true" class="right" @mousedown.prevent @click="rightCl">右</div>
        <div class="moveDiv">
          <ul :style="{width:image.length*800+'px',left:-800*index+'px'}">
            <li v-for="i in image">
              <img :src="i" alt="" :style='{transform:"scale("+scope+")"}' v-drag="1">
            </li>

          </ul>
        </div>
        <div class="textDiv">
          <span class="text">{{msg[index]}}</span>
          <div class="fdj">
            <span @click="big" @mousedown.prevent>大</span>
            <span @click="small" @mousedown.prevent>小</span>
          </div>

        </div>


      </div>
      <div class="bottomNode">
        <div class="left" @click="leftCl">左</div>
        <div class="right" @click="rightCl">右</div>
        <ol :style='{width:image.length*200+"px",left:index>=4?(index-3)*-200+"px":0}'>
          <li v-for="(i,needIndex) in image" :class="index==needIndex?'active':''" @click="index=needIndex">
            <img :src="i">
          </li>
        </ol>


      </div>

    </div>
</template>

<script>
  import Vue from 'vue'

  Vue.directive('drag',(el,val)=>{
    //console.log(el,val)
    el.onmousedown = function(e){
      var ev = e || event;
      var l = ev.clientX - el.offsetLeft;
      var t = ev.clientY - el.offsetTop;
      document.onmousemove = function(e){
        var ev = e || event;
        el.style.left = ev.clientX - l + 'px';
        el.style.top = ev.clientY - t + 'px';
      };
      document.onmouseup = function(){
        this.onmousemove = this.onmouseup = null;
      }
      return false;
    }
  })
  export default {
    name: 'app',
    props:['bannerNode'],
    data() {
      return {
        image: [''],
        msg: [],
        index: 0,
        scope:''
      }
    },
    mounted(){
      this.image = this.bannerNode.image,
        this.msg = this.bannerNode.msg,
        this.index = this.bannerNode.index
      this.scope = this.bannerNode.scope
    },
    methods:{
      leftCl(){
        this.index--;
        this.index==-1 && (this.index=this.image.length-1);
        this.scope=1;
      },
      rightCl(){
        this.index++;
        this.index==this.image.length && (this.index=0);
        this.scope=1;
      },
      big(){
        this.scope+=0.2;

      },
      small(){
        if(this.scope<=0.4){
          alert('已经到极限了');
          return;
        }
        this.scope-=0.2;

      }

    }
  }
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .outNode {
    width: 800px;
    height: 640px;
  }
  .left {
    position: absolute;
    left: 0;
    top: 40%;
    z-index: 10;
    color: cornflowerblue;
    background: rgba(255, 255, 255, 0.5);
    cursor: pointer;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    line-height: 30px;
    text-align: center;
  }

  .right {
    position: absolute;
    right: 0;
    top: 40%;
    z-index: 10;
    color: cornflowerblue;
    background: rgba(255, 255, 255, 0.5);
    cursor: pointer;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    line-height: 30px;
    text-align: center;
  }
  .topNode {
    width: 100%;
    height: 440px;
    position: relative;
  }

  .topNode .moveDiv {
    width: 100%;
    height: 400px;
    position: relative;
    float: left;
    overflow: hidden;
  }
  .topNode .textDiv{width: 100%;height: 40px;float: left;background: aquamarine;line-height: 40px;}

  .topNode .moveDiv>ul {
    height: 440px;
    position: absolute;
    left: 0;
    top: 0;
    transition: .3s;
  }

  .topNode .moveDiv>ul>li {
    width: 800px;
    height: 100%;
    float: left;
    position: relative;
    overflow: hidden;
  }

  .topNode .moveDiv>ul>li img {
    width: 100%;
    height: 100%;
    position: absolute;
  }
  .bottomNode{width:100%;height:200px;position: relative;overflow: hidden}
  .bottomNode ol{width:100%;position: absolute;left:0;top: 0;}
  .bottomNode ol li{width: 160px;height: 160px;float: left;border: 20px solid black}

  .bottomNode ol li.active{border-color: orange;}
  .bottomNode ol li img{width: 100%;height:100%;}







  .text{float: left;margin-left: 10px;color: #fff;}
  .fdj{
    float: right;margin-right: 10px;color: #fff;}
  .fdj span{cursor: pointer}


</style>
