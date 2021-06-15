<template>
  <div class="d-flex justify-content-end">
    <form class="col-4">

      <div class="mb-3">

        <label for="country" class="form-label">{{ t('shipping') }}</label>
        <select class="form-select" name="country" id="county" aria-label="country select">
          <option v-for="country of countries" :key="country.id" :value="country.iso_code" >{{ country.name }}</option>
        </select>

        <div class="my-3 text-end table-responsive">
          <table class="table table-borderless">
            <tbody>
              <tr>
                <td scope="row">{{ t('subtotal') }}</td>
                <td><span>{{ subtotal }}</span></td>
              </tr>
              <tr>
                <td scope="row">{{ t('shipping') }}</td>
                <td v-if="shipping" ><span>{{ shipping }}</span></td>
                <td v-else          ><span>{{ t('offered') }}</span></td>
              </tr>
              <tr>
                <td scope="row">{{ t('total') }}</td>
                <td><span>{{ subtotal + shipping }}</span></td>
              </tr>
              <tr class="text-muted">
                <td scope="row">{{ t('vat') }}</td>
                <td><span>{{ vat.toFixed(2) }}</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="d-grid gap-2 d-md-flex justify-content-md-end">
        <ContinueShopping />
        <button type="submit" class="btn btn-primary">{{ t('validate order') }}</button>
      </div>
      </form>
    </div>
</template>

<script>
import { useI18n } from 'vue-i18n';
import ContinueShopping from '@/components/Cart/ContinueShopping'

export default {
  name:'Shipping',
  components: {
    ContinueShopping
  },
  setup() {
    const { t } = useI18n({
      inheritLocale: true,
      useScope: 'local'
    })
    return { t }
  },
  created() {
    this.$store.dispatch("cartModule/FETCH_COUNTRIES")
  },
  computed: {
    countries() {
      return this.$store.state.cartModule.countries
    },
    subtotal() {
      return this.$store.getters['cartModule/cartTotalPrice']
    },
    shipping() {
      // not implemented yet
      // offered by default => return 0
      return 0
    },
    vat() {
      return 17 / 100 * (this.subtotal + this.shipping)
    },
  },
}
</script>

<style>

</style>

<i18n>
{
  "en": {
    "shipping": "shipping",
    "validate order": "validate order",
    "subtotal": "subtotal",
    "total": "total*",
    "offered": "offered",
    "vat": "*VAT"
  },
  "fr": {
    "shipping": "livraison",
    "validate order": "valider ma commande",
    "subtotal": "sous-total",
    "total": "total*",
    "offered": "offerte",
    "vat": "*TVA incluse"
  }
}
</i18n>