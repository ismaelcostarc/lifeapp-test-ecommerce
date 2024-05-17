<script setup lang="ts">
import { useHomeStore } from '@/stores/views/home.store'

const store = useHomeStore()
</script>
<template>
  <div class="categories">
    <button @click="store.category = null">Todos os produtos</button>
    <button v-for="category in store.categories" :key="category" @click="store.category = category">
      {{ category }}
    </button>
  </div>
</template>

<style scoped>
.categories {
  display: flex;
  gap: 2em;
  padding: 2em;
}
</style>
