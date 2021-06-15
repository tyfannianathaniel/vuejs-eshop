<template>
   <div>

    <div class="container">

      <p class="text-center" v-show="!cart.length"><i>{{ t('add some products')}}</i></p>
      <CartItems/>

    </div>

    <div v-show="cart.length" class="text-center mb-4">

      <TotalPrice/>
      <ContinueShopping isEmbeddedInModal="true" />
      <CheckoutGoTo/>

    </div>



   </div>
</template>

<script>
import CartItems from '@/components/Cart/CartItems'
import TotalPrice from '@/components/Cart/TotalPrice'
import CheckoutGoTo from '@/components/Cart/CheckoutGoto'
import ContinueShopping from '@/components/Cart/ContinueShopping'

import { useI18n } from 'vue-i18n';

export default {
  name: "cart",
  components: {
    CartItems,
    TotalPrice,
    CheckoutGoTo,
    ContinueShopping
  },
  setup() {
    const { t } = useI18n({
      inheritLocale: true,
      useScope: 'local'
    })
    return { t }
  },
  computed: {
    cart(){
      return this.$store.getters['cartModule/cartProducts']
    },
  },
  methods: {

  },
}
</script>

<style>
  .product-list-item {
    list-style-type: none;
  }
  .price::after{
    content:" €";
  }
</style>

<i18n>
{
  "en": {
    "add some products": "Please add some products to cart.",
    "checkout": "Proceed to checkout",
    "quantity": "Qty: ",
    "remove": "remove",
    "total": "Total:",
    "currency": "€"
  },
  "fr": {
    "add some products": "Veuillez ajouter un produit",
    "checkout": "Finaliser mes achats",
    "quantity": "Qté: ",
    "remove": "supprimer",
    "total": "Total : ",
    "currency": " €"
  }
}
</i18n>
