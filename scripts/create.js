/* eslint-disable @typescript-eslint/no-var-requires */
// create a new component
const fs = require('fs-extra')
const cp = require('child_process')
const path = require('path')
const inquirer = require('inquirer')
const consola = require('consola')

const kebabCase2pascalCase = str =>
  str[0].toUpperCase() +
  str.slice(1).replace(/-(\w)/g, (_, p) => p.toUpperCase())

const packagesPath = path.resolve(__dirname, '../packages')

const generatePackageJson = name => ({
  name: `@apathia/apathia.${name}`,
  version: '0.0.1',
  description: name,
  author: '',
  homepage: '',
  main: `dist/apathia.${name}.umd.js`,
  module: `dist/apathia.${name}.es.js`,
  types: 'dist/index.d.ts',
  source: 'src/index.ts',
  export: {
    import: `dist/apathia.${name}.es.js`,
    require: `dist/apathia.${name}.umd.js`,
  },
  sideEffects: false,
  directories: {
    lib: 'src',
    test: '__tests__',
  },
  files: ['dist'],
  publishConfig: {
    registry: 'https://registry.npmjs.com/',
  },
  scripts: {
    test: 'echo "Error: run tests from root" && exit 1',
  },
  devDependencies: {
    vue: '^3.2.37',
  },
  peerDependencies: {
    vue: '^3.2.37',
  },
})

const genTsxTemplate = name => `import { defineComponent } from 'vue'
// import { tw, apply } from '@apathia/apathia.twind'

export default defineComponent({
  name: '${name}',

  props: {},

  setup(props, ctx) {
    return () => 'hello world'
  },
})

`

const genVueTemplate = name => `<template>
  <div>
    hello world
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
// import { tw, apply } from '@apathia/apathia.twind'

export default defineComponent({
  name: '${name}',

  props: {},

  setup(props, ctx) {
    return {}
  },
})
</script>

`

const genDemoTemplate = name =>
  `<template>
  <div>
    <Card title="基础用法">
      <${name} />
    </Card>

    <Card title="其他用法">
      <${name} />
    </Card>
  </div>
</template>

<script setup>
import { ${name} } from '@apathia/apathia'
</script>

`
;(async () => {
  const { name, type } = await inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: '输入包名<kebab-case>(不需要scope，如affix)',
      validate: value => value.trim().length !== 0 && /[a-z0-9-]+$/.test(value),
    },
    {
      type: 'list',
      name: 'type',
      choices: ['component', 'tsutil'],
      message: '选择包类型',
    },
  ])

  console.log('name', name)
  if (fs.existsSync(path.join(packagesPath, name))) {
    throw new Error('已存在')
  }

  fs.mkdirSync(path.resolve(packagesPath, name))

  const resolvePath = p => path.resolve(packagesPath, name, p)
  // write package.json
  fs.writeFileSync(
    resolvePath('./package.json'),
    JSON.stringify(generatePackageJson(name), null, 2),
  )

  // make __test__ dir
  fs.mkdirSync(resolvePath('__tests__'))
  fs.writeFileSync(resolvePath('__tests__/.gitkeep'), '')

  // make src dir
  fs.mkdirSync(resolvePath('src'))

  if (type === 'tsutil') {
    fs.writeFileSync(resolvePath('src/index.ts'), 'export default {}')
  } else {
    const { style } = await inquirer.prompt([
      {
        type: 'list',
        name: 'style',
        choices: ['template', 'tsx'],
        message: '书写风格',
      },
    ])

    // abc-def => AbcDef
    const componentName = kebabCase2pascalCase(name)
    if (style === 'tsx') {
      fs.writeFileSync(
        resolvePath(`src/${componentName}.tsx`),
        genTsxTemplate(componentName),
      )
      fs.writeFileSync(
        resolvePath('src/index.ts'),
        `export { default as ${componentName} } from './${componentName}'\n`,
      )
    } else {
      fs.writeFileSync(
        resolvePath(`src/${componentName}.vue`),
        genVueTemplate(componentName),
      )
      fs.writeFileSync(
        resolvePath('src/index.ts'),
        `export { default as ${componentName} } from './${componentName}.vue'\n`,
      )
    }

    fs.writeFileSync(
      resolvePath('tsconfig.json'),
      `${JSON.stringify(
        {
          extends: '../../tsconfig.json',
          include: ['src', '../../types'],
        },
        null,
        2,
      )}`,
    )

    fs.writeFileSync(
      path.resolve(__dirname, '../packages/apathia/src/index.ts'),
      `export * from '@apathia/apathia.${name}'\n`,
      {
        flag: 'a',
      },
    )

    // set env
    fs.writeFileSync(
      path.resolve(__dirname, '../example/src/env.js'),
      `export const CURRENT_COMPONENT = '${componentName}'\n`,
    )

    // 创建 example demo
    fs.writeFileSync(
      path.resolve(__dirname, `../example/src/pages/${componentName}Demo.vue`),
      genDemoTemplate(componentName),
    )

    consola.info('正在关联依赖...')

    cp.execSync(
      `pnpm install @apathia/apathia.${name} -r --filter @apathia/apathia`,
    )
    cp.execSync(`pnpm install --filter @apathia/apathia.${name}`)

    consola.success('创建成功')
  }
})()
