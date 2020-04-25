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
    },
    increaseIndex(state) {
      if(state.currentIndex < state.playlist.length - 1) {
        state.currentIndex += 1
      }else if(state.currentIndex == state.playlist.length - 1) {
        state.currentIndex = 0
      }else {
        return false
      } 
    },
    decreaseIndex(state) {
      if(state.currentIndex > 0) {
        state.currentIndex -= 1
      }else if(state.currentIndex == 0) {
        state.currentIndex = state.playlist.length - 1
      }else {
        return false
      } 
    }
  },
  getters: {
    getSong(state) {
      return (index) => {
        return state.playlist[index]
      }
    },
    // getNextSong(state) {
    //   let i = state.currentIndex + 1
    //   return state.playlist[i]
    // }
  },
  modules: {
  }
})