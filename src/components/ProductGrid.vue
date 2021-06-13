<template>
    <main class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        <div
            v-for="product of products"
            :key="product.id"
            class="col-sm-6"
        >
            <div
                @mouseenter="toggleBtnVisibility"
                @mouseleave="toggleBtnVisibility"
                class="card mw-100 h-100 text-decoration-none text-reset"
            >
                <router-link class="stretched-link" :to="{name: 'Products', params: {id: product.id}}">
                    <span class="badge bg-warning position-absolute top-0 start-100 zindex-sticky">{{product.price}}</span>
                    <img
                        onerror="this.onerror=null;this.src='./assets/images/placeholder.png';"
                        :src="concatImgSrc(product)"
                        class="card-img-top"
                        :alt="product.images[0].alt"
                    >
                </router-link>
                <div class="card-body position-relative">
                    <button @click="addToCart(product)" type="button" class="btn btn-danger">{{ t('add to cart') }}</button>
                    <h5 class="card-title">{{product.brand}}</h5>
                    <p class="card-text">{{product.title}}</p>
                </div>
            </div>
        </div>
    </main>
</template>


<script>
import { useI18n } from 'vue-i18n';

export default {
    name:'ProductGrid',
    props: {
      'filter' : String,
      'isAvailable': Boolean,
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
        toggle: false,
      }
    },
    computed: {
      products() {

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
    methods: {
      addToCart() {
        // this.$store.dispatch("updateCart", { product: product })
      },
      toggleBtnVisibility(e) {
        let button = e.target.getElementsByTagName("button");
        if (this.toggle) {
            button[0].classList.toggle("visible");
            return;
        }
        button[0].classList.toggle("visible");
      },
      concatImgSrc(product) {
        return `./assets/images/${product.images[0].filename}`;
      },
      sortByAscendingPrice(products) {
        return products.sort( (a, b) => {
            return parseFloat(a.price) - parseFloat(b.price)
        })
      },
      sortByAscendingId(products) {
        return products.sort( (a, b) => {
            return a.id - b.id
        })
      },
      sortByDescendingPrice(products) {
        return products.sort( (a, b) => {
            return parseFloat(b.price) - parseFloat(a.price)
        })
      },
      sortByAvailability(products) {
        for (const product of products) {
            if( product.quantity < 1 ) products.splice(products.indexOf(product), 1)
        }
        return products
      },
      sortByAlphabeticalBrandName(products) {
        return products.sort( (a, b) => {

            let aBrand = a.brand.toLowerCase()
            let bBrand = b.brand.toLowerCase()

            if ( aBrand < bBrand ) {
                return -1
            }
            if ( aBrand > bBrand ) {
                return 1
            }
            return 0
        })
      },
    },
}
</script>

<style scoped>
.badge {
    padding: .4rem;
    color: black;
    transform: translate(calc(-100% - .5rem), .5rem);
}
.badge::after{
    content:" €";
}
.card:hover::after {
    content:"";
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(128,128,128,.1);
}
button {
    visibility: hidden;
    position: absolute;
    transform: translate(-50%, -150%);
    top: 0;
    left: 50%;
    z-index: 10;
}
button:hover {
    background: #B02A37;
}
</style>

<i18n>
{
  "en": {
    "add to cart": "Add to cart"
  },
  "fr": {
    "add to cart": "Ajouter au panier"
  }
}
</i18n>