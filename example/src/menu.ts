import { Avatar } from '@apathia/apathia.icon-svg'
import { shallowRef } from 'vue'
export const routerMenu = [
  {
    text: '文章管理',
    icon: Avatar,
    children: [
      {
        path: '/article/add',
        text: '发布文章',
      },
      {
        path: '/article/list',
        text: '文章列表',
      },
      {
        path: '/article/category',
        text: '分类管理',
      },
      {
        path: '/article/tag',
        text: '标签管理',
      },
    ],
  },
  {
    text: '说说管理',
    children: [
      {
        text: '发布说说',
        path: '/talks/add',
      },
      {
        text: '说说列表',
        path: '/talks/list',
      },
    ],
  },
  {
    text: '用户管理',
    children: [
      {
        text: '新增用户',
        path: '/user/add',
      },
      {
        text: '用户列表',
        path: '/user/list',
      },
    ],
  },
]
