<script setup>
  import { ref, onMounted } from 'vue'
  import { RouterLink } from 'vue-router'

  const props = defineProps([ 'to' ])
</script>

<template>
  <li>
    <RouterLink
      ref='rl'
      :to='props.to'
      class='menu__item text-6xl font-bold'>
        <slot></slot>
    </RouterLink>
  </li>
</template>

<style lang='sass' scoped>
  .router-link-active
    color: #f97316
</style>