import path from 'path'
import fs from 'fs'
import nameMap from './nameMap'
import { demoBlockPlugin } from '@apathia/vitepress-theme'
import { defineConfig } from 'vitepress'

const getIntroductionSidebar = () => {
  return [
    {
      text: '快速上手',
      collapsible: true,
      items: [
        { 
          text: '介绍',
          link: '/introduction/index'
        },
        { 
          text: '安装', 
          link: '/introduction/install'
        },
      ]
    },
  ]
}

const generatePathsFromDir = (dirPath, prefix) => {
  const mds = fs.readdirSync(dirPath)
  const items =  mds.filter(md => md !== 'index.md').map((md) => {
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
  const text = prefix.split('/')[1].slice(0,1).toUpperCase() + prefix.split('/')[1].slice(1)
  return [{
    text,
    items,
    collapsible: true,
  }]
}

export default defineConfig(
  {
    title: 'Apathia Component 中文文档',
    description: '基于vue3 + typescript + twind 的vue组件库',
    lang: 'zh-CN',
    head: [['link', { rel: 'icon', type: 'image/svg+xml', href: 'icon.png' }]],
    base: '/apathia-vue/',
   
    markdown: {
      config: (md) => {
        md.use(demoBlockPlugin)
      }
    },
  
    themeConfig: {
      siteTitle:'Apathia Component 中文文档',
      repoLabel:'GitHub',
      docsDir: 'docs',
      docsBranch: 'master',
      lastUpdatedText: '最近更新时间',
      logo: '/icon.png',
      repo: 'https://github.com/apathia1220/apathia-vue',
  
      editLinks: true,
      editLinkText: 'Edit this page on Github',
      lastUpdated: '最后更新',
  
      nav: [
        {
          text: '介绍',
          link: '/introduction/index',
          activeMatch: '^/$|^/introduction/'
        },
        {
          text: '组件',
          link: '/component/index',
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
  
)