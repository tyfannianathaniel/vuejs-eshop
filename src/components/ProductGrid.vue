<template>
    <div v-if="isLoading" class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
    </div>

    <div v-else>
        <p>/ display product number /</p>
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            <div
                v-for="product of products"
                :key="product.id"
                class="col-sm-6"
            >
                <div class="card">
                <span class="badge bg-warning position-absolute top-0 start-100">{{product.price}}</span>
                <img :src="concatImgSrc(product)" class="card-img-top" :alt="product.images[0].alt">
                <div class="card-body">
                    <h5 class="card-title">{{product.brand}}</h5>
                    <p class="card-text">{{product.title}}</p>
                </div>
                </div>
            </div>
        </div>
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
.badge {
    padding: .4rem;
    color: black;
    transform: translate(calc(-100% - .5rem), .5rem);
}
.badge::after{
    content:" €"
}
</style>