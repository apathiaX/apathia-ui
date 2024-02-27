import { computed, isRef, Ref, unref } from 'vue'
import type { SetupContext } from 'vue'

interface groupData {
  value: string | number | boolean
  disabled: boolean
}
interface UserProps {
  disabled: Ref<boolean>
  modelValue: Ref<string | number | boolean>
  value: Ref<string | number | boolean>
  groupState: Ref<groupData> | null
  changeHandler: (val: string | number | boolean) => void
  inputEl: Ref<HTMLInputElement | null>
}

export default function (
  userProps: UserProps,
  ctx: SetupContext,
): {
  isSelected: Ref<boolean>
  handleChange: () => void
} {
  const { disabled, modelValue, value, groupState, changeHandler, inputEl } =
    userProps

  let isSelected

  if (isRef(groupState)) {
    // 根据Radiogroup的值更新selected状态
    isSelected = computed(() => unref(groupState).value === value.value)
  } else {
    // 根据自身的值更新selected状态
    isSelected = computed(() => modelValue.value === value.value)
  }

  const select = () => {
    if (disabled.value) {
      return
    }

    ctx.emit('update:modelValue', value.value)

    const input = inputEl && unref(inputEl)
    input && input.focus()

    ctx.emit('change', value.value)
    changeHandler(value.value)
  }

  return {
    isSelected,
    handleChange: select,
  }
}
