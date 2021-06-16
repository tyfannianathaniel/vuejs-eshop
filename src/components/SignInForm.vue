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
            <ul v-if="errors.length > 0">
              <b>{{ t('Errors') }}</b>
              <li class="fw-lighter list-unstyled text-danger" v-for="error in errors" :key="error.id">{{ error }}</li>
            </ul> 
          </div>
          <fieldset class="mb-4">
            <legend class="mb-3">{{ t('User infos') }}</legend>
            <div class="mb-3">
              <label class="mb-2" for="signinEmail">{{ t('Email address')}}</label>
              <input class="form-control" name="signinEmail" v-model="form.signinEmail" type="email" aria-label="{{ t('Aria email')}}">
            </div>
            <p>{{form.signinEmail}}</p>
            <div class="mb-3">
              <label class="mb-2" for="signinPassword">{{ t('Password')}}</label>
              <input class="form-control" name="signinPassword" v-model="form.signinPassword" type="password" aria-label="{{ t('Aria password')}}">
            </div>
            <p>{{form.signinPassword}}</p>
            <div class="mb-3">
              <label class="mb-2" for="confirmPassword">{{ t('Confirm password')}}</label>
              <input class="form-control" name="confirmPassword" v-model="form.confirmPassword" type="password" aria-label="{{ t('Aria confirm password')}}">
            </div>
            <p>{{form.confirmPassword}}</p>
          </fieldset>
          <fieldset class="mb-4">
            <legend class="mb-3">{{ t('User details') }}</legend>
            <div class="mb-3">
              <select v-model="form.civility" aria-label="{{ t('Aria civility')}}">
                <option value="Ms">{{ t('Madam')}}</option>
                <option value="Mr">{{ t('Mister')}}</option>
              </select>
            </div>
            <div class="mb-3">
              <label class="mb-2" for="lastname">{{ t('Lastname')}}</label>
              <input class="form-control" type="text" id="lastname" v-model="form.lastname" aria-label="{{ t('Aria lastname')}}">
            </div>
            <div class="mb-3">
              <label class="mb-2" for="firstname">{{ t('Firstname')}}</label>
              <input class="form-control" type="text" id="firstname" v-model="form.firstname" aria-label="{{ t('Aria firstname')}}">
            </div>
            <div class="mb-3">
              <label class="mb-2" for="address">{{ t('Address')}}</label>
              <input class="form-control" type="text" id="address" v-model="form.address"  aria-label="{{ t('Aria address')}}">
            </div>
            <div class="mb-3">
              <label class="mb-2" for="city">{{ t('City')}}</label>
              <input class="form-control" type="text" id="city" v-model="form.city" aria-label="{{ t('Aria city')}}">
            </div>
            <div class="mb-4">
              <label class="mb-2" for="zip-code">{{ t('Zipcode')}}</label>
              <input class="form-control" type="text" id="zipCode" v-model="form.zipCode" pattern="[0-9]{5}" aria-label="{{ t('Aria zipcode')}}">
            </div>
            <div class="mb-3">
              <select name="country" v-model="form.country" aria-label="{{ t('Aria country')}}">
                <option v-for="country in form.countries" :key="country.id" value="{{ country.val }}">{{ country.name }}</option>
              </select>
            </div>
          </fieldset>
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
      form: {
        signinEmail: "",
        signinPassword: "",
        confirmPassword: "",
        civility: "Mr",
        lastname:"",
        firstname: "",
        address: "",
        city: "",
        zipCode: "",
        countries: [
        {
          id: 1, val:"FR", name:"France"
        },
        {
          id: 2, val:"BE", name:"Belgique"
        },
        {
          id: 3, val:"CH", name:"Suisse"
        },
        {
          id: 4, val:"GB", name:"Royaume-Uni"
        }
      ],
      },
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

      if(this.form.signinEmail && this.form.signinPassword && this.form.confirmPassword && this.form.civility && this.form.lastname && this.form.firstname && this.form.address && this.form.city && this.form.zipCode && this.form.countries){
        console.warn(this.form);
        this.$router.push({name:"Home"}); 
      }

      this.errors = [];

      if (!this.form.signinEmail) {
        this.errors.push('Email obligatoire.');
      }
      if (!this.form.signinPassword) {
        this.errors.push('Mot de passe obligatoire.');
      }
      if (this.form.confirmPassword !== this.signinPassword) {
        this.errors.push('Confirmation de mot de passe non valide.');
      }
      if (!this.form.civility) {
        this.errors.push('Civilité obligatoire.');
      }
      if (!this.form.lastname) {
        this.errors.push('Nom obligatoire.');
      }
      if (!this.form.firstname) {
        this.errors.push('Prénom obligatoire.');
      }
      if (!this.form.address) {
        this.errors.push('Adresse obligatoire.');
      }
      if (!this.form.city) {
        this.errors.push('Ville obligatoire.');
      }
      if (!this.form.zipCode) {
        this.errors.push('Code postal obligatoire.');
      }
      if (!this.form.countries) {
        this.errors.push('Pays obligatoire.');
      }
    }
  }
}
</script>

<i18n>
{
  "en": {
    "Create account": "Create an account",
    "User infos": "User information",
    "User details": "User details",
    "Email address": "Email Address",
    "Password": "Create a password",
    "Confirm password": "Confirm password",
    "Miss": "Miss",
    "Madam": "Ms",
    "Mister": "Mr",
    "Lastname": "Lastname",
    "Firstname": "Firstname",
    "Address": "Address",
    "City": "City",
    "Zipcode": "Zip code", 
    "Country": "Country",
    "Register": "Register",
    "Aria email": "Enter your email",
    "Aria password": "Create your password",
    "Aria confirm password": "Confirm your password",
    "Aria civility": "Enter your Civility",
    "Aria lastname": "Enter Your lastname",
    "Aria firstname": "Enter Your firstname",
    "Aria address": "Enter Your address",
    "Aria city": "Enter Your city",
    "Aria zipcode": "Enter Your zipcode",
    "Aria country": "Enter Your country",
    "Obligatory": "*You must fill all the fields",
    "Errors": "Please correct the following error(s):",
    "Account": "Already have an account ? ",
    "Connect": "Sign in"
  },
  "fr": {
    "Create account": "Créer un compte",
    "User infos": "Informations de connexion",
    "User details": "Informations personnelles",
    "Email address": "Adresse mail",
    "Password": "Mot de passe",
    "Confirm password": "Confirmation du mot de passe",
    "Miss": "Mle",
    "Madam": "Mme",
    "Mister": "M.",
    "Lastname": "Nom",
    "Firstname": "Prénom",
    "Address": "Adresse",
    "City": "Ville",
    "Zipcode": "Code postal", 
    "Country": "Pays",
    "Register": "Enregistrer",
    "Aria email": "Entrez votre adresse email",
    "Aria password": "Créez votre mot de passe",
    "Aria confirm password": "Confirmez votre mot de passe",
    "Aria civility": "Entrez votre Civilité",
    "Aria lastname": "Entrez Votre nom",
    "Aria firstname": "Entrez Votre prénom",
    "Aria address": "Entrez Votre adresse",
    "Aria city": "Entrez Votre ville",
    "Aria zipcode": "Entrez Votre code postal",
    "Aria country": "Entrez Votre pays",
    "Obligatory": "* Tous les champs sont obligatoires",
    "Errors": "Veuillez vérifier les erreurs suivantes:",
    "Account": "Vous avez déjà un compte ? ",
    "Connect": "Connectez vous"
  }
}
</i18n>