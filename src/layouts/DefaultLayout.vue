<script setup lang="ts">
import BaseButton from '@/components/base/BaseButton.vue'
import router from '@/router'
import { useCartStore } from '@/stores/views/cart.store'

const goCart = () => {
  router.push({ name: 'cart' })
}

const cartStore = useCartStore()
</script>

<template>
  <div class="container">
    <header>
      <h1>E-commerce</h1>
      <div>{{ cartStore.total }}</div>
      <BaseButton type="link" @click="goCart"
        ><font-awesome-icon icon="fa-solid fa-cart-shopping"
      /></BaseButton>
    </header>
    <main><slot /></main>
  </div>
</template>
<style scoped>
.container {
  display: flex;
  flex-direction: column;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--spacing-lg);
}

main {
  padding: var(--spacing-lg);
  background-color: var(--color-light-gray);
}

h1 {
  font-size: var(--font-size-xxl);
}
</style>
