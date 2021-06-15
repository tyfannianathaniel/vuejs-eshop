<template>
  <div class="d-flex justify-content-md-end justify-content-sm-center">
    <form class="col-lg-4 col-sm" @submit.prevent="validate">

      <div class="mb-3">

        <label for="country" class="form-label">{{ t('shipping') }}</label>
        <select class="form-select" name="country" id="county" aria-label="country select">
          <option v-for="country of countries" :key="country.id" :value="country.iso_code" >{{ country.name }}</option>
        </select>

        <!-- #refactor -->
        <div class="my-3 text-lg-end table-responsive">
          <table class="table table-borderless">
            <tbody>
              <tr>
                <td class="text-start" scope="row">{{ t('subtotal') }}</td>
                <td class="text-end"><span>{{ subtotal }}</span></td>
              </tr>
              <tr>
                <td class="text-start" scope="row">{{ t('shipping') }}</td>
                <td class="text-end" v-if="shipping" ><span>{{ shipping }}</span></td>
                <td class="text-end" v-else          ><span class="text-uppercase">{{ t('offered') }}</span></td>
              </tr>
              <tr class="text-uppercase fw-bold fs-4 border-top border-bottom">
                <td class="text-start" scope="row">{{ t('total') }}</td>
                <td class="text-end"><span>{{ subtotal + shipping }}</span></td>
              </tr>
              <tr class="text-muted">
                <td class="text-start" scope="row">{{ t('vat') }}</td>
                <td class="text-end"><span>{{ vat.toFixed(2) }}</span></td>
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
  data() {
    return {
      showModal: false,
    }
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
  methods: {
    validate() {

      // modal : https://codepen.io/team/Vue/pen/mdPoyvv?editors=1010

      this.$store.state.userModule.isLoggedIn
      ? this.$router.push({ name: 'AddressCheckout'})
      : this.showModal = true

    }
  }
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