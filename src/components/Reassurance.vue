<template>
    <section class="container bg-white rounded-pill w-100 my-5 p-3">
        <ul class="d-flex row text-center justify-content-between list-unstyled m-0 px-0 pb-0 pt-4">
              <li class="col-6 col-md-3">
                  <svg class="bi" width="21" height="21" fill="currentColor"><use xlink:href="assets/bootstrap-icons.svg#arrow-counterclockwise"/></svg>
                  <p>Retour gratuit sous 30 jours</p>

              </li>
              <li class="col-6 col-md-3">
                  <svg class="bi" width="21" height="21" fill="currentColor"><use xlink:href="assets/bootstrap-icons.svg#truck"/></svg>
                  <p class="m-0">Livraison à partir de 50€ d'achat</p>

              </li>
              <li class="col-6 col-md-3">
                  <svg class="bi" width="21" height="21" fill="currentColor"><use xlink:href="assets/bootstrap-icons.svg#headset"/></svg>
                  <p class="m-0">Service client dédié</p>

              </li>
              <li class="col-6 col-md-3">
                  <svg class="bi" width="21" height="21" fill="currentColor"><use xlink:href="assets/bootstrap-icons.svg#lock-fill"/></svg>
                  <p class="m-0">Paiement sécurisé</p>

              </li>

        </ul>
    </section>
</template>

<script>
import { useI18n } from 'vue-i18n'

export default {
  name: 'Reassurance',
  setup() {
    const { t } = useI18n({
      inheritLocale: true,
      useScope: 'local'
    })
    return { t }
  },
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

<i18n>
{
  "en": {

  },
  "fr": {

  }
}
</i18n>
