<template>
  <div class="catalog">
    <h1 class="mb-5">Catalog</h1>

    <Spinner v-if="isLoading"/>

    <div v-else>
      <ProductStatusBar />
      <ProductGrid  />
    </div>

  </div>
</template>


<script>
import Spinner from '@/components/Spinner.vue'
import ProductGrid from '@/components/ProductGrid.vue'
import ProductStatusBar from '@/components/ProductStatusBar.vue'

export default {
  name: 'Catalog',
  components: {
    Spinner,
    ProductGrid,
    ProductStatusBar,
  },
  data() {
    return {
        isLoading: true
    }
  },
  created() {
      this.$store.dispatch('fetchProducts').then(
          () => this.isLoading = false
      )
  },
}


</script>

<style>

</style>