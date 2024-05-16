import { useAxios } from '@/composables/axios.composable'

export default async function getProductsService(page = 1, perPage = 10) {
  return await useAxios<any>({ url: `/products?_page=${page}&_per_page=${perPage}`, method: 'GET' })
}
