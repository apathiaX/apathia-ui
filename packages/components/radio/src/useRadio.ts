import {
  computed,
  inject,
  isRef,
  ref,
  Ref,
  unref,
  type SetupContext,
} from 'vue'
import { noop, useInjectProp } from '@apathia/shared'
import type { GroupData, RadioEmits, RadioProp, RadioUseReturn } from './types'

export default function useRadio(
  useProps: RadioProp,
  emit: SetupContext<RadioEmits>['emit'],
): RadioUseReturn {
  const propsDisabled = computed(() => useProps.disabled)
  const formDisabled = useInjectProp('FormDisabled', false, propsDisabled)
  const groupState = inject<null | Ref<GroupData>>('groupState', null)

  const disabled = computed(() => {
    return (
      formDisabled.value || (groupState && groupState.value.disabled) || false
    )
  })

  const inputEl = ref<HTMLInputElement | null>(null)

  const changeHandler = inject<(val: string | number | boolean) => void>(
    'changeHandler',
    noop,
  )

  const isSelected = computed(() =>
    isRef(groupState)
      ? unref(groupState).value === useProps.value
      : useProps.modelValue === useProps.value,
  )

  const radioValue = computed(() => useProps.value)

  const select = () => {
    if (disabled.value) {
      return
    }

    emit('update:modelValue', radioValue.value)

    const input = inputEl && unref(inputEl)
    input && input.focus()

    emit('change', radioValue.value)
    changeHandler(radioValue.value)
  }

  return {
    inputEl,
    isSelected,
    isDisabled: disabled,
    value: radioValue,
    handleChange: select,
  }
}
