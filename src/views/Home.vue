<template>
  <div class="home">
    <New collection="Nouvelle collection PE21" msg="Notre sélection pour les beaux jours"/>
  </div>
</template>

<script>
// @ is an alias to /src
import New from '@/components/New.vue';

export default {
  name: 'Home',
  components: {
    New
  }
}
</script>
