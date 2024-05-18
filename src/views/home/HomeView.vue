<script setup lang="ts">
import HomeFilterComponent from './components/HomeFilterComponent.vue'
import HomeSortComponent from './components/HomeSortComponent.vue'
import HomeListComponent from './components/HomeListComponent.vue'
import BasePaginationComponent from '@/components/base/BasePaginationComponent.vue'
import { useHomeStore } from '@/stores/views/home.store'
import { watch } from 'vue'

const store = useHomeStore()

await store.init()

watch(
  () => store.page,
  () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }
)
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
