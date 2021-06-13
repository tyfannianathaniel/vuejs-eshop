<template>
  <div class="home">
    <Carousel />
    <Bestsellers/>
  </div>
</template>

<script>
// @ is an alias to /src
import Carousel from '@/components/Carousel.vue';
import Bestsellers from '@/components/Bestsellers.vue';


export default {
  name: 'Home',
  components: {
    Carousel,
    Bestsellers
  }
}
</script>

<style scoped>
section {
  margin: 10px 0px;
}
</style>
