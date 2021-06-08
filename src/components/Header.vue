<template>
  <nav class="sticky-top bg-white navbar navbar-light navbar-expand-lg mb-lg-3 d-flex justify-content-between">
    <div class="container-fluid px-0">

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse">
        <ul class="navbar-nav">
          <li class="nav-item active"><router-link class="nav-link ps-0" to="/">Accueil</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/catalog">Catalogue</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/about">Contact</router-link></li>
        </ul>
      </div>

      <router-link to="/" class="navbar-brand flex-grow-1 d-flex justify-content-center">MyShop</router-link>


      <div class="navbar">
        <ul class="navbar-nav d-flex flex-row mb-3">
          <li class="nav-item p-1">
            <router-link class="nav-link" to="#"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasCart"
              aria-controls="offcanvasCart"
            >
              <svg class="bi" width="21" height="21" fill="currentColor"><use xlink:href="assets/bootstrap-icons.svg#heart"/></svg>
            </router-link>
          </li>
          <li class="nav-item p-1">
            <router-link class="nav-link" to="#"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasCart"
              aria-controls="offcanvasCart"
            >
              <svg class="bi" width="21" height="21" fill="currentColor"><use xlink:href="assets/bootstrap-icons.svg#person-circle"/></svg>
            </router-link>
          </li>
          <li class="nav-item p-1">
            <router-link class="nav-link pe-0" to="#"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasCart"
              aria-controls="offcanvasCart"
            >
              <svg class="bi" width="21" height="21" fill="currentColor"><use xlink:href="assets/bootstrap-icons.svg#bag"/></svg>
            </router-link>
          </li>
          <li class="nav-item p-1">
            <router-link class="nav-link pe-0" to="#"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasCart"
              aria-controls="offcanvasCart"
            >
              <svg class="bi" width="21" height="21" fill="currentColor"><use xlink:href="assets/bootstrap-icons.svg#search"/></svg>
            </router-link>
          </li>
        </ul>
      </div>

      

    </div>
  </nav>
</template>

<script>
export default {
}
</script>

<style>
</style>