<script setup lang="ts">
import { useHomeStore } from '@/stores/views/home.store'
import { CATEGORY_COLORS } from '@/utils/constants.utils'
import BaseCard from '@/components/base/BaseCard.vue'
import BaseButton from '@/components/base/BaseButton.vue'

const store = useHomeStore()
</script>
<template>
  <div class="products">
    <BaseCard v-for="product in store.data" :key="product.id">
      <div class="label__container">
        <div class="product__label" :class="[`${CATEGORY_COLORS[product.category]}`]">
          {{ product.category }}
        </div>
      </div>

      <div class="product">
        <h2 class="product__title">{{ product.name }}</h2>
        <img
          class="product__img"
          :src="product.image"
          :alt="product.name"
          width="200"
          height="300"
        />
        <div class="product__description">{{ product.description }}</div>
        <div class="price-cart__container">
          <div class="price__container">
            <template v-if="product.discount_percentage">
              <div class="discount__container">
                <s class="product__original-price">R$ {{ product.price }}</s>
                <div class="product__discount">-{{ product.discount_percentage }}% OFF</div>
              </div>
              <div class="product__price">R$ {{ product.promotional_price }}</div>
            </template>
            <template v-else>
              <div class="product__price">R$ {{ product.price }}</div>
            </template>
          </div>
          <BaseButton>Adicionar ao Carrinho</BaseButton>
        </div>
      </div>
    </BaseCard>
  </div>
</template>

<style scoped>
.products {
  display: grid;
  gap: var(--spacing-lg);
  grid-template-columns: auto auto auto auto;
}

.product {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
  align-items: center;
  padding: var(--spacing-xl);
  justify-content: space-between;
  height: 100%;
}

.product__title {
  font-size: var(--font-size-lg);
  font-weight: 300;
}

.product__img {
  object-fit: cover;
}

.product__label {
  background-color: var(--color-accent1);
  -webkit-border-radius: 0 10px 0 10px;
  -moz-border-radius: 0 10px 0 10px;
  border-radius: 0 10px 0 10px;
  padding: var(--spacing-md);
}

.label__container {
  display: flex;
  align-items: center;
  justify-content: end;
}

.price-cart__container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.product__description {
  font-size: var(--font-size-sm);
}

.product__price {
  font-size: var(--font-size-xl);
  font-weight: 500;
}

.discount__container {
  display: flex;
  gap: var(--spacing-md);
}

.product__discount {
  font-size: var(--font-size-sm);
  color: var(--color-error);
  font-weight: 300;
}

.product__original-price {
  color: var(--color-gray);
}

.hightlight1 {
  background-color: var(--color-highlight1);
}

.hightlight2 {
  background-color: var(--color-highlight2);
}

.hightlight3 {
  background-color: var(--color-highlight3);
}
</style>
