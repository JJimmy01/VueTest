import Vue from 'vue'
import  Vuex from 'vuex'

Vue.use(Vuex);




const state = {
   gmsg:'i am your grandpa',
   smsg:'i am your son'

};

const mutations = {
  gchange(){

   state.gmsg = '我是葫芦娃的爷爷'
  },
  schange(){

    state.smsg = '我是葫芦娃'
  }

};

const actions={
  gchange({commit}){

    commit('gchange');
  },
  schange({commit}){

    commit('schange');
  }


};

const getters = {
    gmsg(state){
      return state.gmsg
    },
  smsg(state){
    return state.smsg
  }

};


export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
