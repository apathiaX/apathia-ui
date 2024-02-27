import path from 'path'
import fs from 'fs'
import nameMap from './nameMap'
import { demoBlock as demoBlockPlugin } from './plugin'
import { UserConfig, defineConfig } from 'vitepress'

const getIntroductionSidebar = () => {
  return [
    {
      text: '快速上手',
      collapsible: true,
      items: [
        {
          text: '介绍',
          link: '/introduction/index',
        },
        {
          text: '安装',
          link: '/introduction/install',
        },
      ],
    },
  ]
}

const generatePathsFromDir = (dirPath, prefix) => {
  const mds = fs.readdirSync(dirPath)
  const items = mds
    .filter(md => md !== 'index.md')
    .map(md => {
      const [name, ext] = md.split('.')
      let fullName = name
      if (nameMap[name]) {
        fullName = name + ' ' + nameMap[name]
      }
      return {
        text: fullName,
        link: `${prefix}/${name}`,
      }
    })
  const text =
    prefix.split('/')[1].slice(0, 1).toUpperCase() +
    prefix.split('/')[1].slice(1)
  return [
    {
      text,
      items,
      collapsible: true,
    },
  ]
}

const config: UserConfig = {
  title: 'ApathiaUI',
  description: '基于vue3 + typescript + twind 的vue组件库',
  lang: 'zh-CN',
  head: [['link', { rel: 'icon', type: 'image/svg+xml', href: 'logo.png' }]],
  base: '/apathia-vue/',

  markdown: {
    config: md => {
      md.use(demoBlockPlugin, { customClass: 'apathia-docs' })
    },
  },

  themeConfig: {
    siteTitle: 'Apathia Component',
    outlineTitle: '本页目录',
    lastUpdatedText: '最近更新时间',
    logo: '/logo.png',

    lastUpdated: { text: '最后更新' },

    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/apathia1220/apathia-vue',
      },
    ],

    nav: [
      {
        text: '介绍',
        link: '/introduction/index',
        activeMatch: '^/$|^/introduction/',
      },
      {
        text: '组件',
        link: '/component/index',
        activeMatch: '^/component',
      },
      {
        text: 'Hook',
        link: '/hook/index',
        activeMatch: '^/hook',
      },
    ],

    sidebar: {
      '/introduction': getIntroductionSidebar(),
      '/component': generatePathsFromDir(
        path.resolve(__dirname, '../component'),
        '/component',
      ),
      '/hook': generatePathsFromDir(
        path.resolve(__dirname, '../hook'),
        '/hook',
      ),
      '/': getIntroductionSidebar(),
    },
    // demos: demos,
    // search: {
    //   provider: 'local',
    // },
  },
}

export default defineConfig(config)
