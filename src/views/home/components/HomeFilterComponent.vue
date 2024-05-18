<script setup lang="ts">
import { useHomeStore } from '@/stores/views/home.store'
import { CATEGORY_COLORS } from '@/utils/constants.utils'
import BaseButton from '@/components/base/BaseButton.vue'

const store = useHomeStore()
</script>
<template>
  <div class="categories">
    <BaseButton @click="store.category = null" :disabled="store.category === null"
      >Todos os produtos</BaseButton
    >
    <BaseButton
      v-for="category in store.categories"
      :key="category"
      :type="CATEGORY_COLORS[category]"
      :disabled="store.category === category"
      @click="store.category = category"
    >
      {{ category }}
    </BaseButton>
  </div>
</template>

<style scoped>
.categories {
  display: flex;
  gap: var(--spacing-lg);
}
</style>
