<template>
   <div>
    <div>
      <p class="text-center" v-show="!cart.length"><i>{{ t('add some products')}}</i></p>

      <ul
        v-for="product of cart"
        :key="product.id"
      >
        <li class="product-list-item mb-4">

          <div class="card mb-3 border-0" style="max-width: 540px;">
            <div class="row g-0">
              <div class="col-5">
                <img
                    onerror="this.onerror=null;this.src='./assets/images/placeholder.png';"
                    :src="concatImgSrc(product)"
                    :alt="product.images[0].alt"
                    class="rounded h-100 img-fluid"
                >
              </div>
              <div class="col-7 card-body position-relative">

                    <p class="card-title fw-bold">{{product.title}}</p>
                    <h5 class="card-text ">{{product.brand}}</h5>

                    <div class="d-flex justify-content-between">
                      <p class="card-text price fw-bold">{{product.price}}</p>
                      <div class="d-flex">
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
    </div>

    <div class="text-center mb-4">

      <div class="w-100 bg-light p-2 my-3" v-show="cart.length">
        <span>{{ t('total') }} <span>{{total}}</span>{{ t('currency') }}</span>
      </div>

      <button
          @click="checkout"
          class="btn btn-primary"
          type="button"
          v-show="cart.length"
      >
      {{ t('checkout') }}
      </button>
    </div>

   </div>
</template>

<script>
import { useI18n } from 'vue-i18n';
import { mapMutations, mapActions } from 'vuex'

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
    cart(){
      return this.$store.getters['cartModule/cartProducts']
    },
    total(){
      return this.$store.getters['cartModule/cartTotalPrice']
    },
  },
  methods: {
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
      concatImgSrc(product) {
        return `./assets/images/${product.images[0].filename}`;
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
