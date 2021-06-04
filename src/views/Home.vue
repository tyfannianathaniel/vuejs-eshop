<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <New collection="Nouvelle collection PE21" msg="Notre sélection pour les beaux jours"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import New from '@/components/New.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld, 
    New
  }
}
</script>
