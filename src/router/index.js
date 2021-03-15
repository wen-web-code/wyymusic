import { createRouter, createWebHistory } from 'vue-router'
const recommend = () => import('views/recommend')
const rankingList = () => import('views/rankingList')
const songSheet = () => import('views/songSheet')
const anchorStation = () => import('views/anchorStation')
const singer = () => import('views/singer')
const newSong = () => import('views/newSong')

const rl_listvalue = () => import('components/rankinglist/rl_listvalue')
const ss_songitem = () => import('components/songsheet/ss_songitem')

const routes = [
  {
    path: '/',
    redirect: '/home/recommend'
  },
  {
    path: '/home/recommend',
    component: recommend
  },
  {
    path: '/home/rankingList',
    component: rankingList,
    children: [
      {
        path: '',
        redirect: '/home/rankingList/:id'
      },
      {
        path: '/home/rankingList/:id',
        component: rl_listvalue
      }
    ]
  },
  {
    path: '/home/songSheet',
    component: songSheet,
    children: [
      {
        path:'',
        component: ss_songitem
      }
    ]
  },
  {
    path: '/home/anchorStation',
    component: anchorStation
  },
  {
    path: '/home/singer/:userId',
    component: singer
  },
  {
    path: '/home/newSong',
    component: newSong
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
