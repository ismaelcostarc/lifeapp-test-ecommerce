<script setup lang="ts">
import getProductsService from '@/services/products/getProducts.service'
import HomeFilterComponent from './components/HomeFilterComponent.vue'
import HomeSortComponent from './components/HomeSortComponent.vue'
import HomeListComponent from './components/HomeListComponent.vue'

const result = await getProductsService()

console.log(result)
</script>

<template>
  <main>
    <HomeFilterComponent />

    <HomeSortComponent />

    <HomeListComponent />
  </main>
</template>
