import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    ShowTB: true,
    playlist: [],
    currentIndex: -1,
    song: {},
    currentStatus: true,
  },
  mutations: {
    updateShowTB(state, payload) {
      state.ShowTB = payload
    },
    updatePlaylist(state, payload) {
      state.playlist = payload
    },
    updateIndex(state, payload) {
      state.currentIndex = payload
    },
    updateSong(state, payload) {
      state.song = payload
    },
    updateStatus(state, payload) {
      state.currentStatus = !payload
    }
  },
  getters: {
    getSong(state) {
      return (index) => {
        return state.playlist[index]
      }
    }
  },
  modules: {
  }
})