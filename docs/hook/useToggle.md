# useToggle

```js
import { useToggle } from '@apathia/apathia'

export default {
  setup() {
    /**
     * val: 响应式的 bool 值
     * toggle: 切换
     * setValue: fun 接收一个 bool 值，并赋值给 val
     */
    const [val, toggle, setValue] = useToggle(false)
  }
}
```