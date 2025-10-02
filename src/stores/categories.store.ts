import { defineStore } from 'pinia';
import { ref } from 'vue';
import { API_ROUTES, client } from './../api';
import type { ICategory } from '@/interfaces/ICategory';
import { v4 as uuidv4 } from 'uuid';

export const useCategoryStore = defineStore('categories', () => {
  const categories = ref<ICategory[]>([]);

  async function fetchCategories() {
    const { data } = await client().get<ICategory[]>(API_ROUTES.categories);
    categories.value = data;
  }

  async function createCategory() {
    const { data } = await client().post<ICategory>(API_ROUTES.categories, {
      name: 'Новая категория',
      alias: uuidv4(),
    });
    categories.value.push(data);
  }

  async function updateCategory(name: string, alias: string, id: number) {
    await client().put<ICategory>(API_ROUTES.categories + '/' + id, {
      name,
      alias,
    });
    fetchCategories();
  }

  async function deleteCategory(id: number) {
    await client().delete<ICategory>(API_ROUTES.categories + '/' + id);
    fetchCategories();
  }

  function getCategoryByAlias(alias: string | string[]): ICategory | undefined {
    if (typeof alias == 'string') {
      return categories.value.find((c) => c.alias == alias);
    }
    return;
  }

  return { categories, fetchCategories, createCategory, getCategoryByAlias, updateCategory, deleteCategory };
});
