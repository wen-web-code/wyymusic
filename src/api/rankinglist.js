import { request } from './request'

export function getrlsonglist() {
  return request({
    url: '/toplist/detail',
  })
}

export function gettoplistsong(id) {
  return request({
    url: '/top/list',//
    params: {
      id
    }
  })
}

