<template>
  <div>
    <CustomRender :render="render" />
    <CustomRender
      v-if="renderFooter"
      :render="renderFooter"
      :confirm="confirm"
      :cancel="cancel"
    />
    <div v-else :class="btnLayout">
      <BaseButton secondary @click="cancel">{{ cancelText }}</BaseButton>
      <BaseButton primary @click="confirm">{{ confirmText }}</BaseButton>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { BaseButton } from '@apathia/apathia.button'
import { CustomRender } from '@apathia/apathia.custom-render'
import type { RenderCustom } from '@apathia/apathia.custom-render'
import { tw, apply } from '@apathia/apathia.twind'

export default defineComponent({
  name: 'Confirm',

  components: {
    BaseButton,
    CustomRender,
  },

  props: {
    render: {
      type: [String, Function] as PropType<RenderCustom>,
    },
    renderFooter: {
      type: [String, Function] as PropType<
        RenderCustom<{
          confirm?: (...args: any) => any
          cancel?: (...args: any) => any
        }>
      >,
    },
    confirmText: {
      type: String,
      default: '确认',
    },
    cancelText: {
      type: String,
      default: '取消',
    },
    confirm: {
      type: Function,
      required: true,
    },
    cancel: {
      type: Function,
      required: true,
    },
    btnPosition: {
      type: String as PropType<'left' | 'center' | 'right'>,
      default: 'right',
    },
  },

  setup(props) {
    return {
      btnLayout: initStyle(props.btnPosition),
    }
  },
})

function initStyle(pos: 'left' | 'center' | 'right') {
  const baseLayout = apply`mt-4 flex`

  const position = {
    left: apply`justify-start`,
    center: apply`justify-center`,
    right: apply`justify-end`,
  }

  return tw`${baseLayout} ${position[pos] || position.left}`
}
</script>
