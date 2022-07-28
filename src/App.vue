<script setup>
import { RouterView } from 'vue-router'
</script>
<template>
  <header class="app">
    <RouterView />
  </header>
</template>

<style lang="scss">
@import './styles/main.scss';

#app {
  width: 100%;
  margin: auto;
  font-family: 'Noto Sans';
  font-weight: 400;
  color: var(--main-font-color);
  cursor: default;
}
</style>

