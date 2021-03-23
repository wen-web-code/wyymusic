///dj/catelist 获取电台选项
// dj/program/toplist?limit=10节目排行榜
// /program/recommend 推荐节目
// /dj/recommend/type 获取电台对应类型的推荐数据

import { request } from './request'

export function getdjcatelist() {
  return request({
    url: 'dj/catelist',
  })
}

export function getpgrecommend() {
  return request({
    url: 'program/recommend',
  })
}

//节目排行榜
export function getdjtoplist(limit=10) {
  return request({
    url: 'dj/program/toplist',
    params: {
      limit
    }
  })
}

//获取电台对应类型的推荐数据
export function getdjrecommend(reparam) {
  return request({
    url: 'dj/recommend/type',
    params: reparam
  })
}