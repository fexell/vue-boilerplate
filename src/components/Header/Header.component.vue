<script setup>
  import HeaderLeftComponent from './left.component.vue'
  import HeaderMiddleComponent from './middle.component.vue'
  import HeaderRightComponent from './right.component.vue'
</script>

<template>
  <header id='Header' class='header component fixed flex-initial w-full h-24 bg-white'>
    <div class='header__container component__container flex flex-row h-full'>
      <HeaderLeftComponent />
      <HeaderMiddleComponent />
      <HeaderRightComponent />
    </div>
  </header>
</template>

<style lang='sass' scoped>

</style>