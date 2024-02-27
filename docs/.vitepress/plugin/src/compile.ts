import type { SFCTemplateCompileOptions } from '@vue/compiler-sfc'
import { compileTemplate, compileScript, parse } from '@vue/compiler-sfc'
import type { DemoBlockPluginOptions } from '../types'

const ScriptSetupPattern = /<(script)(?:.* \bsetup\b)?[^>]*>([\s\S]+)<\/\1>/
const StylePattern = /<(style)[^>]*>([\s\S]+)<\/\1>/
const ScriptOrStyleReplacePattern = /<(script|style)[\s\S]+<\/\1>/g
const TemplateReplacePattern = /<template>([\s\S]+)<\/template>/g

export function stripScript(content: string, id: string) {
  const result = content.match(ScriptSetupPattern)
  // 获取 script 内容
  const source = result && result[0] ? result[0].trim() : ''
  if (source) {
    const { descriptor } = parse(source)
    const script = compileScript(descriptor, {
      id,
    })
    // console.log('script', script)
    return script.content
  }
  return source
}

export function stripStyle(content: string) {
  const result = content.match(StylePattern)
  return result && result[2] ? result[2].trim() : ''
}

// 编写例子时不一定有 template。所以采取的方案是剔除其他的内容
export function stripTemplate(content: string) {
  content = content.trim()
  if (!content) {
    return content
  }
  return content.replace(ScriptOrStyleReplacePattern, '').trim()
}

export function pad(source: string) {
  return source
    .split(/\r?\n/)
    .map(line => `  ${line}`)
    .join('\n')
}

export function genInlineComponentText(
  id: number,
  template: string,
  script: string,
  options: DemoBlockPluginOptions,
) {
  let source = template
  if (TemplateReplacePattern.test(source)) {
    // 剔除template标签
    source = source.replace(TemplateReplacePattern, '$1')
  }
  const finalOptions = {
    id: `inline-component-${id}`,
    source: `${source}`,
    filename: `inline-component-${id}.vue`,
    compilerOptions: {
      mode: 'function',
    },
  }
  const compiled = compileTemplate(finalOptions as SFCTemplateCompileOptions)
  // console.log('compiled', compiled.code)
  // tips
  if (compiled.tips && compiled.tips.length) {
    compiled.tips.forEach(tip => {
      console.warn(tip)
    })
  }
  // errors
  if (compiled.errors && compiled.errors.length) {
    console.error(
      `\n  Error compiling template:\n${pad(compiled.source)}\n` +
        compiled.errors.map(e => `  - ${e}`).join('\n') +
        '\n',
    )
  }
  let demoComponentContent = `
    ${compiled.code.replace('return function render', 'function render')}
  `

  script = script.trim().replace(/\/\*#__PURE__\*\//g, '')
  // console.log('script1', script)
  if (script) {
    script = script
      .replace(/export\s+default/, 'const demoComponentExport =')
      .replace(/import ({.*}) from 'vue'/g, (s, s1) => `const ${s1} = Vue`)
      .replace(
        /const ({ defineComponent as _defineComponent }) = Vue/g,
        'const { defineComponent as _defineComponent } = Vue',
      )

    // 因为 vue 函数组件需要把 import 转换为 require，这里可附加一些其他的转换。
    if (options?.scriptReplaces) {
      for (const s of options.scriptReplaces) {
        script = script.replace(s.searchValue, s.replaceValue as any)
      }
    }
  } else {
    script = 'const demoComponentExport = {}'
  }
  demoComponentContent = `(function() {
    ${demoComponentContent}
    ${script}
    return {
      render,
      ...demoComponentExport
    }
  })()`
  return demoComponentContent
}
