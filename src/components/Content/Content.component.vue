<script setup>
  import { RouterView } from 'vue-router'
</script>

<template>
  <div id='Content' class='content component flex-1 bg-gray-100'>
    <div class='content__container component__container'>
      <RouterView />
    </div>
  </div>
</template>

<style lang='sass' scoped>

</style>