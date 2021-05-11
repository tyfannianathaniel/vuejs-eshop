<template>
    <aside class="d-flex pb-3 justify-content-between ">
        <div>
            <p class="text-start"><span class="badge bg-secondary">{{total}}</span> Produits</p>
        </div>
        <div class="d-flex">
            <div class="pe-5 form-check form-switch">
                <input @change="isAvailable(event)" v-model="checked" class="form-check-input" type="checkbox" id="switchAvailableNow" checked>
                <label class="form-check-label" for="switchAvailableNow">Disponible maintenant</label>
            </div>
            <div>
                <form>
                    <select @change="sortBy(event)" class="form-select form-select-sm" aria-label="select 'sort by' filter">
                        <option selected value="our-selection">Notre sélection</option>
                        <option value="price-ascending">Prix (ascendant)</option>
                        <option value="price-descending">Prix (descendant)</option>
                        <option value="brand-name">par Marque</option>

                        <!-- <option v-for="filter in sortByFilters" :key="filter.value" value="filter.value">{{filter.text}}</option> -->

                    </select>
                </form>
            </div>
        </div>
    </aside>
</template>

<script>
export default {
    data() {
        return {
            // sortByFilters: [
            //     {value:"our-selection", text:"Notre sélection"},
            //     {value:"price-ascending", text:"Prix (ascendant)"},
            //     {value:"price-descending", text:"Prix (descendant)"},
            //     {value:"brand-name", text:"Par Marque"},
            // ],
        checked: true,
        }
    },
    computed: {
        total() {
            if (this.checked) {
                return this.$store.getters.availableProducts.length
            } else {
                return this.$store.state.products.length
            }
        },
    },
    methods: {
        sortBy() {
            this.$emit(
                'sortBy',
                event.target.value
            )
        },
        isAvailable() {
            this.$emit(
                'isAvailable',
                event.target.checked
            )
        },
    },
}
</script>

<style>

</style>