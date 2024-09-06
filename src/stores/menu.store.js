import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useMenuCollapsedStore = defineStore('menu-collapsed', () => {
  const isMenuCollapsed = ref(false)

  const toggleIsMenuCollapsed = () => {
    isMenuCollapsed.value = !isMenuCollapsed.value
  }

  return { isMenuCollapsed, toggleIsMenuCollapsed }
})