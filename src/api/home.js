import { request } from './request'

export function gethomebar() {
  return request({
    url: '/banner',//轮播图
  })
}
export function gethomeSongSheet() {
  return request({
    url: '/top/playlist/highquality?before=1503639064232&limit=10',//热门歌单
  })
}
export function gethomeNewSong() {
  return request({
    url: '/album/list?limit=12'//新碟上架
  })
}

export function gettoplist(limit = 12) {
  return request({
    url: '/toplist/list',//
    params: {
      limit
    }
  })
}

export function gettoplistsong(listId) {
  return request({
    url: '/top/list',//
    params: {
      id: listId
    }
  })
}