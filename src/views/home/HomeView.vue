<script setup lang="ts">
import HomeFilterComponent from './components/HomeFilterComponent.vue'
import HomeSortComponent from './components/HomeSortComponent.vue'
import HomeListComponent from './components/HomeListComponent.vue'
import { useHomeStore } from '@/stores/views/home.store'

const store = useHomeStore()

await store.init()
</script>

<template>
  <main>
    <HomeFilterComponent />

    <HomeSortComponent />

    <HomeListComponent />
  </main>
</template>
