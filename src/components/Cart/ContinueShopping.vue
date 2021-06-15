<template>

  <router-link
    @click="goBack"
    to=""
    class="btn btn-link"
    type="button" tag="button"
    data-bs-dismiss="offcanvas"
  >
    {{ t('continue') }}
  </router-link>

</template>

<script>
import { useI18n } from 'vue-i18n';

export default {
  name:'ContinueShopping',
  setup() {
    const { t } = useI18n({
      inheritLocale: true,
      useScope: 'local'
    })
    return { t }
  },
  props: {
    isEmbeddedInModal: Boolean
  },
  data() {
    return {
      isModal: this.isEmbeddedInModal
    }
  },
  methods: {
    goBack() {
      this.isModal
      ? null
      : window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
    }
  }
}
</script>

<i18n>
{
  "en": {
    "continue": "Continue Shopping"
  },
  "fr": {
    "continue": "Continuer mes achats"
  }
}
</i18n>