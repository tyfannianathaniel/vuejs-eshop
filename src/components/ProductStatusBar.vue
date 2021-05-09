<template>
    <aside class="d-flex justify-content-between ">
        <div>
            <p class="text-start p-1"><span class="badge bg-secondary">{{total}}</span> Produits</p>
        </div>
        <div>
            // filters
        </div>
    </aside>
</template>

<script>
export default {
    computed: {
        total() {
            return this.$store.state.total
        },
    },
}
</script>

<style>

</style>