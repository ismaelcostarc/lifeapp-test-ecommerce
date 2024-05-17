import { useAxios } from '@/composables/axios.composable'
import type { PaginatedResponse, Product } from '@/utils/types.utils'

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

  return await useAxios<PaginatedResponse<Product[]>>({
    url: `/products`,
    params,
    method: 'GET'
  })
}
