import { request } from './request'

// 获取歌单分类
export function getplaylisttype() {
  return request({
    url: '/playlist/catlist',
  })
}

// 获取歌单内容
export function gethighquality({before, limit}) {
  return request({
    url: '/top/playlist/highquality',
    param: {
      before,
      limit
    }
  })
}