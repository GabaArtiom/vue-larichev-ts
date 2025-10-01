<script setup lang="ts"></script>

<template>
  <button class="button">
    <slot />
  </button>
</template>

<style scoped>
.button {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  padding: 12px 24px;
  height: 50px;
  border-radius: 50px;
  border: none;
  background: var(--color-fg);
  cursor: pointer;
  color: var(--color-bg);
  transition: all 0.4s;
}
.button:hover {
  background: var(--color-fg-hover);
}
</style>
