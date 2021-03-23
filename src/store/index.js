import { createStore } from 'vuex'
import {getrlsonglist, gettoplistsong} from 'api/rankinglist'
import {getplaylisttype, gethighquality} from 'api/songsheet'
import {getdjcatelist,getpgrecommend, getdjtoplist, getdjrecommend} from 'api/anchorstation'
import {getalbumlist} from 'api/newsong'

export default createStore({
  state: {
    data: [],
    songdata: [],
    song: [],
    id: 0,
    playlisttype:[],
    highqualitydata: [],
    catelistdata: [],
    pgrecommenddata:[],
    djtoplistdata: [],
    djrecommenddata:[],
    albumlistdata: [],

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
    //歌单选项卡
    getcatelist(state, param) {
      state.catelistdata = param
    },
    //获取歌单内容信息
    gethqdata(state, param) {
      state.highqualitydata = param.playlists
      // console.log(param);
    },
    //获取电台推荐节目
    getpgdata(state, param) {
      state.pgrecommenddata = param.programs
      // console.log(param);
    },
    //获取节目排行榜
    getdtlist(state, param) {
      let {toplist} = param
      state.djtoplistdata = toplist
      // console.log(toplist);
    },
    //获取不同类型电台的数据
    getrecommend(state, param) {
      state.djrecommenddata = param.djRadios
      // console.log(param);
    },
    //获取热门新碟
    getalbumlistdata(state, param) {
      state.albumlistdata = param.products
      // console.log(param.products);
      
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
    },
    async getdjcatelist({commit}) {
      commit('getcatelist', await getdjcatelist())
    },
    async getpgrecommend({commit}) {
      commit('getpgdata', await getpgrecommend())
    },
    async getdjtoplist({commit}, limit) {
      commit('getdtlist', await getdjtoplist(limit))
    },
    async getdjrecommend({commit}, {type, limit}) {
      commit('getrecommend', await getdjrecommend({type, limit}))
    },
    async getalbumlist({commit}, limit) {
      commit('getalbumlistdata', await getalbumlist(limit))
    }
  },
  modules: {
  }
})
