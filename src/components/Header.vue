<template>
  <div class="bg-white sticky-top">

      <nav class="container bg-white navbar navbar-light navbar-expand-lg mb-lg-3 d-flex justify-content-between">
        <div class="container-fluid px-0">

          <!-- burger menu -->
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <!-- main menu -->
          <div class="collapse navbar-collapse flex-grow-0">
            <ul class="navbar-nav">
              <li class="nav-item active"><router-link class="nav-link ps-0" to="/">{{ t('homepage') }}</router-link></li>
              <li class="nav-item"><router-link class="nav-link" to="/catalog">{{ t('catalog' )}}</router-link></li>
              <!-- <li class="nav-item"><router-link class="nav-link" to="/about">Contact</router-link></li> -->
            </ul>
          </div>

          <!-- logotype -->
          <router-link to="/" class="navbar-brand flex-grow-1 d-flex justify-content-center">MyShop</router-link>

          <!-- second menu -->
          <div class="navbar">
            <ul class="navbar-nav d-flex flex-row mb-3">

              <li class="nav-item p-1">
                <Multilang class="nav-link pe-0"/>
              </li>

              <!-- search bar -->
              <li class="nav-item p-1">
                <router-link class="nav-link pe-0" to="#"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#searchbar"
                  aria-controls="offcanvas"
                >
                  <svg class="bi" width="21" height="21" fill="currentColor"><use xlink:href="assets/bootstrap-icons.svg#search"/></svg>
                </router-link>
              </li>

              <!-- account -->
              <li class="nav-item p-1">
                <router-link class="nav-link" to="#"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvas"
                  aria-controls="offcanvas"
                >
                  <svg class="bi" width="21" height="21" fill="currentColor"><use xlink:href="assets/bootstrap-icons.svg#person-circle"/></svg>
                </router-link>
              </li>

              <!-- cart -->
              <li class="nav-item p-1">
                <router-link class="nav-link pe-0" to="#"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvas"
                  aria-controls="offcanvas"
                >
                  <svg class="bi" width="21" height="21" fill="currentColor"><use xlink:href="assets/bootstrap-icons.svg#bag"/></svg>
                </router-link>
              </li>

            </ul>
          </div>
        </div>
      </nav>

  </div>
</template>

<script>
import Multilang from '@/components/Multilang';
import { useI18n } from 'vue-i18n';

export default {
  name: 'Header',
  components: {
    Multilang,
  },
  setup() {
    const { t } = useI18n({
      inheritLocale: true,
      useScope: 'local'
    })
    return { t }
  }
}
</script>

<style>

</style>

<i18n>
{
  "en": {
    "homepage": "Homepage",
    "catalog": "Catalog"
  },
  "fr": {
    "homepage": "Accueil",
    "catalog": "Catalogue"
  }
}
</i18n>