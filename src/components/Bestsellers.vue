<template>
    <h2>Nos Bestsellers</h2>    
    <section class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        <div v-for="product of products"
            :key="product.id">
            <div class="card mw-100 h-100 text-decoration-none text-reset">
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
                    <button @click="addToCart" type="button" class="btn btn-danger">Add to Cart</button>
                    <h5 class="card-title">{{product.brand}}</h5>
                    <p class="card-text">{{product.title}}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name:'Bestsellers',
    props: {
    },
    computed: {
        products(){
            let products =[]

            products = this.$store.getters.isBestseller

            return products

        }
    },
    methods: {
        concatImgSrc(product) {
            return `./assets/images/${product.images[0].filename}`;
        },
        setAltImg(event) {
            console.log(event)
            // event.currentTarget.src = "#"
        }
    },
    created(){
        this.$store.dispatch("fetchProducts").then(() =>{})
        console.log(this.$store.state)
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