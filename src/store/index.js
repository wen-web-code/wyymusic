import { createStore } from 'vuex'
import {getrlsonglist, gettoplistsong} from 'api/rankinglist'

export default createStore({
  state: {
    data: [],
    songdata: [],
    song: [],
    id: 0
  },
  mutations: {
    getrlSongLists(state, param) {
      state.data = param.list
      // console.log(param.list);
    },
    getitledata(state, param) {
      state.songdata = param.playlist
      // console.log(param.playlist);
      state.song = param.playlist.tracks
      // console.log(param.playlist.tracks);
    },
    setid(state, itemid) {
      state.id = itemid
      // console.log(itemid);
    }
  },
  actions: {
    async getrlsonglist({commit}) {
      commit('getrlSongLists', await getrlsonglist())
    },
    async gettoplistsong({commit}, id) {
      commit('getitledata', await gettoplistsong(id))
    }
  },
  modules: {
  }
})
