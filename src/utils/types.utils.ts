export interface Product {
  id: string
  name: string
  category: string
  price: number
  discount_percentage: number
  promotional_price: number
  image: string
  description: string
}

export interface PaginatedResponse<T> {
  data: T
  first: number
  prev: number | null
  next: number | null
  last: number
  pages: number
  items: number
}
