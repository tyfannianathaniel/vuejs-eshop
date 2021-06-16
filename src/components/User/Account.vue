<template>
  <div class="text-center my-5">
    <p>Bienvenue {{ user.firstname + ' ' + user.lastname}}</p>

    <router-link
      @click="logout"
      to="/"
      class="btn btn-primary"
      type="button" tag="button"
      data-bs-dismiss="offcanvas"
    >
      {{ t('logout') }}
    </router-link>
  </div>
</template>

<script>
import { useI18n } from 'vue-i18n';

export default {
  name:"UserAccount",
  setup() {
    const { t } = useI18n({
      inheritLocale: true,
      useScope: 'local'
    })
    return { t }
  },
  computed: {
    user() {
      let user = {
        firstname: 'Boris',
        lastname: 'Grishenko'
      }
      return user

      // return this.$store.getters['user/getUser']
    }
  },
  methods: {
    async logout() {
      await this.store.dispatch('auth/LOGOUT')
      // could it be sync since it calls an async action?
    }
  }
}
</script>

<style>

</style>

<i18n>
{
  "en": {
    "logout": "Log Out"
  },
  "fr": {
    "logout": "Se Déconnecter"
  }
}
</i18n>