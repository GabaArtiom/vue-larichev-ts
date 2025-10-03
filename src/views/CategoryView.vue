<script setup lang="ts">
import BookmarkAdd from '@/components/BookmarkAdd.vue';
import BookmarkCard from '@/components/BookmarkCard.vue';
import BookmarkSort from '@/components/BookmarkSort.vue';
import CategoryHeader from '@/components/CategoryHeader.vue';
import type { ICategory } from '@/interfaces/ICategory';
import { useBookmarkStore } from '@/stores/boookmark.store';
import { useCategoryStore } from '@/stores/categories.store';
import { defineAsyncComponent, onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const categoryStore = useCategoryStore();
const bookmarkStore = useBookmarkStore();
const category = ref<ICategory>();

// const CategoryHeader = defineAsyncComponent({
//   loader: async () => {
//     await new Promise<void>((resolve) => {
//       setTimeout(() => {
//         resolve();
//       }, 2000);
//     });
//     return import('@/components/CategoryHeader.vue');
//   },
//   loadingComponent: BookmarkAdd,
//   errorComponent: BookmarkAdd,
//   delay: 200,
//   timeout: 3000,
// });

function sortBookmarks(sort: string) {
  bookmarkStore.activeSort = sort;
  if (category.value) {
    bookmarkStore.fetchBookmarks(category.value.id, bookmarkStore.activeSort);
  }
}

onMounted(() => {
  category.value = categoryStore.getCategoryByAlias(route.params.alias);
  if (category.value) {
    bookmarkStore.fetchBookmarks(category.value.id, bookmarkStore.activeSort);
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
      bookmarkStore.fetchBookmarks(category.value.id, bookmarkStore.activeSort);
    }
  },
);
</script>

<template>
  <CategoryHeader v-if="category" :category="category" />
  <div class="category__sort">
    <BookmarkSort :option="bookmarkStore.activeSort" @sort="sortBookmarks" />
  </div>
  <div class="category__list">
    <BookmarkCard v-for="item in bookmarkStore.bookmarks" :key="item.id" v-bind="item" />
    <BookmarkAdd v-if="category" :category_id="category.id" />
  </div>
</template>

<style scoped lang="scss">
.category__list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(10, 350px);
  gap: 24px;
  margin-top: 30px;
}
</style>
