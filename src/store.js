import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'


Vue.use(Vuex)

let api = axios.create({
  baseURL: 'https://api.nasa.gov/planetary/apod?api_key=T1Ldw33bcXfNyXUQunjWheAGVVKr0YuWY1CUnqCZ'
})


export default new Vuex.Store({
  state: {
    activePicture: {}
  },
  mutations: {
    setActivePicture(state, picture) {
      state.activePicture = picture
    }
  },
  actions: {
    async getPictures({
      commit
    }) {
      try {
        let res = await api.get('')
        console.log(res)
        commit('setActivePicture', res.data)
      } catch (error) {
        console.error(error)
      }
    },
  }
})