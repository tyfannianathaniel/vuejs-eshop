<template>
  <LoginForm/>
</template>

<script>
import LoginForm from '@/components/LoginForm.vue'
import { useI18n } from 'vue-i18n';

export default {
  name: "LogIn",
  components: {
    LoginForm
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