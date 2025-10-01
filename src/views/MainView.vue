<script setup lang="ts">
import { RouterView } from 'vue-router';
import CategoryList from './../components/CategoryList.vue';
import ProfileAvatar from './../components/ProfileAvatar.vue';
</script>

<template>
  <div class="app">
    <nav class="app__nav">
      <ProfileAvatar />
      <CategoryList />
    </nav>
    <main>
      <RouterView />
    </main>
  </div>
</template>

<style lang="scss">
.app {
  display: flex;
  gap: 200px;
  min-height: calc(100vh - 140px);
  max-width: 1470px;
  padding: 0 10px;
  margin: 140px auto 0 auto;

  &__nav {
    min-width: 320px;
  }
}

main {
  width: 100%;
}
</style>
