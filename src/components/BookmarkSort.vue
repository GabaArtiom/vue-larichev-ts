<script setup lang="ts">
const { option } = defineProps<{ option: string }>();

const SORT_OPTION = [
  { option: 'date', name: 'По дате' },
  { option: 'title', name: 'По заголовку' },
];

const emit = defineEmits<{
  (e: 'sort', option: string): void;
}>();
</script>

<template>
  <div class="sort">
    <button
      type="button"
      class="sort__btn"
      v-for="item in SORT_OPTION"
      @click="() => emit('sort', item.option)"
      :item="item.option"
      :class="option == item.option ? 'active' : ''"
    >
      {{ item.name }}
    </button>
  </div>
</template>

<style scoped lang="scss">
.sort {
  margin-top: 16px;
  display: flex;
  gap: 8px;

  &__btn {
    background: none;
    border: none;
    color: var(--color-inactive);
    font-size: 16px;
    cursor: pointer;
  }

  &__btn.active {
    font-weight: 700;
    color: var(--color-fg);
    border-bottom: 2px solid var(--color-fg);
  }
}
</style>
