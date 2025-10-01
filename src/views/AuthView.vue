<script setup lang="ts">
import ButtonText from '@/components/ButtonText.vue';
import InputString from '@/components/InputString.vue';
import { useAuthStore } from '@/stores/auth.store';
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';

const form = ref<{ email?: string; password?: string }>({});
const authStore = useAuthStore();
const router = useRouter();

watch(
  () => authStore.getToken,
  () => {
    if (authStore.getToken) {
      router.push({ name: 'main' });
    }
  },
);

function onSubmit(event: Event) {
  event.preventDefault();
  if (!form.value.email || !form.value.password) {
    return;
  }
  authStore.login(form.value.email, form.value.password);
  form.value = {};
}
</script>

<template>
  <div class="auth">
    <div class="auth__wrapper">
      <h1 class="auth__title">Bookmarkly</h1>
      <form class="auth__form" @submit="onSubmit">
        <InputString v-model="form.email" placeholder="Email" />
        <InputString v-model="form.password" placeholder="Пароль" type="password" />
        <ButtonText type="submit">Вход</ButtonText>
      </form>
    </div>
  </div>
</template>

<style lang="scss">
.auth {
  display: grid;
  place-items: center;
  min-height: 100vh;

  &__wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 52px;
  }

  &__title {
    font-size: 52px;
    font-weight: 700;
  }

  &__form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 52px;
  }
}
</style>
