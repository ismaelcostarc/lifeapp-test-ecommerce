import getProductsService from '@/services/products/getProducts.service'
import getProductsPaginatedService from '@/services/products/getProductsPaginated.service'
import type { Product } from '@/types/product.type'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useHomeStore = defineStore('useHomeStore', () => {
  const data = ref<Product[]>()
  const categories = ref<string[]>()

  const init = async () => {
    const result = await getProductsPaginatedService()

    if (!result.error) data.value = result.data?.data

    await getCategories()
  }

  const getCategories = async () => {
    const result = await getProductsService()

    if (!result.error) {
      const withDuplicates = result.data?.map((elem) => elem.category)
      const withoutDuplicates = [...new Set(withDuplicates)]

      categories.value = withoutDuplicates
    }
  }

  return {
    init,
    categories,
    data
  }
})
