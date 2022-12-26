import { defineComponent, onMounted, PropType } from 'vue'
import { Icon } from '@apathia/apathia.icon'
import type { AlertType } from './AlertFn'
import { RenderFn } from '@apathia/apathia.custom-render'
import { style, apply, tw } from '@apathia/apathia.twind'
// import { initAlertStyle } from './styles'

const iconClassMap: Record<AlertType, [string, string]> = {
  info: ['fa', 'info-circle'],
  warning: ['fa', 'exclamation-triangle'],
  success: ['fa', 'check'],
  danger: ['fa', 'exclamation'],
  default: ['fa', 'info-circle'],
}

function initAlertStyle(type: AlertType) {
  const Theme = {
    info: {
      layout: style`bg-fill-light text-fill-primary`,
    },
    danger: {
      layout: style`bg-error-light text-error-primary`,
    },
    success: {
      layout: style`bg-success-light text-success-primary`,
    },
    warning: {
      layout: style`bg-warning-light text-warning-primary`,
    },
    default: {
      layout: style`bg-brand-light text-brand-primary`,
    },
  }

  const theme = Theme[type] || Theme.default
  const layout = tw`${
    theme.layout
  } ${apply`p-2.5 rounded flex mt-2 duration-300`}`
  const iconWrap = style`flex-shrink-0 w-4 mr-2`
  const delIcon = style`ml-2 cursor-pointer hover:(text-error-active)`
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
      default: false,
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
    } = initAlertStyle(props.type)
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
      props.duration === 0 ||  props.showClose ? (
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
