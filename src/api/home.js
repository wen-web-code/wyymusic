import { request } from './request'

export function gethomebar() {
  return request({
    url: '/banner',//轮播图
  })
}