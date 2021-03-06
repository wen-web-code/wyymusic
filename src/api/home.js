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