import fs from 'fs'
import mdContainer from 'markdown-it-container'
import renderDemoBlock from './render'
import type MarkdownIt from 'markdown-it'
import type Token from 'markdown-it/lib/token'
import type Renderer from 'markdown-it/lib/renderer'
import type { DemoBlockPluginOptions, MdToken } from '../types'
import { createSfcRegexp, TAG_NAME_TEMPLATE } from '@mdit-vue/plugin-sfc'

const updateContent = (tokens: MdToken) => {
  // 添加 <ClientOnly>
  const str = fs.readFileSync(tokens.src[0]).toString()
  const leftStr = str.replace(/<template>/, '<template><ClientOnly>')
  const index = leftStr.lastIndexOf('</template>')
  const clientOnlyStr = leftStr
    .slice(0, index)
    .concat('</ClientOnly>', leftStr.slice(index))
  tokens.content = clientOnlyStr
}

const removeClientOnly = (content: string) => {
  return content.replace(/<ClientOnly>/g, '').replace(/<\/ClientOnly>/g, '')
}

export const blockPlugin = (
  md: MarkdownIt,
  options: DemoBlockPluginOptions,
) => {
  md.use(mdContainer, 'demo', {
    validate(params: string) {
      return params.trim().match(/^demo\s*(.*)$/)
    },
    render(tokens: MdToken[], idx: number) {
      if (tokens[idx + 1]?.content === '' && tokens[idx + 1].src) {
        tokens
        fs.watch(tokens[idx + 1].src[0], () => {
          updateContent(tokens[idx + 1])
        })
        updateContent(tokens[idx + 1])
      }
      if (tokens[idx].nesting === 1) {
        // const comp = await import(tokens[idx + 1].src[0])
        const content =
          tokens[idx + 1].type === 'fence' ? tokens[idx + 1].content : ''
        return `<demo customClass="${options.customClass}" lang="${
          options?.lang || 'vue'
        }" code="${encodeURIComponent(content)}">${
          content ? `<!--vue-demo:${content}:vue-demo-->` : ''
        }`
      }
      return '</demo>'
    },
  })
}

export const codePlugin = (md: MarkdownIt, options: DemoBlockPluginOptions) => {
  const lang = options?.lang || 'vue'
  const defaultRender = md.renderer.rules.fence
  md.renderer.rules.fence = (
    tokens: Token[],
    idx: number,
    options: MarkdownIt.Options,
    env: any,
    self: Renderer,
  ) => {
    const token = tokens[idx]
    // 判断该 fence 是否在 :::demo 内
    const prevToken = tokens[idx - 1]
    const isInDemoContainer =
      prevToken &&
      prevToken.nesting === 1 &&
      prevToken.info.trim().match(/^demo\s*(.*)$/)
    if (token.info.trim().includes(lang) && isInDemoContainer) {
      const m = prevToken.info.trim().match(/^demo\s*(.*)$/)
      const description = m && m.length > 1 ? m[1] : ''
      return `
        ${
          description
            ? `<template #description>
          <div>${md.renderInline(description)}</div>
        </template>`
            : ''
        }`
    }
    return defaultRender?.(tokens, idx, options, env, self) as string
  }
}

const sfcRegexp = createSfcRegexp({ customBlocks: [TAG_NAME_TEMPLATE] })
export const renderPlugin = (
  md: MarkdownIt,
  options: DemoBlockPluginOptions,
) => {
  const render = md.render.bind(md)
  md.render = (src, env) => {
    let rendered = render(src, env)
    // demo 中引入的代码块用 <!--vue-demo: content :vue-demo--> 进行包裹
    const startTag = '<!--vue-demo:'
    const endTag = ':vue-demo-->'
    if (rendered.indexOf(startTag) !== -1 && rendered.indexOf(endTag) !== -1) {
      // 解析 demo 中的代码块
      const { template, script, style } =
        renderDemoBlock(rendered, options) || {}
      const templateSfcBlock = `<template>${template}</template>`.match(
        sfcRegexp,
      )?.groups
      const scriptSfcBlock = script?.match(sfcRegexp)?.groups
      const styleSfcBlock = style?.match(sfcRegexp)?.groups
      env.sfcBlocks.template = templateSfcBlock || null
      env.sfcBlocks.script = scriptSfcBlock || null
      if (scriptSfcBlock) {
        env.sfcBlocks.scripts.push(scriptSfcBlock)
      }
      if (styleSfcBlock) {
        env.sfcBlocks.styles.push(styleSfcBlock)
      }
      rendered = template!
    }
    return rendered
  }
}

export const demoBlock = (
  md: MarkdownIt,
  options: DemoBlockPluginOptions = {},
) => {
  md.use(blockPlugin, options)
  md.use(codePlugin, options)
}
