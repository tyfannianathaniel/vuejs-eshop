<template>
    <section>
        <ul class="d-flex row text-center justify-content-between">
            <li class="col-6 col-md-3">
                <svg class="bi" width="21" height="21" fill="currentColor"><use xlink:href="assets/bootstrap-icons.svg#arrow-counterclockwise"/></svg>
                <p>Retour gratuit sous <br> 30 jours</p>
                
            </li>
            <li class="col-6 col-md-3">
                <svg class="bi" width="21" height="21" fill="currentColor"><use xlink:href="assets/bootstrap-icons.svg#truck"/></svg>
                <p>Livraison à partir de <br> 50€ d'achat</p>
                
            </li>
            <li class="col-6 col-md-3">
                <svg class="bi" width="21" height="21" fill="currentColor"><use xlink:href="assets/bootstrap-icons.svg#headset"/></svg>
                <p>Service client dédié</p>
                
            </li>
            <li class="col-6 col-md-3">
                <svg class="bi" width="21" height="21" fill="currentColor"><use xlink:href="assets/bootstrap-icons.svg#lock-fill"/></svg>
                <p>Paiement sécurisé</p>
                
            </li>
        </ul>
    </section>
</template>

<script>
export default {
    name: 'Reassurance'
}
</script>

<style scoped>
    ul{
        padding: 0;
    }

    svg{
        /* Centrer */
        display: block;
        margin: auto;
    }
</style>