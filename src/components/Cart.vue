<template>
   <div>

     <ul
      v-for="product of cart"
      :key="product.id"
     >
       <li>

       </li>
     </ul>

    <button
        @click="checkout"
        class="btn btn-primary"
        type="button"
    >
    Finaliser mes achats
    </button>

   </div>
</template>

<script>
import { useI18n } from 'vue-i18n';

export default {
  name: "cart",
  setup() {
    const { t } = useI18n({
      inheritLocale: true,
      useScope: 'local'
    })
    return { t }
  },
  computed: {
    cart() {

        let products =[]

        if (this.isAvailable) {
            products = this.$store.getters['productsModule/getAvailableProducts']
        } else {
            products = this.$store.state['productsModule/products']
        }

        switch (this.filter) {
            case "our-selection":
                return this.sortByAscendingId(products)
            case "price-ascending":
                return this.sortByAscendingPrice(products)
            case "price-descending":
                return this.sortByDescendingPrice(products)
            case "brand-name":
                return this.sortByAlphabeticalBrandName(products)
            default:
                return products
        }
    },
  },
}
</script>

<style>

</style>

<i18n>
{
  "en": {
  },
  "fr": {
  }
}
</i18n>
