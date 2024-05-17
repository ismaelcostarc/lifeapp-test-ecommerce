<script setup lang="ts">
import { useHomeStore } from '@/stores/views/home.store'
import { Sort } from '@/utils/enums.utils'

const store = useHomeStore()
</script>
<template>
  <div class="sort">
    <div>{{ store.total }}</div>
    <div>
      <select v-model="store.sort">
        <option :value="Sort.Alphabetical">Ordem alfabética (de A a Z)</option>
        <option :value="Sort.AlphabeticalReverse">Ordem alfabética (de Z a A)</option>
        <option :value="Sort.PriceLowerToHigher">Preço (do menor ao maior)</option>
        <option :value="Sort.PriceHigherToLower">Preço (do maior ao menor)</option>
      </select>
    </div>
  </div>
</template>

<style scoped>
.sort {
  display: flex;
  justify-content: space-between;
}
</style>
