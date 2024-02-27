<template>
  <div :class="styles.transfer">
    <Panel
      v-model="selectedSource"
      :class="styles.panel"
      :data="source"
      :filterable="filterable"
      :filter-placeholder="filterPlaceholder"
      :filter-method="filterMethod"
      :title="titles[0]"
      :default-checked="leftDefaultChecked"
    >
      <template #item="{ option, index }">
        <slot name="source-item" :option="option" :index="index"> </slot>
      </template>
    </Panel>
    <div :class="styles.buttonWrapper">
      <div>
        <ApButton
          small
          :class="styles.button"
          :disabled="source.length === 0"
          @click="addAll"
        >
          <ApIcon>
            <DArrowRight />
          </ApIcon>
        </ApButton>
      </div>
      <div>
        <ApButton
          small
          :class="styles.button"
          :disabled="selectedSource.length === 0"
          @click="addSelected"
        >
          <ApIcon>
            <ArrowRight />
          </ApIcon>
        </ApButton>
      </div>
      <div>
        <ApButton
          small
          :class="styles.button"
          :disabled="selectedTarget.length === 0"
          @click="removeSelected"
        >
          <ApIcon>
            <ArrowLeft />
          </ApIcon>
        </ApButton>
      </div>
      <div>
        <ApButton
          small
          :class="styles.button"
          :disabled="target.length === 0"
          @click="removeAll"
        >
          <ApIcon>
            <DArrowLeft />
          </ApIcon>
        </ApButton>
      </div>
    </div>
    <Panel
      v-model="selectedTarget"
      :class="styles.panel"
      :data="target"
      :filterable="filterable"
      :filter-placeholder="filterPlaceholder"
      :filter-method="filterMethod"
      :title="titles[1]"
      :default-checked="rightDefaultChecked"
    >
      <template #item="{ option, index }">
        <slot name="source-item" :option="option" :index="index"> </slot>
      </template>
    </Panel>
  </div>
</template>

<script setup lang="ts">
import { computed, withDefaults } from 'vue'
import { ApIcon } from '@apathia/components/icon'
import { ApButton } from '@apathia/components/button'
import { apply, tw } from '@apathia/theme'
import {
  ArrowLeft,
  ArrowRight,
  DArrowLeft,
  DArrowRight,
} from '@apathia/icons-vue'
import useTransfer from './useTransfer'
import Panel from './Panel.vue'
import type { TransferDataItem, TransferEmits, TransferProps } from './types'

defineOptions({
  name: 'ApTransfer',
})

const getTransferStyles = () => ({
  transfer: tw`${apply`flex`}`,
  panel: tw`${apply`w-48`}`,
  buttonWrapper: tw`${apply`self-center text-center mx-4`}`,
  button: tw`${apply`w-12 my-0.5`}`,
})

const props = withDefaults(defineProps<TransferProps>(), {
  filterPlaceholder: '请输入搜索内容',
  filterMethod: (word: string, option: TransferDataItem) =>
    option.label.indexOf(word) > -1,
  targetOrder: 'original',
  titles: () => ['列表1', '列表2'],
  propKeys: () => ({
    value: 'value',
    label: 'label',
    disabled: 'disabled',
  }),
  leftDefaultChecked: () => [],
  rightDefaultChecked: () => [],
})

const emit = defineEmits<TransferEmits>()

const useProps = computed(() => ({
  modelValue: props.modelValue,
  data: props.data,
  filterable: props.filterable,
  filterPlaceholder: props.filterPlaceholder,
  filterMethod: props.filterMethod,
  targetOrder: props.targetOrder,
  titles: props.titles,
  propKeys: props.propKeys,
  leftDefaultChecked: props.leftDefaultChecked,
  rightDefaultChecked: props.rightDefaultChecked,
}))

const {
  selectedSource,
  selectedTarget,

  source,
  target,

  addAll,
  removeAll,
  addSelected,
  removeSelected,
} = useTransfer(useProps, emit)

const styles = getTransferStyles()
</script>
./types
