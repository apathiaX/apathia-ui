<template>
  <div style="height: 200px">aaa</div>
  <div style="height: 200px">
    <ap-affix :offset-top="100">
      <ap-button pink>hello affix</ap-button>
    </ap-affix>
  </div>
  <div style="height: 200px">aaa</div>
  <div style="height: 200px">aaa</div>
  <div style="height: 200px">aaa</div>
  <div style="height: 200px">aaa</div>
  <div style="height: 200px">aaa</div>
</template>

<script setup lang="ts">
import { ApAffix, ApButton } from 'apathia-ui'
</script>
