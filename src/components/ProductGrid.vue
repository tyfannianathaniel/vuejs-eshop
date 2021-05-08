<template>
    <div v-if="isLoading" class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
    </div>

    <div v-else>
        <aside class="d-flex justify-content-between ">
            <div>
                <p class="text-start p-1"><span class="badge bg-secondary">{{total}}</span> Produits</p>
            </div>
            <div>
                // filters
            </div>
        </aside>
        <main class="mb-5 row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            <div
                v-for="product of products"
                :key="product.id"
                class="col-sm-6"
            >
                <div class="card">
                <span class="badge badge-card bg-warning position-absolute top-0 start-100">{{product.price}}</span>
                <img :src="concatImgSrc(product)" class="card-img-top" :alt="product.images[0].alt">
                <div class="card-body">
                    <h5 class="card-title">{{product.brand}}</h5>
                    <p class="card-text">{{product.title}}</p>
                </div>
                </div>
            </div>
        </main>
    </div>

</template>

<script>
export default {
    data() {
        return {
            isLoading: true
        }
    },
    computed: {
        products() {
            return this.$store.state.products
        },
        total() {
            return this.$store.state.total
        }
    },
    methods: {
        concatImgSrc(product) {
            return `./assets/images/${product.images[0].filename}`
        }
    },
    created() {
        this.$store.dispatch('fetchProducts').then(
            () => this.isLoading = false
        )
    }
}
</script>

<style scoped>
.badge-card {
    padding: .4rem;
    color: black;
    transform: translate(calc(-100% - .5rem), .5rem);
}
.badge-card::after{
    content:" €"
}
</style>