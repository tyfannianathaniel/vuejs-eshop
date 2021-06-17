<template>
  <div class="text-center sidePanelForms my-5">

    <div class="pb-4">
      <div class="lead w-100">{{ t("don't have an account yet") }}</div>
      <router-link to="/register" data-bs-dismiss="offcanvas" @click="displaySignIn" type="button" class="my-3 btn btn-primary">{{ t('create an account') }}</router-link>
    </div>

  </div>
</template>

<script>
import { useI18n } from 'vue-i18n';

export default {
 setup() {
    const { t } = useI18n({
      inheritLocale: true,
      useScope: 'local'
    })
    return { t }
  }
}
</script>

<i18n>
{
  "en": {
    "don't have an account yet": "Don't have an account yet?",
    "create an account": "Create an Account"
  },
  "fr": {
    "don't have an account yet": "Vous n'avez pas de compte{'\u202f'}?",
    "create an account": "Créer un compte"
  }
}
</i18n>
