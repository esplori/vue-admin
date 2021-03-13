import Vue from 'vue'
import Router from 'vue-router'
import login from '@/views/account/login'
// import index from '@/views/home/index'
// import detail from '@/views/home/detail'
import admin from '@/views/admin/index'

Vue.use(Router)

const router = new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      redirect: 'admin'
    },
    {
      path: '/login',
      component: login
    },
    {
      path: '/admin',
      component: admin,
      children: [
        {
          path: '',
          redirect: 'pageList'
        },
        {
          path: 'pageList',
          component: () => import('@/views/admin/pageList')
        },
        {
          path: 'post',
          component: () => import('@/views/admin/post')
        },
        {
          path: 'edit',
          component: () => import('@/views/admin/post')
        },
        {
          path: 'cate',
          component: () => import('@/views/admin/cateList')
        },
        {
          path: 'imageManage',
          component: () => import('@/views/admin/imageManage')
        },
        {
          path: 'userInfo',
          component: () => import('@/views/admin/userInfo')
        },
        {
          path: 'navigationList',
          component: () => import('@/views/admin/navigationList')
        },
        {
          path: 'navigationEdit',
          component: () => import('@/views/admin/navigationEdit')
        },
        {
          path: 'sourceList',
          component: () => import('@/views/admin/sourceList')
        },
        {
          path: 'caiji',
          component: () => import('@/views/admin/caiji')
        },
        {
          path: 'caijiList',
          component: () => import('@/views/admin/caijiList')
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  next()
})

export default router
