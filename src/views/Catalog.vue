<template>
  <div>
    <h1 class="fs-4 mb-5">{{ t('catalog') }}</h1>

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
import { useI18n } from 'vue-i18n';

export default {
  name: 'Catalog',
  components: {
    Spinner,
    ProductGrid,
    ProductStatusBar,
  },
  setup() {
    const { t } = useI18n({
      inheritLocale: true,
      useScope: 'local'
    })
    return { t }
  },
  data() {
    return {
        isLoading: true,
        filter: 'our-selection',
        checked: true,
    }
  },
  created() {
    if (this.$store.state.productsModule.isLoading) {
      this.$store.dispatch("productsModule/FETCH_PRODUCTS").then( () => this.isLoading = false)
    } else {
      this.isLoading = false
    }
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

<i18n>
{
  "en": {
    "catalog": "Catalog"
  },
  "fr": {
    "catalog": "Catalogue"
  }
}
</i18n>