<template>
  <div class="w-100 bg-light p-2 my-3 text-align">
    {{ t('total') }} <span>{{totalPrice}}</span>{{ t('currency') }}
  </div>
</template>

<script>
import { useI18n } from 'vue-i18n';

export default {
  name:'TotalPrice',
  setup() {
    const { t } = useI18n({
      inheritLocale: true,
      useScope: 'local'
    })
    return { t }
  },
  computed: {
    totalPrice() {
      return this.$store.getters['cart/cartTotalPrice']
    }
  }
}
</script>

<i18n>
{
  "en": {
    "total": "Total: ",
    "currency": " €"
  },
  "fr": {
    "total": "Total : ",
    "currency": " €"
  }
}
</i18n>