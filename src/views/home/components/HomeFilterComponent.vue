<script setup lang="ts">
import { useHomeStore } from '@/stores/views/home.store'

const store = useHomeStore()
console.log(store.categories)
</script>
<template>
  <div>Home Filter</div>
</template>
