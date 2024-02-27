<template>
  <div>
    <Card title="基础用法">
      <Popper placement="bottom" trigger="hover" :content="content">
        基础用法
      </Popper>
    </Card>

    <Card title="solt用法+focus+show-arrow">
      <Popper placement="left" trigger="focus" :show-arrow="false">
        <button>多用法一</button>
        <template #content>
          <div>asdasdsad</div>
          <div>asdasdsad</div>
          <div>asdasdsad</div>
          <div>asdasdsad</div>
        </template>
      </Popper>
    </Card>
    <Card title="solt用法+focus+show-arrow">
      <Popper placement="left" :show-arrow="true">
        <button>多用法一</button>
        <template #content>
          <div>asdasdsad</div>
          <div>asdasdsad</div>
          <div>asdasdsad</div>
          <div>asdasdsad</div>
        </template>
      </Popper>
    </Card>

    <Card title="click用法+placement+dark">
      <Popper placement="bottom-start" dark>
        多用法二
        <template #content>
          <div>asdasdsadasdasdasdasdasdasdasdasdasd1111111111333111333</div>
          <div>asdasdsadasdsaaaaaaa</div>
          <div>asdasdsad</div>
          <div>asdasdsad</div>
          <div>asdasdsad</div>
        </template>
      </Popper>
    </Card>

    <Card title="click用法+hide+show事件">
      <Popper placement="bottom" dark @hide="hide" @show="show">
        多用法三
        <template #content>
          <div>asdasdsad</div>
          <div>asdasdsad</div>
          <div>asdasdsad</div>
          <div>asdasdsad</div>
        </template>
      </Popper>
    </Card>

    <Card title="manual">
      <Popper
        v-model="visible"
        placement="bottom"
        :dark="dark"
        trigger="manual"
      >
        <button @click="handleManual">trigger</button>
        <template #content>
          <div>asdasdsad</div>
          <div>asdasdsad</div>
          <div>asdasdsad</div>
        </template>
      </Popper>
    </Card>
    <Card title="transition">
      <Popper placement="bottom" dark :transition-class="transitionStyle">
        <button>trigger</button>
        <template #content>
          <div>asdasdsad</div>
          <div>asdasdsad</div>
          <div>asdasdsad</div>
        </template>
      </Popper>
    </Card>
    <button @click="toggle">toggle</button>

    <Card title="click+delayClose">
      <Popper
        v-model="visible1"
        placement="bottom"
        :dark="dark"
        :delay-close="1000"
      >
        <button>trigger</button>
        <template #content>
          <div>asdasdsad</div>
          <div>asdasdsad</div>
          <div>asdasdsad</div>
        </template>
      </Popper>
    </Card>
    <Card title="focus+delayClose">
      <Popper placement="top" :dark="dark" trigger="focus" :delay-close="1000">
        <button>trigger</button>
        <template #content>
          <div>asdasdsad</div>
          <div>asdasdsad</div>
          <div>asdasdsad</div>
        </template>
      </Popper>
    </Card>
    <Card title="render">
      <button ref="renderRef">trigger</button>
    </Card>
    <Card title="render2">
      <button ref="render2Ref">trigger2</button>
    </Card>
    <button @click="test">test</button>
  </div>
</template>

<script>
import { ref, h } from 'vue'
import { tw, apply } from 'twind'
import { css } from 'twind/css'
import { Popper, usePoppertip } from 'apathia-ui'

export default {
  components: {
    Popper,
  },

  setup() {
    const show = () => {
      console.log('show')
    }
    const hide = () => {
      console.log('hide')
    }
    const content = ref('wowowowo')
    const visible = ref(false)
    const visible1 = ref(false)
    const handleManual = () => {
      visible.value = !visible.value
    }
    const disable = ref(true)
    const dark = ref(true)
    const toggle = () => {
      dark.value = !dark.value
    }
    const render1 = () => h('div', '函数式调用')
    const renderRef = ref(null)
    const render2Ref = ref(null)

    const { popper } = usePoppertip()
    const test = () => {
      popper({
        target: renderRef.value,
        render: render1,
      })
      popper({
        target: render2Ref.value,
        render: render1,
        placement: 'bottom',
      })
    }

    const getStyles = () => {
      const placementTranstion = css`
        ${apply`transform scale-y-100 opacity-100`}
        transition: transform 300ms cubic-bezier(0.23, 1, 0.32, 1),opacity 300ms cubic-bezier(0.23, 1, 0.32, 1);
        transform-origin: center top;
        &[data-popper-placement^='top'] {
          transform-origin: center bottom;
        }
      `
      const active = tw`${apply(placementTranstion)}`
      const state = tw`opacity-0 transform scale-y-0`
      return {
        'enter-active-class': active,
        'leave-active-class': active,
        'enter-from-class': state,
        'leave-to-class': state,
      }
    }
    const transitionStyle = getStyles()

    return {
      show,
      hide,
      disable,
      visible,
      handleManual,
      content,
      toggle,
      dark,
      transitionStyle,
      render1,
      renderRef,
      render2Ref,
      test,
      visible1,
    }
  },
}
</script>
