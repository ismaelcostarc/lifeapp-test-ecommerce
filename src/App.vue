<script setup lang="ts">
import { computed } from 'vue'
import { RouterView, useRouter } from 'vue-router'

const router = useRouter()

const layout = computed(() => {
  return `${router.currentRoute.value.meta.layout}Layout`
})
</script>

<template>
  <Suspense>
    <Component :is="layout">
      <RouterView />
    </Component>
  </Suspense>
</template>
