import { computed, ComputedRef, ref, unref } from 'vue'
import type { Ref, SetupContext } from 'vue'
import type { CheckboxEmits, CheckboxProps } from './types'
import { useInjectProp } from '@apathia/shared'

export default function useCheckbox(
  useProps: CheckboxProps,
  emit: SetupContext<CheckboxEmits>['emit'],
): {
  inputEl: Ref<HTMLElement | null>
  disabled: ComputedRef<boolean | undefined>
  isChecked: ComputedRef<boolean>
  handleChange: () => void
} {
  const propsDisabled = computed(() => useProps.disabled)
  const disabled = useInjectProp('FormDisabled', false, propsDisabled)

  const inputEl = ref<HTMLElement | null>(null)

  const isArrayCheckbox = computed(() => Array.isArray(useProps.modelValue))
  const arrayTrueValue = computed(() =>
    typeof useProps.value !== 'undefined' ? useProps.value : useProps.trueValue,
  )

  const isChecked = computed(() => {
    if (isArrayCheckbox.value) {
      const valArr = useProps.modelValue as Array<unknown>
      return valArr.indexOf(arrayTrueValue.value) > -1
    }
    return useProps.trueValue === useProps.modelValue
  })

  const handleChange = () => {
    if (disabled.value) {
      return
    }

    let newValue
    if (isArrayCheckbox.value) {
      // v-model 绑定数组
      const valArr = useProps.modelValue as Array<unknown>
      const valueTrue = arrayTrueValue.value

      newValue = valArr.slice()
      const index = newValue.indexOf(valueTrue)
      if (index > -1) {
        newValue.splice(index, 1)
      } else {
        newValue.push(valueTrue)
      }
      // 单个 checkbox
    } else {
      newValue = useProps.trueValue
      if (isChecked.value) {
        newValue = useProps.falseValue
      }
    }
    emit('update:modelValue', newValue!)

    const input = inputEl && unref(inputEl)
    if (input) {
      input.focus()
    }

    emit('change', newValue!)
  }

  return {
    inputEl,
    disabled,
    isChecked,
    handleChange,
  }
}
