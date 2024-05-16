import { useAxios } from '@/composables/axios.composable'
import type { Product } from '@/types/product.type'

export default async function getProductsService(page = 1, perPage = 10) {
  return await useAxios<Product[]>({
    url: `/products?_page=${page}&_per_page=${perPage}`,
    method: 'GET'
  })
}
