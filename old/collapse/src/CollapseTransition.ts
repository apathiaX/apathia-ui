import { defineComponent, h, Transition } from 'vue'
import { useTransition } from './useTransition'

export default defineComponent({
  name: 'CollapseTransition',

  props: {
    duration: {
      type: Number,
      default: 400,
    },
  },

  setup(props, { slots }) {
    const { getTransitionProps } = useTransition(props)

    return () => h(Transition, getTransitionProps(), slots)
  },
})
