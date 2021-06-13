<template>
    <aside class="d-flex pb-3 justify-content-between ">
        <div>
            <p class="text-start"><span class="badge bg-secondary">{{total}}</span>{{ t('products') }}</p>
        </div>
        <div class="d-flex">
            <div class="pe-5 form-check form-switch">
                <input @change="isAvailable(event)" v-model="checked" class="form-check-input" type="checkbox" id="switchAvailableNow" checked>
                <label class="form-check-label" for="switchAvailableNow">{{ t('available now') }}</label>
            </div>
            <div>
                <form>
                    <select @change="sortBy(event)" class="form-select form-select-sm" aria-label="select 'sort by' filter">
                        <option selected value="our-selection">{{ t('our selection') }}</option>
                        <option value="price-ascending">{{ t('ascending price') }}</option>
                        <option value="price-descending">{{ t('descending price') }}</option>
                        <option value="brand-name">{{ t('by manufacturer') }}</option>

                        <!-- <option v-for="filter in sortByFilters" :key="filter.value" value="filter.value">{{filter.text}}</option> -->

                    </select>
                </form>
            </div>
        </div>
    </aside>
</template>

<script>
import { useI18n } from 'vue-i18n';

export default {
    name: 'ProductStatusBar',
    setup() {
      const { t } = useI18n({
        inheritLocale: true,
        useScope: 'local'
      })
      return { t }
    },
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
                return this.$store.getters['productsModule/getAvailableProducts'].length
            } else {
                return this.$store.state['productsModule/products'].length
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

<i18n>
{
  "en": {
    "products": " Products",
    "available now": "Available now",
    "our selection": "Our selection",
    "ascending price": "Ascending price",
    "descending price": "Descending price",
    "by manufacturer": "By manufacturer"
  },
  "fr": {
    "products": " Produits",
    "available now": "Disponible maintenant",
    "our selection": "Notre sélection",
    "ascending price": "Prix (ascendant)",
    "descending price": "Prix (descendant)",
    "by manufacturer": "Par marque"
  }
}
</i18n>