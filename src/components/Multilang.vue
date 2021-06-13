<template>
    <div>
        <select class="form-select" v-model="$i18n.locale" name="lang" id="lang" aria-label="lang select">
            <option v-for="lang of langs" :key="lang.id" :value="lang.iso_code" >{{ lang.iso_code }}</option>
        </select>
    </div>
</template>

<script>
export default {
  name:'Multilang',
  computed: {
    langs() {
      return this.$store.state.langs;
    },
  },
  created(){
    this.$store.dispatch("fetchLangs").then(() =>{})
  }
}
</script>