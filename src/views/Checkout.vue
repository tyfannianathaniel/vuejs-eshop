<template>
  <div>
    <h1 class="fs-4 mb-5">{{ t('checkout') }}</h1>

    <nav class="my-5" style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><router-link to="/">{{ t('cart') }}</router-link></li>
        <li class="breadcrumb-item"><router-link to="/">{{ t('shipping') }}</router-link></li>
        <li class="breadcrumb-item"><router-link to="/">{{ t('payment') }}</router-link></li>
      </ol>
    </nav>

    <router-view />
    <!--

    KENZO:
      - 1. CART                 : checkout your cart => validate your order
      - 2. DELIVERY & SHIPPING  : shipping address form => validate address
      - 3. PAYMENT INFORMATIONS : select a payment method => proceed to payment

    -->
  </div>
</template>

<script>
import { useI18n } from 'vue-i18n';

export default {
  name: 'Checkout',
  components: {
  },
  setup() {
    const { t } = useI18n({
      inheritLocale: true,
      useScope: 'local'
    })
    return { t }
  },
}
</script>

<style>

</style>

<i18n>
{
  "en": {
    "checkout": "Checkout",
    "cart": "1. Cart",
    "shipping": "2. Delivery & Shipping",
    "payment": "3. Payment Information"
  },
  "fr": {
    "checkout": "Commande",
    "cart": "1. Panier",
    "shipping": "2. Livraison et frais d'expédition",
    "payment": "3. Paiement"
  }
}
</i18n>