import axios, { type AxiosRequestConfig, type AxiosResponse } from 'axios'
import { ref } from 'vue'

export async function useAxios<T>(opts: AxiosRequestConfig) {
  const instance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    timeout: 15000
  })

  const error = ref(false)
  const res = ref<AxiosResponse<T>>()

  try {
    res.value = await instance.request<T>({
      ...opts
    })
  } catch (err) {
    error.value = true
  }

  return {
    data: res.value?.data,
    status: res.value?.status,
    error: error.value
  }
}
