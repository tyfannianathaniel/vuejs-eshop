<template>
  <section class="text-center">
    <div class="card p-5 bg-light mx-auto" style="max-width:520px; margin-top:40px;">
      <article>
        <header>
          <h2 class="mb-4">{{ t('Create account') }}</h2>
        </header>
        <form @submit.prevent ="handleSubmit"
        >
          <div>
            <ul v-show="errors.length > 0">
              <b>{{ t('Errors') }}</b>
              <li class="fw-lighter list-unstyled text-danger" v-for="error in errors" :key="error.id">{{ error }}</li>
            </ul> 
          </div>
          <div class="mb-3">
            <label class="mb-2" for="lastname">{{ t('Lastname')}}</label>
            <input class="form-control" type="text" id="lastname" v-model="lastname" aria-label="{{ t('Aria lastname')}}">
          </div>
          <div class="mb-3">
            <label class="mb-2" for="firstname">{{ t('Firstname')}}</label>
            <input class="form-control" type="text" id="firstname" v-model="firstname" aria-label="{{ t('Aria firstname')}}">
          </div>
          <div class="mb-3">
            <label class="mb-2" for="email">{{ t('Email address')}}</label>
            <input class="form-control" name="email" v-model="email" type="email" aria-label="{{ t('Aria email')}}">
          </div>
          <div class="mb-3">
            <label class="mb-2" for="password">{{ t('Password')}}</label>
            <input class="form-control" name="password" v-model="password.password" type="password" aria-label="{{ t('Aria password')}}">
          </div>
          <div class="mb-3">
            <label class="mb-2" for="confirm">{{ t('Confirm password')}}</label>
            <input class="form-control" name="confirm" v-model="password.confirm" type="password" aria-label="{{ t('Aria confirm password')}}">
          </div>
          <div class="mb-3">
            <button type="submit" class="btn btn-primary">{{ t('Register')}}</button>
          </div>
        </form>
        
        <p><small>{{ t('Obligatory') }}</small></p>
        <p>{{ t('Account') }}
          <router-link to="/">{{ t('Connect') }}</router-link>
        </p>
      </article>
    </div>
  </section>
</template>

<script>

import { useI18n } from 'vue-i18n';

export default {
  data(){
    return {
        email: "",
        password: {
          password: "",
          confirm: ""
        },
        lastname:"",
        firstname: "",
      errors:[]
    }
  },
  setup() {
    const { t } = useI18n({
      inheritLocale: true,
      useScope: 'local'
    })
    return { t }
  },
  methods: {
    handleSubmit(){

      if(this.email && this.password.confirm &&
        this.password.password && this.lastname && this.firstname){
        this.$router.push({name:"Home"}); 
      }

      this.errors = []

      if (!this.email) {
        this.errors.push('Email obligatoire.');
      }
      if (!this.password) {
        this.errors.push('Mot de passe obligatoire.');
      }
      if (this.password.confirm !== this.password) {
        this.errors.push('Confirmation de mot de passe non valide.');
      }
      if (!this.lastname) {
        this.errors.push('Nom obligatoire.');
      }
      if (!this.firstname) {
        this.errors.push('Prénom obligatoire.');
      }
    }
  }
}
</script>

<i18n>
{
  "en": {
    "Create account": "Create an account",
    "Email address": "Email Address",
    "Password": "Create a password",
    "Confirm password": "Confirm password",
    "Lastname": "Lastname",
    "Firstname": "Firstname",
    "Address": "Address",
    "Register": "Register",
    "Aria email": "Enter your email",
    "Aria password": "Create your password",
    "Aria confirm password": "Confirm your password",
    "Aria lastname": "Enter Your lastname",
    "Aria firstname": "Enter Your firstname",
    "Obligatory": "*You must fill all the fields",
    "Errors": "Please correct the following error(s):",
    "Account": "Already have an account ? ",
    "Connect": "Sign in",
  },
  "fr": {
    "Create account": "Créer un compte",
    "Email address": "Adresse mail",
    "Password": "Mot de passe",
    "Confirm password": "Confirmation du mot de passe",
    "Lastname": "Nom",
    "Firstname": "Prénom",
    "Register": "Enregistrer",
    "Aria email": "Entrez votre adresse email",
    "Aria password": "Créez votre mot de passe",
    "Aria confirm password": "Confirmez votre mot de passe",
    "Aria lastname": "Entrez Votre nom",
    "Aria firstname": "Entrez Votre prénom",
    "Obligatory": "* Tous les champs sont obligatoires",
    "Errors": "Veuillez vérifier les erreurs suivantes:",
    "Account": "Vous avez déjà un compte ? ",
    "Connect": "Connectez vous"
  }
}
</i18n>