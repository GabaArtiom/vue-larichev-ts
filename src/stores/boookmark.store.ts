import { API_ROUTES, client } from '@/api';
import type { IBookmark } from '@/interfaces/IBookmark';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useBookmarkStore = defineStore('bookmarks', () => {
  const bookmarks = ref<IBookmark[]>([]);
  const activeSort = ref<string>('date');

  async function fetchBookmarks(category_id: number, sort: string) {
    const { data } = await client().get<IBookmark[]>(API_ROUTES.bookmarks.get(category_id), {
      params: {
        sort,
      },
    });
    bookmarks.value = data;
  }

  async function delteBookmark(id: number, category_id: number) {
    await client().delete<IBookmark[]>(API_ROUTES.bookmarks.delete(id));
    fetchBookmarks(category_id, activeSort.value);
  }

  async function addBookmark(url: string, category_id: number) {
    const { data } = await client().post<IBookmark>(API_ROUTES.bookmarks.create, {
      url,
      category_id,
    });
    bookmarks.value.push(data);
  }

  return { bookmarks, fetchBookmarks, delteBookmark, activeSort, addBookmark };
});
