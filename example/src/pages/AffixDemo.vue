<template>
  <div style="height: 200px">aaa</div>
  <div style="height: 200px">
    <Affix :offset-top="100">
      <BaseButton pink>hello affix</BaseButton>
    </Affix>
  </div>
  <div style="height: 200px">aaa</div>
  <div style="height: 200px">aaa</div>
  <div style="height: 200px">aaa</div>
  <div style="height: 200px">aaa</div>
  <div style="height: 200px">aaa</div>
</template>

<script setup lang="ts">
import { Affix, BaseButton } from '@apathia/apathia'
</script>
