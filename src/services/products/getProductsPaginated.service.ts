import { useAxios } from '@/composables/axios.composable'
import type { Product } from '@/types/product.type'

export default async function getProductsPaginatedService(
  page = 1,
  perPage = 10,
  category?: string
) {
  const queryString =
    `?_page=${page}&_per_page=${perPage}` + (category ? `&category=${category}` : '')

  return await useAxios<{ data: Product[]; items: number }>({
    url: `/products${queryString}`,
    method: 'GET'
  })
}
