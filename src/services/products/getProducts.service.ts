import { useAxios } from '@/composables/axios.composable'

export default async function getProductsService() {
  return await useAxios<any>({ url: '/products', method: 'GET' })
}
