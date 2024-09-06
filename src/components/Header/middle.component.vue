<script setup>
  import { RouterLink } from 'vue-router'
</script>

<template>
  <div class='header__middle flex-1'>
    <div class='header__middle__container flex justify-center items-center h-full'>
      <div class='header__middle__heading__logo inline-block h-fit'>
        <div class='header__middle__heading__logo__container'>
          <RouterLink to='/' class='inline text-center'>
            <h1 class='text-2xl font-bold'>Logo</h1>
            <span class='text-slate-500'>Lorem ipsum dolor</span>
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>