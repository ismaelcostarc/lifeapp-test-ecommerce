<script setup lang="ts">
const props = defineProps<{
  pages: number
}>()

const model = defineModel()
</script>

<template>
  <div class="pagination">
    <button v-for="page in props.pages" :key="page" @click="model = page">{{ page }}</button>
  </div>
</template>

<style scoped>
.pagination {
  display: flex;
  gap: 1em;
  justify-content: start;
}
</style>
