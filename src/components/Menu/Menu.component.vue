<script setup>
  import OverlayComponent from './overlay.component.vue'
  import NavComponent from './nav.component.vue'

  import { useMenuCollapsedStore } from '@/stores/menu.store'

  const menuStore = useMenuCollapsedStore()
</script>

<template>
  <transition name='fadeIn'>
    <div
      id='Menu'
      class='menu component fixed top-0 left-0 w-screen h-screen'
      v-show='menuStore.isMenuCollapsed'>
      <div class='menu__container component__container'>
        <OverlayComponent />
        <NavComponent />
      </div>
    </div>
</transition>
</template>

<style lang='sass' scoped>
  .fadeIn-enter-active,
  .fadeIn-leave-active
    transition: opacity 250ms ease

  .fadeIn-enter-from,
  .fadeIn-leave-to
    opacity: 0
</style>