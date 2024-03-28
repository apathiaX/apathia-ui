<template>
  <template v-if="isTemplate">
    <Teleport to=".apathia-modal">
      <Transition
        v-bind="styles.transitionClass[0]"
        @after-leave="showScrollbar"
      >
        <div v-if="modelValue" :class="styles.duration">
          <div ref="shadeRef" :class="styles.shade">
            <div ref="modalRef" :style="widthStyle" :class="styles.modal">
              <div :class="styles.header">
                <slot name="header" :close="close">
                  <div>
                    <p :class="styles.title">{{ title }}</p>
                    <p v-if="subTitle" :class="styles.title">{{ subTitle }}</p>
                  </div>
                  <span v-if="showClose" :class="styles.delIcon" @click="close"
                    >✕</span
                  >
                </slot>
              </div>
              <div :class="styles.content">
                <slot :close="close"></slot>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </template>
  <template v-else>
    <div v-show="modelValue" ref="shadeRef" :class="styles.shade">
      <div ref="modalRef" :style="widthStyle" :class="styles.modal">
        <CustomRender
          v-if="renderHeader"
          :render="
            () =>
              isFunction(renderHeader) && renderHeader
                ? renderHeader({ close })
                : renderHeader
          "
        />
        <div v-else :class="styles.header">
          <div>
            <p :class="styles.title">{{ title }}</p>
            <p v-if="subTitle" :class="styles.subTitle">{{ subTitle }}</p>
          </div>
          <span v-if="showClose" :class="styles.delIcon" @click="close">✕</span>
        </div>
        <div :class="styles.content">
          <CustomRender :render="render" />
        </div>
      </div>
    </div>
  </template>
</template>

<script lang="ts" setup>
import { SetupContext, useSlots } from 'vue'
import { CustomRender, isFunction } from '@apathia/shared'
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

const styles = getModalStyle()
</script>
