<template>
  <form @submit.prevent="validate">
    <h4>{{ t('shipping address') }}</h4>
    <div>
      <!-- TITLE : Mr Mrs-->
    </div>
    <div>
      <!-- FIRST NAME / NAME -->
    </div>
  </form>
</template>

<script>

import { useI18n } from 'vue-i18n';

export default {
  name: 'ShippingDelivery',
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