import { TransitionGroup, defineComponent, ref, PropType, h } from 'vue'
import { style, tw } from '@apathia/theme'
import { mountComponent } from '@apathia/shared'
import BaseAlert from './Alert.vue'
import type { AlertListProps, AlertProps } from './types'

const AlertContainer = defineComponent({
  name: 'AlertContainer',

  props: {
    alertList: {
      type: Array as PropType<Array<AlertListProps>>,
      default: () => [],
    },
  },

  emits: ['remove'],

  setup(props, { emit }) {
    const remove = (index: string) => emit('remove', index)

    const rootClass = style`left-1/2 -translate-x-1/2 fixed z-alert top-1`
    const transitionGroupClass = {
      'enter-from-class': tw`opacity-0`,
      'leave-to-class': tw`opacity-0`,
    }

    const wrapperClass = style`flex flex-col items-center`

    return () =>
      h(
        'div',
        {
          class: rootClass,
        },
        [
          h(
            TransitionGroup,
            { ...transitionGroupClass, tag: 'div', class: wrapperClass },
            {
              default: () =>
                props.alertList.map(option =>
                  h(BaseAlert, {
                    ...option.props,
                    key: option.id,
                    onClose: () => {
                      remove(option.id)
                    },
                  }),
                ),
            },
          ),
        ],
      )
  },
})

const alertList = ref<Array<AlertListProps>>([])

const remove = (id: string) => {
  const index = alertList.value.findIndex(item => item.id === id)
  alertList.value.splice(index, 1)
}
const getID = () => `${Date.now()}`

const AlertType = ['info', 'warning', 'danger', 'success', 'primary'] as const

interface BaseAlerter {
  (props: AlertProps): void
  closeAll: () => void
}

export type Alerter = {
  [K in (typeof AlertType)[number]]: (
    message: string,
    props?: Omit<AlertProps, 'type' | 'message'>,
  ) => void
} & BaseAlerter

const Alert = ((props: AlertProps) => {
  const id: string = getID()
  alertList.value.push({ props, id })

  if (!document.querySelector('.apathia-alert')) {
    // 在第一次调用的时候挂载一次
    const alertContainerDom = document.createElement('div')
    alertContainerDom.className = 'apathia-alert'
    document.body.appendChild(alertContainerDom)
    mountComponent(
      h(AlertContainer, { alertList: alertList.value, onRemove: remove }),
      alertContainerDom,
    )
  }
}) as Alerter

Alert.closeAll = () => (alertList.value = [])

Alert.info = (message, props) => Alert({ type: 'info', message, ...props })
Alert.warning = (message, props) =>
  Alert({ type: 'warning', message, ...props })
Alert.danger = (message, props) => Alert({ type: 'danger', message, ...props })
Alert.success = (message, props) =>
  Alert({ type: 'success', message, ...props })
Alert.primary = (message, props) =>
  Alert({ type: 'primary', message, ...props })

export default Alert
