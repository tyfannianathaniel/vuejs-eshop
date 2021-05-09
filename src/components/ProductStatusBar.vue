<template>
    <aside class="d-flex pb-3 justify-content-between ">
        <div>
            <p class="text-start"><span class="badge bg-secondary">{{total}}</span> Produits</p>
        </div>
        <div>
            <form action="">
                <select @change="sortBy(event)" class="form-select form-select-sm" aria-label="select 'sort by' filter">
                    <option selected value="our-selection">Our Selection </option>
                    <option value="price-ascending">Price (ascending)</option>
                    <option value="price-descending">Price (descending)</option>
                    <option value="brand-name">Brand Name</option>
                </select>
            </form>
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
    methods: {
        sortBy() {
            this.$emit(
                'sortBy',
                event.target.value
            );
        }
    },
}
</script>

<style>

</style>