export function resizeImage(src: string, sizeStr: string) {
    if (typeof src !== 'string') {
      throw new TypeError()
    }
  
    let size = sizeStr
    if (size === undefined) {
      size = '160x100'
    } else if (size === '0x0') {
      return src
    }
  
    const urls = src.split('?')
  
    // 检测是否已经剪切过，去掉剪切过的后缀
    const reg = /(@\d+w_\d+h)|(_\d+x\d+)/
    const reStr = urls[0].match(reg)
    if (reStr !== null) {
      const index = urls[0].indexOf(reStr[0])
      urls[0] = urls[0].substring(0, index)
    }
  
    const [widthStr, heightStr] = sizeStr.split('x')
    const width = +widthStr
    const height = +heightStr
    const suffix = `${width || height ? '@' : ''}${width ? `${width}w` : ''}${
      width && height ? '_' : ''
    }${height ? `${height}h` : ''}`
  
    const rules = {
      cdn: /i[0-2]\.hdslb\.com\//,
      bfs: /\/\/i\d\.hdslb\.com\/bfs\//,
      uat: /\/\/uat-i\d\.hdslb\.com\/bfs\//,
      group1: /\/\/i\d\.hdslb\.com\/group1\//,
      // other: /(\/\/i\d\.hdslb\.com)(\/.+)/
    }
    const feature = {
      bfs: /_\d+x\d+\./,
      other: /\/\d+_\d+\//,
    }
  
    if (!rules.cdn.test(urls[0])) {
      return src
    }
  
    if (feature.bfs.test(urls[0]) || feature.other.test(urls[0])) {
      return src
    }
  
    if (
      rules.uat.test(urls[0]) ||
      rules.bfs.test(urls[0]) ||
      rules.group1.test(urls[0])
    ) {
      urls[0] += suffix + urls[0].slice(urls[0].lastIndexOf('.'))
      return urls.join('?')
    }
  
    return src
  }
  