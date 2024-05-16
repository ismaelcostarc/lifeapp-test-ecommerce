<script setup lang="ts">
import getProductsService from '@/services/products/getProducts.service'
const result = await getProductsService()

console.log(result)
</script>

<template>
  <main></main>
</template>
