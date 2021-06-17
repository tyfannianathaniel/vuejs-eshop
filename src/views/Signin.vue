<template>
  <SignInForm/>
</template>

<script>
import SignInForm from '@/components/SignInForm.vue'
import { useI18n } from 'vue-i18n';

export default {
  name: "LogIn",
  components: {
    SignInForm
  },
  setup() {

    const { t } = useI18n({
      inheritLocale: true,
      useScope: 'local'
    })

    return { t }
  },
}
</script>

<style>

</style>