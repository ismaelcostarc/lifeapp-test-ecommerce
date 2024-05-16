import { useAxios } from '@/composables/axios.composable'
import type { Product } from '@/types/product.type'

export default async function getProductsPaginatedService(page = 1, perPage = 10) {
  const queryString = `?_page=${page}&_per_page=${perPage}`

  return await useAxios<{ data: Product[] }>({
    url: `/products${queryString}`,
    method: 'GET'
  })
}
