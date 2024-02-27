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
      <ApButton secondary @click="cancel">{{ cancelText }}</ApButton>
      <ApButton primary @click="confirm">{{ confirmText }}</ApButton>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ApButton } from '@apathia/components/button'
import { CustomRender } from '@apathia/shared'
import { getConfirmStyle } from './confirm'
import type { ConfirmProps } from './types'

defineOptions({
  name: 'ApConfirm',
})

const props = withDefaults(defineProps<ConfirmProps>(), {
  render: undefined,
  renderFooter: undefined,
  confirmText: '确认',
  cancelText: '取消',
  confirm: undefined,
  cancel: undefined,
  btnPosition: 'right',
})

const btnLayout = getConfirmStyle(props.btnPosition)
</script>
