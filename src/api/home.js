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
    // url: '/personalized/newsong',//热门歌单
    url: '/album/list?limit=12'
  })
}

export function gettoplist() {
  return request({
    // url: '/personalized/newsong',//热门歌单
    url: '/toplist/list?limit=12'
  })
}