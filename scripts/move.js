const fs = require('fs')
const path = require('path')

// 创建新的文件夹
const newDir = 'demos'
if (!fs.existsSync(newDir)) {
  fs.mkdirSync(newDir)
}

// 获取 old 文件夹中的所有文件夹
const oldDir = 'old'
const folders = fs
  .readdirSync(oldDir)
  .filter(file => fs.statSync(path.join(oldDir, file)).isDirectory())

// 遍历每一个文件夹
folders.forEach(folder => {
  const folderPath = path.join(oldDir, folder)

  // 复制 demo 文件到原文件夹下
  const demoFile = path.join(folderPath, 'demo')
  if (fs.existsSync(demoFile)) {
    fs.copyFileSync(demoFile, path.join(folderPath, 'demo-copy'))
  }

  // 将文件夹复制到新文件夹下
  fs.copyFileSync(folderPath, path.join(newDir, folder))
})
