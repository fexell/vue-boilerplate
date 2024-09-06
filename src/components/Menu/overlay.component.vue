<script setup>
  import { useMenuCollapsedStore } from '@/stores/menu.store'

  const menuStore = useMenuCollapsedStore()
</script>

<template>
  <div
    class='menu__overlay fixed w-screen h-screen top-0 left-0 b bg-black/50'
    @click='menuStore.toggleIsMenuCollapsed'>
    <div class='menu__overlay__container'>

    </div>
  </div>
</template>