<script setup lang="ts">
import BookmarkCard from '@/components/BookmarkCard.vue';
import BookmarkSort from '@/components/BookmarkSort.vue';
import CategoryHeader from '@/components/CategoryHeader.vue';
import type { ICategory } from '@/interfaces/ICategory';
import { useBookmarkStore } from '@/stores/boookmark.store';
import { useCategoryStore } from '@/stores/categories.store';
import { onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const categoryStore = useCategoryStore();
const bookmarkStore = useBookmarkStore();
const category = ref<ICategory>();
const activeSort = ref<string>('date');

function sortBookmarks(sort: string) {
  activeSort.value = sort;
  if (category.value) {
    bookmarkStore.fetchBookmarks(category.value.id, activeSort.value);
  }
}

onMounted(() => {
  category.value = categoryStore.getCategoryByAlias(route.params.alias);
  if (category.value) {
    bookmarkStore.fetchBookmarks(category.value.id, activeSort.value);
  }
});

watch(
  () => ({
    alias: route.params.alias,
    categories: categoryStore.categories,
  }),
  (data) => {
    category.value = categoryStore.getCategoryByAlias(data.alias);
    if (category.value) {
      bookmarkStore.fetchBookmarks(category.value.id, activeSort.value);
    }
  },
);
</script>

<template>
  <CategoryHeader v-if="category" :category="category" />
  <div class="category__sort">
    <BookmarkSort :option="activeSort" @sort="sortBookmarks" />
  </div>
  <div class="category__list">
    <BookmarkCard v-for="item in bookmarkStore.bookmarks" :key="item.id" v-bind="item" />
  </div>
</template>

<style scoped lang="scss">
.category__list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-top: 30px;
}
</style>
