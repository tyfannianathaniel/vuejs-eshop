<template>

  <div class="bg-light">
      <Header/>
    <div class="container my-5">
      <router-view class="my-3"/>
    </div>
      <Footer />
  </div>

  <SidePanel/>
  <SearchBar/>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import SidePanel from '@/components/SidePanel.vue'
import SearchBar from '@/components/SearchBar.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Footer,
    SidePanel,
    SearchBar,
  },
  created(){
      this.$store.dispatch("products/FETCH_PRODUCTS")
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
}
</style>
