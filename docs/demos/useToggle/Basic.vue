<template>
  <div style="margin: 10px 0">
    Effects:
    <span style="color: red">{{ state }}</span>
  </div>
  <ap-button @click="toggle">Toggle</ap-button>
  <ap-button @click="setState(false)">Toggle False</ap-button>
  <ap-button @click="setState(true)">Toggle True</ap-button>
</template>

<script setup lang="ts">
import { useToggle } from 'apathia-ui'

const [state, toggle, setState] = useToggle(false)
</script>
