<script setup lang="ts">
import { useHomeStore } from '@/stores/views/home.store'

const store = useHomeStore()
</script>
<template>
  <div class="sort">
    <div>{{ store.total }}</div>
    <div><button>ordenar por</button></div>
  </div>
</template>

<style scoped>
.sort {
  display: flex;
  justify-content: space-between;
}
</style>
