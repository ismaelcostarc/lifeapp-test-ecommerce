import { useAxios } from '@/composables/axios.composable'
import type { Product } from '@/types/product.type'

interface GetProductsPaginatedServicePayload {
  _page: number
  _per_page: number
  _sort: string
  category: string | null
}

export default async function getProductsPaginatedService(
  payload: GetProductsPaginatedServicePayload
) {
  const params = { ...payload }

  return await useAxios<{ data: Product[]; items: number }>({
    url: `/products`,
    params,
    method: 'GET'
  })
}
