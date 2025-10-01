<script setup lang="ts">
import IconPlus from '@/icons/IconPlus.vue';
import { useAuthStore } from '@/stores/auth.store';
import { useCategoryStore } from '@/stores/categories.store';
import { onMounted } from 'vue';
import { RouterLink, useRouter } from 'vue-router';
import ButtonIcon from './ButtonIcon.vue';

const store = useCategoryStore();
const authStore = useAuthStore();
const router = useRouter();

onMounted(() => {
  store.fetchCategories();
});

function logout() {
  authStore.clearToken();
  router.push({ name: 'auth' });
}
</script>

<template>
  <ul class="category__list">
    <li class="category__item" v-for="item in store.categories" :key="item.id">
      <RouterLink active-class="active" :to="`/main/${item.alias}`">{{ item.name }}</RouterLink>
    </li>
    <li>
      <ButtonIcon @click="store.createCategory">
        <IconPlus />
      </ButtonIcon>
    </li>
    <li class="category__item">
      <a href="#" @click="logout">Выход</a>
    </li>
  </ul>
</template>

<style scoped lang="scss">
.category__list {
  display: flex;
  flex-direction: column;
  gap: 34px;
  margin: 0;
  padding: 0;
}

li {
  list-style: none;
}

.category__item a {
  text-decoration: none;
  font-size: 14px;
  transition: all 0.5s;
  color: var(--color-fg);
}

.category__item a:hover,
.category__item a.active {
  font-size: 24px;
  font-weight: 700;
}
</style>
