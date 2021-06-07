<template>
  <div class="home">
    <New collection="Nouvelle collection PE21" msg="Notre sélection pour les beaux jours"/>
    <Bestsellers/>
    <Newsletter />

  </div>
</template>

<script>
// @ is an alias to /src
import New from '@/components/New.vue';
import Bestsellers from '@/components/Bestsellers.vue';
import Newsletter from '@/components/Newsletter.vue';



export default {
  name: 'Home',
  components: {
    New,
    Bestsellers,
    Newsletter
  }
}
</script>

<style scoped>
section {
  margin: 10px 0px;
}
</style>
