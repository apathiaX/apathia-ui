import { faker } from '@faker-js/faker'

export type Item = { index: number; id: string; text: string }
export function getList(length: number, start = 0): Item[] {
  const newList: Item[] = []
  for (let i = 0; i < length; i++) {
    newList.push({
      index: i,
      id: faker.string.nanoid(),
      text: faker.lorem.sentences(),
    })
  }
  return newList
}

// 异步获取数据
export async function asyncGetList(
  length: number,
  start = 0,
  time = 0,
): Promise<any[]> {
  return new Promise(resolve => {
    const newList: any[] = []
    for (let i = 0; i < length; i++) {
      newList.push({
        index: start + i,
        id: faker.string.nanoid(),
        text: faker.lorem.paragraph(),
      })
    }
    setTimeout(() => {
      resolve(newList)
    }, time)
  })
}
