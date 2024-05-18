<script setup lang="ts">
import HomeFilterComponent from './components/HomeFilterComponent.vue'
import HomeSortComponent from './components/HomeSortComponent.vue'
import HomeListComponent from './components/HomeListComponent.vue'
import BasePaginationComponent from '@/components/base/BasePaginationComponent.vue'
import { useHomeStore } from '@/stores/views/home.store'

const store = useHomeStore()

await store.init()
</script>

<template>
  <div class="container">
    <HomeFilterComponent />

    <HomeSortComponent />

    <HomeListComponent />

    <BasePaginationComponent :pages="store.pages ?? 0" v-model="store.page" />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  gap: var(--spacing-lg);
  flex-direction: column;
}
</style>
