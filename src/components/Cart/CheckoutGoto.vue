<template>

  <router-link
    @click="checkout"
    to="/checkout"
    class="btn btn-primary"
    type="button" tag="button"
    data-bs-dismiss="offcanvas"
  >
    {{ t('checkout') }}
  </router-link>

</template>

<script>
import { useI18n } from 'vue-i18n';

export default {
  name:'CheckoutGoTo',
  setup() {
    const { t } = useI18n({
      inheritLocale: true,
      useScope: 'local'
    })
    return { t }
  },
  methods: {
    checkout() {
      // call store checkout action
      // this.$store.dispatch('cartModule/checkout')
    }
  }
}
</script>

<i18n>
{
  "en": {
    "checkout": "Proceed to checkout"
  },
  "fr": {
    "checkout": "Finaliser ma Commande"
  }
}
</i18n>