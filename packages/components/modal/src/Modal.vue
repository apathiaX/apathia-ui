<template>
  <template v-if="isTemplate">
    <Teleport to=".apathia-modal">
      <Transition v-bind="transitionClass" @after-leave="showScrollbar">
        <div v-if="modelValue" :class="durationClass">
          <div ref="shadeRef" :class="shadeClass">
            <div ref="modalRef" :style="widthStyle" :class="modalClass">
              <div :class="modalHeaderClass">
                <slot name="header" :close="close">
                  <div>
                    <p :class="titleClass">{{ title }}</p>
                    <p v-if="subTitle" :class="subTitleClass">{{ subTitle }}</p>
                  </div>
                  <span v-if="showClose" :class="delIconClass" @click="close"
                    >✕</span
                  >
                </slot>
              </div>
              <div :class="modalContentClass">
                <slot :close="close"></slot>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </template>
  <template v-else>
    <div v-show="modelValue" ref="shadeRef" :class="shadeClass">
      <div ref="modalRef" :style="widthStyle" :class="modalClass">
        <CustomRender v-if="renderHeader" :render="renderHeader" />
        <div v-else :class="modalHeaderClass">
          <div>
            <p :class="titleClass">{{ title }}</p>
            <p v-if="subTitle" :class="subTitleClass">{{ subTitle }}</p>
          </div>
          <span v-if="showClose" :class="delIconClass" @click="close">✕</span>
        </div>
        <div :class="modalContentClass">
          <CustomRender :render="render" />
        </div>
      </div>
    </div>
  </template>
</template>

<script lang="ts" setup>
import { SetupContext, useSlots } from 'vue'
import { CustomRender } from '@apathia/shared'
import { showScrollbar } from './helper'
import { createModal } from './createModal'
import { getModalStyle } from './modal'
import type { ModalProps, ModalEmits } from './types'

defineOptions({
  name: 'ApModal',
})

const props = withDefaults(defineProps<Omit<ModalProps, 'onClose'>>(), {
  modelValue: false,
  title: '',
  subTitle: '',
  render: undefined,
  renderHeader: undefined,
  top: 60,
  width: 640,
  showClose: true,
  maskClosable: false,
  keyboard: true,
  beforeClose: () => true,
})

const emit = defineEmits<ModalEmits>() as SetupContext<ModalEmits>['emit']

const slots = useSlots()

const { shadeRef, modalRef, widthStyle, close, isTemplate } = createModal(
  props,
  { emit, slots },
)

const {
  shadeClass,
  modalClass,
  modalHeaderClass,
  delIconClass,
  modalContentClass,
  titleClass,
  subTitleClass,
  transitionClass,
  durationClass,
} = getModalStyle()
</script>
