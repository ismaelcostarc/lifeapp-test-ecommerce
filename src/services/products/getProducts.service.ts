import { useAxios } from '@/composables/axios.composable'
import type { Product } from '@/types/product.type'

export default async function getProductsService(category?: string) {
  const queryString = `?category=${category}`

  return await useAxios<Product[]>({
    url: `/products${category ? queryString : ''}`,
    method: 'GET'
  })
}
