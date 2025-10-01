import type { TProfile } from '@/interfaces/TProfile';
import { defineStore } from 'pinia';
import { ref } from 'vue';
import { API_ROUTES, client } from './../api';

export const useProfileStore = defineStore('profile', () => {
  const profile = ref<TProfile>();

  async function fetchProfile() {
    const { data } = await client().get<TProfile>(API_ROUTES.auth.profile);

    profile.value = data;
  }

  return { profile, fetchProfile };
});
