<script setup lang="ts">
import IconEdit from '@/icons/IconEdit.vue';
import IconOk from '@/icons/IconOk.vue';
import IconTrash from '@/icons/IconTrash.vue';
import type { ICategory } from '@/interfaces/ICategory';
import { ref } from 'vue';
import ButtonIcon from './ButtonIcon.vue';
import InputString from './InputString.vue';
import { useCategoryStore } from '@/stores/categories.store';

const { category } = defineProps<{ category: ICategory }>();
const isEdited = ref<boolean>();
const newCategoryName = ref<string>(category.name);
const categoryStore = useCategoryStore();

function toggleEdit() {
  isEdited.value = !isEdited.value;
}

function updateCategory() {
  if (!newCategoryName.value) {
    return;
  }
  categoryStore.updateCategory(newCategoryName.value, category.alias, category.id);
  toggleEdit();
}
</script>

<template>
  <div class="category-header">
    <h1 class="category-header__title" v-if="!isEdited">{{ category.name }}</h1>
    <div class="category-header__change" v-if="isEdited">
      <InputString v-model="newCategoryName" />
      <ButtonIcon @click="updateCategory">
        <IconOk />
      </ButtonIcon>
    </div>
    <div>
      <ButtonIcon v-if="!isEdited" @click="toggleEdit">
        <IconEdit />
      </ButtonIcon>
      <ButtonIcon>
        <IconTrash />
      </ButtonIcon>
    </div>
  </div>
</template>

<style scoped lang="scss">
.category-header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  &__change {
    display: flex;
    align-items: center;
    gap: 15px;
  }
}
</style>
