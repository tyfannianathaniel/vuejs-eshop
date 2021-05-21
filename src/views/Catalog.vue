<template>
  <div class="catalog">
    <h1 class="mb-5">Catalogue</h1>

    <Spinner v-if="isLoading"/>

    <div v-else>
      <ProductStatusBar @sortBy="sortBy" @isAvailable="isAvailable"/>
      <ProductGrid :filter="filter" :isAvailable="checked" />
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
        isLoading: true,
        filter: 'our-selection',
        checked: true,
    }
  },
  created() {
      this.$store.dispatch('fetchProducts').then(
          () => this.isLoading = false
      )
  },
  methods: {
    sortBy(event) {
      this.filter = event
    },
    isAvailable(event) {
      this.checked = event
    },
  },
}


</script>

<style>

</style>