<script setup lang="ts">
import BaseButton from '@/components/base/BaseButton.vue'
const props = defineProps<{
  pages: number
  page: number
}>()

const model = defineModel()
</script>

<template>
  <div class="pagination">
    <template v-for="page in props.pages" :key="page">
      <BaseButton @click="model = page" :disabled="model === page">{{ page }}</BaseButton>
    </template>
  </div>
</template>

<style scoped>
.pagination {
  display: flex;
  gap: 1em;
  justify-content: start;
}
</style>
