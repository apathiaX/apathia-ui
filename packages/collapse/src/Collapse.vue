<template>
  <slot name="toggleHeader" :show="show" :toggle-show="toggleShow">
    <div
      :class="[styles.headerClass, disabled ? styles.headerDisableClass : '']"
      @click="handleClick"
    >
      <span v-if="showArrow">
        <Icon
          :name="['fa', 'caret-right']"
          :class="styles.icon"
          :style="{ transform: `rotate(${show ? 90 : 0}deg)` }"
        />
      </span>
      <slot name="header">
        <div>{{ header }}</div>
      </slot>
    </div>
  </slot>
  <CollapseTransition :duration="duration">
    <div v-show="show">
      <slot></slot>
    </div>
  </CollapseTransition>
</template>

<script lang="ts">
import { watch, defineComponent, PropType } from 'vue'
// @ts-ignore
import { Icon } from '@apathia/apathia.icon'
// @ts-ignore
import { useToggle } from '@apathia/apathia.hooks'
// @ts-ignore
import { style } from '@apathia/apathia.twind'
import CollapseTransition from './CollapseTransition'

export default defineComponent({
  name: 'Collapse',

  components: {
    CollapseTransition,
    Icon,
  },

  props: {
    expand: {
      type: Boolean as PropType<boolean>,
      default: true,
    },
    duration: {
      type: Number as PropType<number>,
      default: 400,
    },
    header: {
      type: String as PropType<string>,
      default: 'header',
    },
    showArrow: {
      type: Boolean as PropType<boolean>,
      default: true,
    },
    disabled: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
  },

  setup(props) {
    const [show, toggleShow, setShow] = useToggle(props.expand)
    const styles = initStyle()

    watch(
      () => props.expand,
      (val: boolean) => setShow(val),
    )

    const handleClick = () => {
      if (!props.disabled) {
        toggleShow()
      }
    }

    return {
      handleClick,
      show,
      toggleShow,
      styles,
    }
  },
})

function initStyle() {
  const headerClass = style`flex items-center h-10 leading-10 bg-fill-light rounded cursor-pointer`
  const rollClass = style`rotate-90 translate-y-0.5 duration-300`
  const headerDisableClass = style`cursor-not-allowed`
  const icon = style`mx-2 transition`

  return {
    headerClass,
    rollClass,
    headerDisableClass,
    icon,
  }
}
</script>
