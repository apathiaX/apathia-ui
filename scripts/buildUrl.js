const fs = require('fs')
const path = require('path')

// 目标文件路径
const filePath = 'docs/.vitepress/dist/CNAME' // 这里是你想要创建的文件路径

// 确保目标路径存在，如果不存在则创建它
const dirPath = path.dirname(filePath)

if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath, { recursive: true })
}

// CNAME 文件内容
const cnameContent = 'ui.apathia.cn' // 这里是你想要写入 CNAME 文件的内容

// 写入 CNAME 文件
fs.writeFileSync(filePath, cnameContent, { encoding: 'utf-8' })
