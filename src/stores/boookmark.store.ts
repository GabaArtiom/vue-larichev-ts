import { API_ROUTES, client } from '@/api';
import type { IBookmark } from '@/interfaces/IBookmark';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useBookmarkStore = defineStore('bookmarks', () => {
  const bookmarks = ref<IBookmark[]>([]);

  async function fetchBookmarks(categoryId: number) {
    const { data } = await client().get<IBookmark[]>(API_ROUTES.bookmarks(categoryId));
    bookmarks.value = data;
  }

  return { bookmarks, fetchBookmarks };
});
