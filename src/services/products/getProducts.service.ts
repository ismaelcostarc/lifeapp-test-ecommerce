import { useAxios } from '@/composables/axios.composable'
import type { Product } from '@/types/product.type'

export default async function getProductsService() {
  return await useAxios<Product[]>({
    url: `/products`,
    method: 'GET'
  })
}
