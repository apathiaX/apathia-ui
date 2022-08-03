import { computed, defineComponent, h, PropType } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import './register'

export default defineComponent({
  name: 'Icon',

  components: {
    FontAwesomeIcon,
  },

  props: {
    name: {
      type: Array as PropType<Array<string>>,
      default: () => [],
    },
  },

  setup(props, { attrs }) {
    // FIX: https://github.com/FortAwesome/vue-fontawesome/issues/250
    // FIX: docs:https://fontawesome.com/docs/web/use-with/vue/add-icons
    const key = computed(() => props.name[props.name.length - 1])

    return () =>
      h(FontAwesomeIcon, {
        ...attrs,
        icon: props.name,
        key: key.value,
      })
  },
})
