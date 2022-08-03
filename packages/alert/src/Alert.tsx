import { defineComponent, onMounted, PropType } from 'vue'
// @ts-ignore
import { style, apply, tw } from '@apathia/apathia.twind'
// @ts-ignore
import { Icon } from '@apathia/apathia.icon'
import type { AlertType } from './AlertFn'
// @ts-ignore
import { RenderFn } from '@apathia/apathia.custom-render'

const iconClassMap: Record<AlertType, [string, string]> = {
  info: ['fa', 'info-circle'],
  warning: ['fa', 'exclamation-triangle'],
  success: ['fa', 'check'],
  danger: ['fa', 'exclamation'],
  default: ['fa', 'info-circle'],
}

export default defineComponent({
  name: 'Alert',

  props: {
    type: {
      type: String as PropType<AlertType>,
      default: 'default',
    },
    duration: {
      type: Number,
      default: 3000,
    },
    title: {
      type: String,
      default: '',
    },
    message: {
      type: String,
      default: '',
    },
    iconClass: {
      type: Array as PropType<string[]>,
      default: () => [],
    },
    showIcon: {
      type: Boolean,
      default: true,
    },
    showClose: {
      type: Boolean,
      default: true,
    },
    render: {
      type: Function as PropType<
        RenderFn<Record<'close', (...args: any) => any>>
      >,
    },
  },

  emits: ['close'],

  setup(props, { emit }) {
    const {
      layout,
      iconWrap,
      delIcon,
      contentClass,
      titleClass,
      messageClass,
    } = initStyle(props.type)
    let timer: any

    function close() {
      clearTimer()
      emit('close')
    }
    function clearTimer() {
      clearTimeout(timer)
    }
    function resetTimer() {
      if (props.duration) {
        clearTimer()
        timer = setTimeout(close, props.duration)
      }
    }

    onMounted(resetTimer)

    const iconClass =
      props.iconClass.length > 0 ? props.iconClass : iconClassMap[props.type]
    const renderIcon =
      props.showIcon && iconClass?.length ? (
        <div class={iconWrap}>
          <Icon name={iconClass} />
        </div>
      ) : null
    const renderDelIcon =
      props.duration === 0 && props.showClose ? (
        <span class={delIcon} onClick={close}>
          ✕
        </span>
      ) : null
    const rendercontent = (
      <p class={contentClass}>
        {props.title && <p class={titleClass}>{props.title}</p>}
        {props.message && <p class={messageClass}>{props.message}</p>}
      </p>
    )

    const render = props.render
      ? props.render({ close })
      : [renderIcon, rendercontent, renderDelIcon]

    return () => (
      <div class={layout} onMouseenter={clearTimer} onMouseleave={resetTimer}>
        {render}
      </div>
    )
  },
})

function initStyle(type: AlertType) {
  const Theme = {
    info: {
      layout: style`bg-gray-100 text-gray-700 bg-opacity-90 border(1 gray-300)`,
    },
    danger: {
      layout: style`bg-red-100 text-red-700 bg-opacity-90 border(1 red-300)`,
    },
    success: {
      layout: style`bg-green-100 text-green-700 bg-opacity-90 border(1 green-300)`,
    },
    warning: {
      layout: style`bg-yellow-100 text-yellow-700 bg-opacity-90 border(1 yellow-300)`,
    },
    default: {
      layout: style`bg-brand-100 text-brand-700 bg-opacity-90 border(1 brand-300)`,
    },
  }

  const theme = Theme[type] || Theme.default
  const layout = tw`${
    theme.layout
  } ${apply`p-2.5 rounded-md flex mt-2 duration-300`}`
  const iconWrap = style`flex-shrink-0 w-4 mr-2`
  const delIcon = style`ml-2 cursor-pointer hover:(text-red-500)`
  const contentClass = style`inline-block font-normal flex-grow break-all`
  const titleClass = style`text-lg`
  const messageClass = style`text-xs leading-normal`

  return {
    layout,
    iconWrap,
    delIcon,
    contentClass,
    titleClass,
    messageClass,
  }
}
