import Vue from 'vue'
import VueResource from 'vue-resource';
import Vuex from 'vuex'

Vue.use(Vuex)
Vue.use(VueResource)


export default new Vuex.Store({
  state: {
    dataArray: [],
    ApiKey: '01921a54739f60a908280d0b25fcf9b6',
    ID_CITY: {
      bogota: '3688689'
    }
  },
  mutations: {
    updateData(state, payload) {
      state.dataArray = payload;
    },
  },

  // actions: {
  //   getData: async ({ commit }) => {
  //     try {
  //       return Vue.http.get(`https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/weather?id=3688689&appid=01921a54739f60a908280d0b25fcf9b6`)
  //         .then((response) => commit("updateData", response.body))
  //     } catch (error) {
  //       alert(error)
  //     }
  //   },
  // },

  modules: {
  }
})
