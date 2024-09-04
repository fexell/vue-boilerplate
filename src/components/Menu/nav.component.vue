<script setup>
  import MenuHeaderComponent from './header.component.vue'
  import MenuItemComponent from './item.component.vue'

  import { useMenuCollapsedStore } from '@/stores/menu.store'

  const menuStore = useMenuCollapsedStore()
</script>

<template>
  <transition name='slideIn'>
    <nav
      class='menu__nav fixed top-0 right-0 h-screen bg-white'
      v-if='menuStore.isMenuCollapsed'>
      <div class='menu__nav__container relative flex flex-col h-full'>
        <MenuHeaderComponent />
        <ul class='flex flex-col flex-1 h-full space-y-4 justify-center items-center'>
          <MenuItemComponent to='/'>Home</MenuItemComponent>
          <MenuItemComponent to='/about'>About</MenuItemComponent>
        </ul>
      </div>
    </nav>
  </transition>
</template>

<style lang='sass' scoped>
  .slideIn-enter-active,
  .slideIn-leave-active
    transition: margin-right 250ms ease

  .slideIn-enter-from,
  .slideIn-leave-to
    margin:
      right: -100vw

  .menu__nav
    width: 50rem

    @media screen and (max-width: 992px)
      width: 100%
</style>