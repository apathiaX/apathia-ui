import {
  defineComponent,
  ref,
  nextTick,
  TransitionGroup,
  PropType,
  h,
  App,
  inject,
} from 'vue'
import { tw } from '@apathia/apathia.twind'
import { mountComponent, mountContainerDom } from '@apathia/apathia.shared'
import { tryCloseLastModal } from './modalStack'
import { hideScrollbar, showScrollbar } from './helper'
import Modal from './Modal.vue'
import { ModalListItemProps, ModalProps } from './types'

const modalDefaultProps = {
  modelValue: false,
  title: 'Title',
  subTitle: '',
  top: 60,
  width: 640,
  showClose: true,
  maskClosable: false,
  keyboard: true,
  render: '',
}

const ModalContainer = defineComponent({
  name: 'ModalContainer',

  props: {
    modalList: {
      type: Array as PropType<Array<ModalListItemProps>>,
      default: () => [],
    },
  },

  emits: ['remove'],

  setup(props, { emit }) {
    const remove = (id: string) => emit('remove', id)

    const transitionGroupClass = {
      'enter-from-class': tw`opacity-0`,
      'enter-active-class': tw`duration-500`,
      'leave-to-class': tw`opacity-0`,
      'leave-active-class': tw`duration-500`,
    }

    return () =>
      h(
        TransitionGroup,
        { ...transitionGroupClass, onAfterLeave: showScrollbar, tag: 'div' },
        {
          default() {
            return props.modalList.map(option =>
              h(
                'div',
                { key: option.id },
                h(Modal, {
                  ...option.props,
                  onClose: () => {
                    remove(option.id)
                    option.props.onClose?.()
                  },
                }),
              ),
            )
          },
        },
      )
  },
})

const modalList = ref<ModalListItemProps[]>([])

const getID = () => `${Date.now()}`
const removeModal = (id: string) => {
  const index = modalList.value.findIndex(item => item.id === id)
  modalList.value.splice(index, 1)
}
const addModal = (props: ModalProps) => {
  const id = getID()
  const modalInstance = ref({ props: { ...modalDefaultProps, ...props }, id })
  modalList.value.push(modalInstance.value)
  nextTick(() => {
    modalInstance.value.props.modelValue = true
  })
}

const modalKey = 'apathia-modal'

type ModalUtils = {
  modal: (props: ModalProps) => void
  remove: (isEsc?: boolean) => void
}

export function modalInstall(app: App, injectKey?: string) {
  const appContext = app._context

  mountContainerDom('modal') // 挂载 dom
  mountComponent(
    h(ModalContainer, {
      modalList: modalList.value,
      onRemove: removeModal,
    }),
    '.apathia-modal',
    appContext,
  )

  function open(props: ModalProps) {
    addModal(props)
    hideScrollbar()
  }

  const modalUtils: ModalUtils = {
    modal: open,
    remove: tryCloseLastModal,
  }

  app.provide(injectKey || modalKey, modalUtils)
  app.config.globalProperties.$modal = open
  app.config.globalProperties.$removeModal = tryCloseLastModal
}

export function useModal(key?: string) {
  return inject(key || modalKey) as ModalUtils
}
