<script setup>
  import { RouterLink } from 'vue-router'

  const props = defineProps([ 'to' ])
</script>

<template>
  <li>
    <RouterLink :to='props.to' class='text-6xl font-bold'><slot></slot></RouterLink>
  </li>
</template>

<style lang='sass' scoped>
  .router-link-active
    color: #00CC00
</style>