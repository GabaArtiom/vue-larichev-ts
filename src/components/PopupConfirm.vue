<script setup lang="ts">
import ButtonText from './ButtonText.vue';

const { isOpened, text } = defineProps<{
  isOpened: boolean;
  text: string;
}>();

const emit = defineEmits<{
  (e: 'ok'): void;
  (e: 'cancel'): void;
}>();
</script>

<template>
  <div v-if="isOpened" class="cover">
    <div class="popup">
      {{ text }}
      <div class="popup__confirm">
        <ButtonText @click="emit('ok')">Да</ButtonText>
        <ButtonText @click="emit('cancel')">Нет</ButtonText>
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
}

.popup {
  padding: 20px;
  /* min-width: 350px; */
  border-radius: 20px;
  background: var(--color-bg);

  &__confirm {
    display: flex;
    margin-top: 16px;
    gap: 8px;
  }
}
</style>
