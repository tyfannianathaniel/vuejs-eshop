<template>
    <div class="offcanvas sm-offcanvas-top offcanvas-end d-flex flex-column justify-content-center px-3 hide-scroll-bar" data-bs-scroll="true" tabindex="-1" id="searchbar" aria-labelledby="search bar">
      <div class="d-flex align-items-center">

        <span><svg class="bi" width="21" height="21" fill="currentColor"><use xlink:href="assets/bootstrap-icons.svg#search"/></svg></span>

        <div class="offcanvas-body d-flex justify-content-center ps-0">
          <form method="" class="d-flex">
              <input  class="flex-shrink-2 me-2" type="search" placeholder="Rechercher un produit">
              <button @click="search" type="submit" class="btn btn-primary">Ok</button>

          </form>
        </div>

        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>

      </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
  #searchbar{
    height: 80px;
    overflow-y: scroll;
  }

  .hide-scroll-bar::-webkit-scrollbar{
    display: none;
  }

  .hide-scroll-bar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
</style>


