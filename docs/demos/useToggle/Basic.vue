<template>
  <div style="margin: 10px 0">
    Effects:
    <span style="color: red">{{ currState }}</span>
  </div>
  <ap-button @click="toggleFn">Toggle</ap-button>
  <ap-button @click="setStateFn(false)">Toggle False</ap-button>
  <ap-button @click="setStateFn(true)">Toggle True</ap-button>
</template>

<script setup lang="ts">
import { useToggle } from 'apathia-ui'

const [state, toggle, setState] = useToggle(false)
const currState = state
const toggleFn = toggle
const setStateFn = setState
</script>
