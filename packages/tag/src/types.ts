export type TagType = 'success' | 'primary' | 'danger' | 'warning'

export type TagItem =
  | string
  | {
      type?: TagType
      closeable?: boolean
      iconClass?: string
      [k: string]: any
    }
