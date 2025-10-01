<script setup lang="ts">
import ButtonText from '@/components/ButtonText.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

function redirectToMain() {
  router.push('/');
}
</script>

<template>
  <div class="not-found">
    <div class="not-found__wrapper">
      <h1 class="not-found__title">404</h1>
      <ButtonText @click="redirectToMain">На главную</ButtonText>
    </div>
  </div>
</template>

<style lang="scss">
.not-found {
  display: grid;
  place-items: center;
  min-height: 100vh;

  &__title {
    font-size: 128px;
    font-weight: 700;
  }

  &__wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 52px;
  }
}
</style>
