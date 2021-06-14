<template>
  <div class="text-center sidePanelForms my-5">

    <div class="pb-4">
      <span class="lead ">{{ t('log in') }}</span>
      <p class="lead">{{ t('to get access to your account') }}</p>
    </div>

    <form>
      <!-- take a look: https://www.npmjs.com/package/vee-validate -->
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">{{ t('email address') }}</label>
        <input name="email" type="email" class="form-control" :placeholder="t('email placeholder')" id="exampleInputEmail1" aria-describedby="emailHelp">
        <!-- <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> -->
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">{{ t('password') }}</label>
        <input name="password" type="password" placeholder="••••••••" class="form-control" id="exampleInputPassword1">
      </div>
      <fieldset>
        <button type="submit" class="btn btn-primary">{{ t('log in button') }}</button>
      </fieldset>
    </form>

  </div>
</template>

<script>
import { useI18n } from 'vue-i18n';

export default {
  data() {
    return {
      filled: false,
    }
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

<i18n>
{
  "en": {
    "log in": "Log in",
    "to get access to your account": "to access your account",
    "email address": "Email Address*",
    "password": "Password*",
    "log in button": "Log In",
    "email placeholder": "my-address{'@'}mail.com"
  },
  "fr": {
    "log in": "Connectez-vous",
    "to get access to your account": "pour accéder à votre compte",
    "email address": "Adresse mail*",
    "password": "Mot de passe*",
    "log in button": "Me Connecter",
    "email placeholder": "mon-adresse{'@'}mail.com"
  }
}
</i18n>

