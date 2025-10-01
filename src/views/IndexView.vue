<script setup lang="ts"></script>

<template>
  <div class="index">
    <h1 class="index__title">Добро пожаловать в Bookmarkly!</h1>
    <p class="index__desk">
      Чтобы начать пользоваться выберити категорию закладок или создайте новую.
    </p>
  </div>
</template>

<style lang="scss">
.index {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;
  min-height: 50vh;

  &__title {
    font-size: 24px;
    font-weight: 500;
  }

  &__desk {
    font-size: 16px;
  }
}
</style>
