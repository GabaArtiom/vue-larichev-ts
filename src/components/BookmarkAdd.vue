<script setup lang="ts">
import { ref } from 'vue';
import ButtonIcon from './ButtonIcon.vue';
import IconPlusBig from '@/icons/IconPlusBig.vue';
import InputString from './InputString.vue';
import IconOk from '@/icons/IconOk.vue';
import { useBookmarkStore } from '@/stores/boookmark.store';

const { category_id } = defineProps<{ category_id: number }>();
const isEdited = ref<boolean>(false);
const newUrl = ref<string>();
const bookmarkStore = useBookmarkStore();

function addBookmark() {
  if (!newUrl.value) {
    return;
  }
  bookmarkStore.addBookmark(newUrl.value, category_id);
  newUrl.value = ""
  toggleIsEdited()
}

function toggleIsEdited() {
  isEdited.value = !isEdited.value;
}
</script>

<template>
  <div class="bookmark-add">
    <ButtonIcon v-if="!isEdited" @click="toggleIsEdited" :size="48">
      <IconPlusBig />
    </ButtonIcon>
    <div v-else class="bookmark-input">
      <InputString v-model="newUrl" is-focused />
      <ButtonIcon @click="addBookmark">
        <IconOk />
      </ButtonIcon>
    </div>
  </div>
</template>

<style scoped lang="scss">
.bookmark-add {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  border: 1px dashed var(--color-fg);
}

.bookmark-input {
  display: flex;
  align-items: center;
  gap: 8px;
}
</style>
