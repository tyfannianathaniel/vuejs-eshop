<template>
  <ul class="m-0 p-0" v-for="product of cart" :key="product.id">

    <li class="mb-4 product-list-item ">

      <div class="card mb-3 border-0">
        <div class="d-flex ">

          <!-- product image -->
          <div class="">
            <img
              onerror="this.onerror=null;this.src='./assets/images/placeholder.png';"
              :src="concatImgSrc(product)"
              :alt="product.images[0].alt"
              class="rounded-start h-100 img-fluid"
              style="max-width: 200px;"/>
          </div>

          <div class="card-body position-relative">

            <p class="card-title fw-bold">{{product.title}}</p>
            <h5 class="card-text ">{{product.brand}}</h5>

            <div class="d-flex justify-content-between">

              <p class="card-text price fw-bold">{{product.price * product.quantity}}</p>

              <div class="d-flex">

                <!-- quantity buttons -->
                <span class="me-2">
                  <a @click="decrementItemQuantity(product.id)" class="p-1" role="button" aria-label="Decrease product quantity">
                    <svg class="bi" width="21" height="21" fill="currentColor"><use xlink:href="assets/bootstrap-icons.svg#dash-circle"/></svg>
                  </a>
                  <a @click="incrementItemQuantity(product.id)" class="p-1" role="button" aria-label="Increase product quantity">
                    <svg class="bi" width="21" height="21" fill="currentColor"><use xlink:href="assets/bootstrap-icons.svg#plus-circle"/></svg>
                  </a>
                </span>

                <p class="card-text fw-bold">{{ t('quantity') + product.quantity}}</p>

              </div>

            </div>

            <a @click="removeFromCart(product.id)" role="button" class="card-text">{{ t('remove') }}</a>

          </div>
        </div>
      </div>
    </li>
  </ul>

</template>

<script>
import { useI18n } from 'vue-i18n';
import { mapMutations, mapActions } from 'vuex'

export default {
  name:'',
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
    concatImgSrc(product) {
      return `./assets/images/${product.images[0].filename}`;
    },
    ...mapMutations( 'cartModule', [
      'incrementItemQuantity',
      'spliceProductFromCart'
    ]),
    ...mapActions( 'cartModule', [
      'decrementCheck',
    ]),
    decrementItemQuantity(id) {
      // this.$store.dispatch("cartModule/decrementCheck")
      this.decrementCheck(id)
    },
    removeFromCart(id) {
      this.spliceProductFromCart(id)
    },
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
    "quantity": "Qty: ",
    "remove": "remove"
  },
  "fr": {
    "quantity": "Qté: ",
    "remove": "supprimer"
  }
}
</i18n>