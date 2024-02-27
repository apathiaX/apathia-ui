import { ref } from 'vue'

export function useToggle(initial: boolean) {
  const res = ref(!!initial)
  const toggle = () => {
    res.value = !res.value
  }
  const setShow = (value: boolean) => {
    res.value = value
  }

  return [res, toggle, setShow] as const
}
