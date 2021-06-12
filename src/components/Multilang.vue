<template>
    <div>
        <select class="form-select" name="lang" id="lang" aria-label="lang select">
            <!-- <option value="fr"><span class="flag flag-fr"></span>FR</option> -->
            <!-- <option value="en"><span class="flag-icon flag-icon-en"></span>EN</option> -->
            <option v-for="lang of langs" :key="lang.id" :value="lang.iso_code" >{{ lang.iso_code }}</option>
        </select>
    </div>
</template>

<script>
export default {
  name:'Multilang',
  computed: {
    langs() {
      console.log(this.$store.state.langs)
      return this.$store.state.langs;
    },
  },
  created(){
    this.$store.dispatch("fetchLangs").then(() =>{})
  }
}
</script>