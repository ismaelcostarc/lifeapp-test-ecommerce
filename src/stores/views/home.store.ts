import getProductsService from '@/services/products/getProducts.service'
import getProductsPaginatedService from '@/services/products/getProductsPaginated.service'
import type { Product } from '@/types/product.type'
import { Sort } from '@/utils/enums.utils'
import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

export const useHomeStore = defineStore('useHomeStore', () => {
  const data = ref<Product[]>()
  const categories = ref<string[]>()
  const category = ref<string | null>(null)
  const page = ref(1)
  const perPage = ref(10)
  const total = ref<number>()
  const sort = ref<Sort>(Sort.Alphabetical)

  const fetchData = async () => {
    const result = await getProductsPaginatedService({
      _page: page.value,
      _per_page: perPage.value,
      _sort: sort.value,
      category: category.value
    })

    if (!result.error) {
      data.value = result.data?.data
      total.value = result.data?.items
    }
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

  watch(
    () => category.value,
    async (_) => {
      await fetchData()
    }
  )

  watch(
    () => sort.value,
    async (_) => {
      await fetchData()
    }
  )

  return {
    init,
    category,
    categories,
    data,
    total,
    sort
  }
})
