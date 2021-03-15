import { createStore } from 'vuex'
import {getrlsonglist, gettoplistsong} from 'api/rankinglist'
import {getplaylisttype, gethighquality} from 'api/songsheet'

export default createStore({
  state: {
    data: [],
    songdata: [],
    song: [],
    id: 0,
    playlisttype:[],
    highqualitydata: []
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
    //获取歌单分类
    getpltype(state, param) {
      state.playlisttype = param
      param.sub.forEach(item => {
        state.songdata[item.category]
      });
      // console.log(param.sub);
    },
    //获取歌单内容信息
    gethqdata(state, param) {
      state.highqualitydata = param.playlists
      console.log(param);
    },
    setid(state, itemid) {
      state.id = itemid
    }
  },
  actions: {
    async getrlsonglist({commit}) {
      commit('getrlSongLists', await getrlsonglist())
    },
    async gettoplistsong({commit}, id) {
      commit('getitledata', await gettoplistsong(id))
    },
    async getplaylisttype({commit}) {
      commit('getpltype', await getplaylisttype())
    },
    async gethighquality({commit}, {before, limit}) {
      commit('gethqdata', await gethighquality({before, limit}))
    }
  },
  modules: {
  }
})
