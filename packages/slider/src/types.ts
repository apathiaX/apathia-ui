import { StyleValue } from "vue";

export type Marker = Record<
  number,
  Partial<{ label: string; style: StyleValue }>
>
