<template>
  <div class="card">
    <slot />
  </div>
</template>

<style scoped>
.card {
  background-color: var(--color-white);
  display: flex;
  flex-direction: column;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  border-radius: 10px;
}
</style>
