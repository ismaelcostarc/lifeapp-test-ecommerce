<script setup lang="ts">
import { useHomeStore } from '@/stores/views/home.store'

const store = useHomeStore()
</script>
<template>
  <div class="products">
    <div v-for="product in store.data" :key="product.id">
      {{ product.name }} <br />
      {{ product.price }}
      <hr />
    </div>
  </div>
</template>

<style scoped>
.products {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
}

hr {
  border-top: 1px solid black;
}
</style>
