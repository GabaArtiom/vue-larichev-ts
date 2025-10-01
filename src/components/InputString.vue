<script setup lang="ts">
const data = defineModel<string>();
</script>

<template>
  <input class="input-string" v-model="data" />
</template>

<style scoped>
.input-string {
  min-width: 274px;
  font-size: 24px;
  border: none;
  color: var(--color-fg);
  border-bottom: 1px solid var(--color-fg);
}

.input-string::placeholder {
  color: var(--color-inactive);
}
</style>
