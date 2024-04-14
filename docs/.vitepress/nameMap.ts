export const sidebarMap = {
  basic: {
    Affix: '固定',
    Button: '按钮',
    Image: '图片',
    Icon: '图标',
    ScrollContainer: '滚动条',
  },
  form: {
    Checkbox: '多选框',
    Collapse: '折叠面板',
    Confirm: '确认框',
    Dropdown: '下拉菜单',
    Form: '表单',
    Input: '输入框',
    Switch: '选择',
    Upload: '上传',
    Radio: '单选框',
    Select: '下拉选择器',
    // DatePicker: '时间选择器',
  },
  feedBack: {
    Modal: '模态窗',
    Popper: '提示',
    Toast: '轻提示',
  },
  Data: {
    Cascader: '级联选择器',
    Navbar: '导航',
    Pagination: '分页',
    Slider: '滑块',
    Sidenav: '侧边栏导航',
    // Steps: '步骤条',
    Table: '表格',
    Tabs: '标签页',
    Tag: '标签',
    Transfer: '穿梭框',
  },
}

export const componentList = Object.keys(sidebarMap).reduce<string[]>(
  (prev, key) => {
    return prev.concat(Object.keys(sidebarMap[key]))
  },
  [],
)

export const sidebarNameMap = {
  basic: '基础',
  form: '表单',
  feedBack: '反馈',
  Data: '数据',
}

export const virtualListMap = {
  basic: {
    fixed: '固定高度',
    dynamic: '不定高度',
    horizontal: '横向滚动',
    slot: '插槽',
    operate: '操作',
  },
  advance: {
    infinite: '无限滚动',
    chat: '聊天室',
    pagination: '分页',
    'huge-date': '百万数据',
    advance: '自定义用法',
  },
}

export const virtualListNameMap = {
  basic: '基础用法',
  advance: '进阶用法',
}
