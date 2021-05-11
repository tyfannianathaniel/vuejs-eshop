<template>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasCart" aria-labelledby="offcanvasCartLabel">
    <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasCartLabel">Votre Panier</h5>
        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
        <div>
            <!--
                - ajouter au store un panier
                - ajouter à cet onglet le nombre de produits dans le panier
                - ajouter à cet onglet la liste des produits dans le panier
                - ajouter à cet onglet un bouton 'finaliser mes achats'

            -->
            <table>
                <thead>

                </thead>
                <tbody>

                </tbody>
            </table>
            <button
                @click="checkout"
                class="btn btn-primary"
                type="button"
            >
            Finaliser mes achats
            </button>
        </div>
    </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>