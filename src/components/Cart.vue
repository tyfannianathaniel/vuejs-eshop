<template>
     <table>
        <thead>
            <tr>
                <th scope="col">Produit</th>
                <th scope="col">Quantité</th>
                <th scope="col">Total</th>
            </tr>
        </thead>
        <tbody>
            <!-- <tr v-for="product of cart">

            <tr> -->
        </tbody>
    </table>

    <button
        @click="checkout"
        class="btn btn-primary"
        type="button"
    >
    Finaliser mes achats
    </button>

</template>

<script>
export default {

}
</script>

<style>

</style>