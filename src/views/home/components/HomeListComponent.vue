<script setup lang="ts">
import { useHomeStore } from '@/stores/views/home.store'

const store = useHomeStore()
</script>
<template>
  <div class="products">
    <div v-for="product in store.data" :key="product.id">
      {{ product.name }}
    </div>
  </div>
</template>

<style scoped>
.products {
  padding: 2em;
  display: flex;
  flex-direction: column;
  gap: 1em;
}
</style>
