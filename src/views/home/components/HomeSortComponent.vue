<script setup lang="ts">
import { useHomeStore } from '@/stores/views/home.store'
import { Sort } from '@/utils/enums.utils'
import BaseSelect from '@/components/base/BaseSelect.vue'

const store = useHomeStore()

const options = [
  ['Ordem alfabética (de A a Z)', Sort.Alphabetical],
  ['Ordem alfabética (de Z a A)', Sort.AlphabeticalReverse],
  ['Preço (do menor ao maior)', Sort.PriceLowerToHigher],
  ['Preço (do maior ao menor)', Sort.PriceHigherToLower]
]
</script>
<template>
  <div class="sort">
    <div class="sort__total">{{ store.total }} produto(s) encontrado(s)</div>
    <div>
      <BaseSelect v-model="store.sort" :options="options" />
    </div>
  </div>
</template>

<style scoped>
.sort {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.sort__total {
  font-size: var(--font-size-sm);
}
</style>
