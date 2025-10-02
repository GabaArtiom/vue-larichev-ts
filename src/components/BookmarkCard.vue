<script setup lang="ts">
import type { IBookmark } from '@/interfaces/IBookmark';
import ButtonIconBig from './ButtonIconBig.vue';
import IconTrashWhite from '@/icons/IconTrashWhite.vue';
import IconLinkWhite from '@/icons/IconLinkWhite.vue';
import { useBookmarkStore } from '@/stores/boookmark.store';

const { title, image, url, id } = defineProps<IBookmark>();
const bookmarkStore = useBookmarkStore();

function openLink() {
  window.open(url, '_blank');
}
</script>

<template>
  <div class="bookmark-card">
    <div class="bookmark-card__image" :style="{ backgroundImage: `url(${image})` }"></div>
    <div class="bookmark-card__title">
      {{ title }}
    </div>
    <div class="bookmark-card__footer">
      <ButtonIconBig @click="() => bookmarkStore.delteBookmark(id)">
        <IconTrashWhite />
      </ButtonIconBig>
      <ButtonIconBig @click="openLink">
        <IconLinkWhite />
      </ButtonIconBig>
    </div>
  </div>
</template>

<style scoped lang="scss">
.bookmark-card {
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 20px;
  background: var(--color-fg);
  border-radius: 30px;
  box-shadow: 0 10px 10px 0 rgba(245, 245, 247, 0.1);

  &__image {
    min-height: 160px;
    border-radius: 20px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }

  &__title {
    font-size: 16px;
    font-weight: 500;
    color: var(--color-bg);
  }

  &__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
