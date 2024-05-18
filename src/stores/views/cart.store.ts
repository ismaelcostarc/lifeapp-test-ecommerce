import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useCartStore = defineStore(
  'cart',
  () => {
    const products = ref<{ id: string; quantity: number }[]>([])

    const addProduct = (id: string) => {
      const product = products.value.find((elem) => elem.id === id)

      if (product) {
        products.value = products.value.map((elem) => {
          if (elem.id === id) {
            return {
              id: elem.id,
              quantity: elem.quantity + 1
            }
          } else return elem
        })
      } else {
        products.value = products.value.concat({ id: id, quantity: 1 })
      }
    }

    const removeProduct = (id: string) => {
      const product = products.value.find((elem) => elem.id === id)

      if (!product) {
        return
      }

      if (product?.quantity === 1) {
        products.value = products.value.filter((elem) => elem.id !== id)
      } else {
        products.value = products.value.map((elem) => {
          if (elem.id === id) {
            return {
              id: elem.id,
              quantity: elem.quantity - 1
            }
          } else return elem
        })
      }
    }

    const clearCart = () => {
      products.value = []
    }

    const total = computed(() =>
      products.value.reduce((acc, curr) => {
        return acc + curr.quantity
      }, 0)
    )

    return { products, addProduct, removeProduct, clearCart, total }
  },
  { persist: true }
)
