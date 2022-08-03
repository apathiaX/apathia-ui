const path = require('path')
const fs = require('fs')
const {nameMap} = require('./nameMap')

// import nameMap from './nameMap'

const getIntroductionSidebar = () => {
  return [
    {
      text: '快速上手',
      children: [
        { text: '介绍', link: '/' },
        { text: '安装', link: '/introduction/install' },
      ]
    },
    {
      text: '组件',
      link: '/component/button'
    },
    {
      text: 'Hooks',
      link: '/hook/index'
    }
  ]
}

const generatePathsFromDir = (dirPath, prefix) => {
  const mds = fs.readdirSync(dirPath)
  return mds.filter(md => md !== 'index.md').map((md) => {
    const [name, ext] = md.split('.')
    let fullName = name
    if(nameMap[name]) {
      fullName = name + ' ' + nameMap[name]
    }
    return {
      text: fullName,
      link: `${prefix}/${name}`
    }
  })
}

module.exports = {
  lang: 'zh-CN',
  title: 'Apathia',
  description: 'Vite & Vue powered static site generator.',
 
  markdown: {
    config: (md) => {
      const { demoBlockPlugin } = require('@apathia/vitepress-theme')
      // const { demoBlockPlugin } = require('vitepress-theme-demoblock')
      md.use(demoBlockPlugin)
    }
  },

  themeConfig: {
    repo: 'https://git.bilibili.co/mng-components/helm',
    docsDir: 'docs',

    editLinks: true,
    editLinkText: 'Edit this page on Github',
    lastUpdated: '最后更新',

    nav: [
      {
        text: '介绍',
        link: '/introduction/',
        activeMatch: '^/$|^/introduction/'
      },
      {
        text: '组件',
        link: '/component/button',
        activeMatch: '^/component'
      },
      {
        text: 'Hook',
        link: '/hook/index',
        activeMatch: '^/hook'
      }
    ],

    sidebar: {
      '/introduction': getIntroductionSidebar(),
      '/component': generatePathsFromDir(path.resolve(__dirname, '../component'), '/component'),
      '/hook': generatePathsFromDir(path.resolve(__dirname, '../hook'), '/hook'),
      '/': getIntroductionSidebar(),
    }
  }
}
