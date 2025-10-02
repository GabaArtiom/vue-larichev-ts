import { API_ROUTES, client } from '@/api';
import type { IBookmark } from '@/interfaces/IBookmark';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useBookmarkStore = defineStore('bookmarks', () => {
  const bookmarks = ref<IBookmark[]>([]);

  async function fetchBookmarks(categoryId: number, sort: string) {
    const { data } = await client().get<IBookmark[]>(API_ROUTES.bookmarks.get(categoryId), {
      params: {
        sort
      }
    });
    bookmarks.value = data;
  }

  async function delteBookmark(id: number, ) {
    await client().delete<IBookmark[]>(API_ROUTES.bookmarks.delete(id));
    // fetchBookmarks(categoryId);
  }

  return { bookmarks, fetchBookmarks, delteBookmark };
});
