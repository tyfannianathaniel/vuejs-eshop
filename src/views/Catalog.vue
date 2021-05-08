<template>
  <div class="catalog">
    <h1 class="mb-5">Catalog</h1>
    <ProductGrid/>
  </div>
</template>


<script>
import ProductGrid from '@/components/ProductGrid.vue'
export default {
  name: 'Catalog',
  components: {
    ProductGrid
  }
}
</script>

<style>

</style>