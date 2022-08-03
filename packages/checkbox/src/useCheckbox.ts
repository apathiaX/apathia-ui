import { computed, ComputedRef, unref } from 'vue'
import type { Ref, SetupContext } from 'vue'

interface UserProps {
  disabled: Ref<boolean>
  modelValue: Ref<string | number | boolean | Array<unknown>>
  trueValue: Ref<string | number | boolean>
  falseValue: Ref<string | number | boolean>
  value: Ref<string | number | undefined>
  inputEl: Ref<HTMLInputElement | null>
}

export default function useCheckbox(
  userProps: UserProps,
  ctx: SetupContext,
): {
  isChecked: ComputedRef<boolean>
  handleChange: () => void
} {
  const { disabled, modelValue, trueValue, falseValue, value, inputEl } =
    userProps

  const isArrayCheckbox = computed(() => Array.isArray(modelValue.value))
  const arrayTrueValue = computed(() =>
    typeof value.value !== 'undefined' ? value.value : trueValue.value,
  )

  const isChecked = computed(() => {
    if (isArrayCheckbox.value) {
      const valArr = modelValue.value as Array<unknown>
      return valArr.indexOf(arrayTrueValue.value) > -1
    }
    return trueValue.value === modelValue.value
  })

  const handleChange = () => {
    if (disabled.value) {
      return
    }

    let newValue
    if (isArrayCheckbox.value) {
      // v-model 绑定数组
      const valArr = modelValue.value as Array<unknown>
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
      newValue = trueValue.value
      if (isChecked.value) {
        newValue = falseValue.value
      }
    }
    ctx.emit('update:modelValue', newValue)

    const input = inputEl && unref(inputEl)
    if (input) {
      input.focus()
    }

    ctx.emit('change', newValue)
  }

  return {
    isChecked,
    handleChange,
  }
}
