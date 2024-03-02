import path from 'path'
import fs from 'fs'
import { sidebarMap, sidebarNameMap, componentList } from './nameMap'
import { demoBlock as demoBlockPlugin } from './plugin'
import { UserConfig, defineConfig } from 'vitepress'

type Sidebar = SidebarItem[] | SidebarMulti

interface SidebarMulti {
  [path: string]: SidebarItem[]
}

type SidebarItem = {
  text?: string
  link?: string
  items?: SidebarItem[]
  collapsed?: boolean
}

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

const generatePathsFromDir = (prefix: string) => {
  return Object.keys(sidebarMap).reduce<Sidebar[]>((prev, currKey) => {
    const currMap = sidebarMap[currKey]
    if (!currMap) return prev
    const currName = sidebarNameMap[currKey]
    const currComp = Object.keys(currMap).map<SidebarItem>(name => ({
      text: name + '' + currMap[name],
      link: `${prefix}/${name}`,
    }))
    return prev.concat([
      {
        text: currName,
        items: currComp,
        collapsed: true,
      },
    ])
  }, [])
}

const generateHooks = (dirPath: string, prefix: string) => {
  const mds = fs.readdirSync(dirPath)
  const items = mds
    .filter(md => md !== 'index.md')
    .map(md => {
      const [name, _] = md.split('.')
      return {
        text: name,
        link: `${prefix}/${name}`,
      }
    })
  return [
    {
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
      '/component': generatePathsFromDir('/component'),
      '/hook': generateHooks(path.resolve(__dirname, '../hook'), '/hook'),
      '/': getIntroductionSidebar(),
    },
  },
}

export default defineConfig(config)
