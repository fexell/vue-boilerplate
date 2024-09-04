<script setup>
  import HeaderComponent from './components/Header/Header.component.vue'
  import ContentComponent from './components/Content/Content.component.vue'
  import FooterComponent from './components/Footer/Footer.component.vue'
  import MenuComponent from './components/Menu/Menu.component.vue'
</script>

<template>
  <div class='app__container min-h-screen flex flex-col font-lato'>
    <HeaderComponent />
    <ContentComponent />
    <FooterComponent />
    <MenuComponent />
  </div>
</template>

<style>

</style>