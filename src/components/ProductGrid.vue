<template>
    <main class="mb-5 row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        <div
            v-for="product of products"
            :key="product.id"
            class="col-sm-6"
        >
            <div class="card mw-100 h-100">
                <span class="badge bg-warning position-absolute top-0 start-100">{{product.price}}</span>
                <img onerror="this.onerror=null;this.src='./assets/images/placeholder.png';" :src="concatImgSrc(product)" class="card-img-top" :alt="product.images[0].alt">
                <div class="card-body">
                    <h5 class="card-title">{{product.brand}}</h5>
                    <router-link
                        :to="{name: 'Products', params: {id: product.id}}"
                        class="stretched-link text-decoration-none text-reset"
                    >
                        <p class="card-text">{{product.title}}</p>
                    </router-link>
                </div>
            </div>
        </div>
    </main>
</template>


<script>

export default {
    props: {
        'filter' : String,
        'isAvailable': Boolean,
    },
    computed: {
        products() {

            let products =[]

            if (this.isAvailable) {
                products = this.$store.getters.availableProducts
            } else {
                products = this.$store.state.products
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
                    return this.$store.state.products
            }
        },
    },
    methods: {
        concatImgSrc(product) {
            let img = `./assets/images/${product.images[0].filename}`
            console.log(img);
            return img;
        },
        setAltImg(event) {
            console.log(event)
            // event.currentTarget.src = "#"
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
</style>