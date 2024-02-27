import type Token from 'markdown-it/lib/token'

export interface MdToken extends Token {
  src: string
}

export interface Locale {
  'hide-text': string
  'show-text': string
  'copy-button-text': string
  'copy-success-text': string
}

export interface Locales {
  [key: string]: Locale
}

export type ReplaceValue = () => string
export interface ScriptReplace {
  searchValue: RegExp
  replaceValue: string | ReplaceValue
}

export interface DemoBlockPluginOptions {
  locales?: Locales
  customClass?: string
  theme?: string
  langs?: any[]
  lang?: string
  cssPreprocessor?: 'sass' | 'scss' | 'less' | 'stylus'
  customStyleTagName?: string
  scriptImports?: Array<string>
  scriptReplaces?: Array<ScriptReplace>
}

export interface MessageProps {
  name: string
  type: 'info' | 'error' | ''
  content: string
  duration: number
}
