<template>
  <div class="container">
    <Header/>
    <router-view/>
    <Footer />
  </div>
  <SidePanel/>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import SidePanel from '@/components/SidePanel.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Footer,
    SidePanel
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

ul{
  list-style: none;
}
</style>
