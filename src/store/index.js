import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    myself: [],
    myselfFlag:true,
    isShow:true
  },
  actions: {
    getmyself(cxt) {
      return axios.get('/api/getmyself')
        .then((res) => {
          cxt.commit("getmyself", res.data)
        })
    },
  },
  mutations: {
    getmyself(state, data){
      state.myselfFlag = false;
      state.myselfFlag.myself = data;
    },
    change(state, data) {
      state.myself.push(data)
    },
    changeflag(state, data) {
      state.isShow = data
    }
  },

  modules: {
  }
})
