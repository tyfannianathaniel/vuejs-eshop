<template>
  <div class="home">
    <New collection="Nouvelle collection PE21" msg="Notre sélection pour les beaux jours"/>
    <Bestsellers/>
  </div>
</template>

<script>
// @ is an alias to /src
import New from '@/components/New.vue';
import Bestsellers from '@/components/Bestsellers.vue';


export default {
  name: 'Home',
  components: {
    New,
    Bestsellers
  }
}
</script>

<style scoped>
section {
  margin: 10px 0px;
}
</style>
