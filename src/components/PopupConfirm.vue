<script setup lang="ts">
import ButtonText from './ButtonText.vue';

const { isOpened, text } = defineProps<{ isOpened: boolean; text: string }>();
</script>

<template>
  <div v-if="isOpened" class="cover">
    <div class="cover__popup">
      {{ text }}
      <div class="cover__confirm">
        <ButtonText>Да</ButtonText>
        <ButtonText>Нет</ButtonText>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.cover {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-inactive);

  &__popup {
    padding: 20px;
    min-width: 350px;
    border-radius: 20px;
    background: var(--color-bg);
  }

  &__confirm {
    margin-top: 16px;
    display: flex;

  }
}
</style>
