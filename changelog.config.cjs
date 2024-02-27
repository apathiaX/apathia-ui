module.exports = {
  disableEmoji: false,
  format: '{type}{scope}: {emoji} {subject}',
  list: ['feat', 'fix', 'refactor', 'wip'],
  minMessageLength: 3,
  questions: ['type', 'scope', 'subject', 'body'],
  scopes: [
    '通用',
    'apathia-ui',
    'docs',
    'example',
    'internal',
    'scripts',
    'virtual-list',
  ],
  types: {
    feat: {
      description: '一个新的特性',
      emoji: '🖥️',
      value: 'feat',
    },
    fix: {
      description: '一个Bug修复',
      emoji: '🐛',
      value: 'fix',
    },
    refactor: {
      description: '一个重构优化',
      emoji: '💡',
      value: 'refactor',
    },
    wip: {
      description: '一个未完成工作的暂存',
      emoji: '🚧',
      value: 'wip',
    },
  },
  messages: {
    // type: "Select the type of change that you're committing:",
    // customScope: 'Select the scope this component affects:',
    // subject: 'Write a short, imperative mood description of the change:\n',
    // body: 'Provide a longer description of the change:\n ',
    // breaking: 'List any breaking changes:\n',
    // footer: 'Issues this commit closes, e.g #123:',
    // confirmCommit: 'The packages that this commit has affected\n',

    type: '选择你的提交类型:',
    scope: '选择你的模块(scope):',
    subject: '变动说明(subject):',
    confirmCommit: '确定提交信息?',
  },
}
