import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'


Vue.use(Vuex)

let api = axios.create({
  baseURL: 'https://apod.nasa.gov/cgi-bin/apod/apod_search/'
})

let urlParams = '?api_key=NNKOjkoul8n1CH18TWA9gwngW1s1SmjESPjNoUFo'

export default new Vuex.Store({
  state: {
    pictures: [],
    activePicture: {}
  },
  mutations: {
    setPictures(state, pictures) {
      state.pictures = pictures
    },
    setActivePicture(state, picture) {
      state.activePicture = picture
    }
  },
  actions: {
    async getPictures({
      commit,
    }, query) {
      try {
        let res = await api.get(urlParams + query)
        commit('setPictures', res.data.results)
      } catch (error) {
        console.error(error)
      }
    },
    selectPicture({
      commit
    }, picture) {
      commit('setActivePicture', picture)
    }
  }
})