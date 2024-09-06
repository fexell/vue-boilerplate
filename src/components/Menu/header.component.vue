<script setup>
  import { useMenuCollapsedStore } from '@/stores/menu.store'

  const menuStore = useMenuCollapsedStore()
</script>

<template>
  <header class='menu__header absolute top-0 right-0 flex-initial w-full h-24'>
    <div class='menu__header__container flex h-full justify-end'>
      <button
        class='menu__header__close__button w-24 text-2xl'
        @click='menuStore.toggleIsMenuCollapsed'>
        <font-awesome-icons :icon="[ 'fas', 'xmark' ]" />
      </button>
    </div>
  </header>
</template>