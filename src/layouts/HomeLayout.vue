<template>
  <div class="container">
    <header>
      <h1>E-commerce</h1>
      <button>Carrinho</button>
    </header>
    <main><slot /></main>
  </div>
</template>
<style scoped>
.container {
  display: flex;
  flex-direction: column;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--spacing-lg);
}

main {
  padding: var(--spacing-lg);
  background-color: var(--color-light-gray);
}
</style>
