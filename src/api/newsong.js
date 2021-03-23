// /album/new?area=KR&limit=10 全部新碟
// /album/list?limit=12 热门新碟

import {request} from './request'

export function getalbumlist(limit) {
  return request({
    url: '/album/list',
    params:{
      limit
    }
  })
}

export function getalbumnew(area, limit) {
  return request({
    url: '/album/new',
    params:{
      area,
      limit
    }
  })
}