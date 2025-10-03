<script setup lang="ts">
import { onMounted, useTemplateRef } from 'vue';

const data = defineModel<string>();
const input = useTemplateRef<HTMLInputElement>('input');

const { isFocused = false } = defineProps<{ isFocused?: boolean }>();

onMounted(() => {
  if (isFocused && input.value) {
    input.value.focus();
  }
});
</script>

<template>
  <input class="input-string" v-model="data" ref="input" />
</template>

<style scoped>
.input-string {
  font-size: 24px;
  width: 200px;
  color: var(--color-fg);
  border: none;
  border-bottom: 1px solid var(--color-fg);
}

.input-string::placeholder {
  color: var(--color-inactive);
}
</style>
