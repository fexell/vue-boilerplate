<script setup>
  import { useMenuCollapsedStore } from '@/stores/menu.store'

  const menuStore = useMenuCollapsedStore()
</script>

<template>
  <div class='header__right flex-initial w-24'>
    <div class='header__right__container flex justify-center items-center h-full'>
      <button
        class='header__right__menu__toggle__button p-2 w-full h-full hover:bg-gray-100'
        @click='menuStore.toggleIsMenuCollapsed()'>
        <font-awesome-icons :icon="[ 'fas', 'bars' ]" />
      </button>
    </div>
  </div>
</template>

<style lang='sass' scoped>
.header__right
  > .header__right__container
    > .header__right__menu__toggle__button
      font:
        size: 1.5rem
</style>