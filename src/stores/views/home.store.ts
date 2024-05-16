import getProductsService from '@/services/products/getProducts.service'
import getProductsPaginatedService from '@/services/products/getProductsPaginated.service'
import type { Product } from '@/types/product.type'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useHomeStore = defineStore('useHomeStore', () => {
  const data = ref<Product[]>()
  const categories = ref<string[]>()
  const category = ref<string>()
  const page = ref(1)
  const perPage = ref()

  const fetchData = async () => {
    const result = await getProductsPaginatedService(page.value, perPage.value, category.value)

    if (!result.error) data.value = result.data?.data
  }

  const init = async () => {
    await fetchData()
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

  const chooseCategory = async (chosenCategory: string) => {
    category.value = chosenCategory

    await fetchData()
  }

  return {
    init,
    chooseCategory,
    categories,
    data
  }
})
