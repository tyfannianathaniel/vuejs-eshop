<template>
  <section class="text-center">
    <div class="card p-5 bg-light mx-auto" style="max-width:520px; margin-top:40px;">
      <article>
        <header>
          <h2 class="mb-4">{{ t('Create account') }}</h2>
        </header>
        <form>
          <fieldset class="mb-4">
            <legend class="mb-3">{{ t('User infos') }}</legend>
            <div class="mb-3">
              <label class="mb-2" for="signin-email">{{ t('Email address')}}</label>
              <input class="form-control"  name="signin-email" type="email" aria-label="{{ t('Aria email')}}">
            </div>
            <div class="mb-3">
              <label class="mb-2"  for="signin-password">{{ t('Password')}}</label>
              <input class="form-control"  name="signin-password" type="password" aria-label="{{ t('Aria password')}}">
            </div>
            <div class="mb-3">
              <label class="mb-2"  for="signin-confirm-password">{{ t('Confirm password')}}</label>
              <input class="form-control"  name="signin-confirm-password" type="password" aria-label="{{ t('Aria confirm password')}}">
            </div>
          </fieldset>
          <fieldset class="mb-4">
            <legend class="mb-3">{{ t('User details') }}</legend>
            <div class="mb-3">
              <select name="civility"  aria-label="{{ t('Aria civility')}}">
                <option value=""></option>
                <option value="Miss">{{ t('Miss')}}</option>
                <option value="Ms">{{ t('Madam')}}</option>
                <option value="Mr">{{ t('Mister')}}</option>
              </select>
            </div>
            <div class="mb-3">
              <label class="mb-2"  for="lastname">{{ t('Lastname')}}</label>
              <input class="form-control"  type="text" id="lastname" aria-label="{{ t('Aria lastname')}}">
            </div>
            <div class="mb-3">
              <label class="mb-2"  for="firstname">{{ t('Firstname')}}</label>
              <input class="form-control"  type="text" id="firstname" aria-label="{{ t('Aria firstname')}}">
            </div>
            <div class="mb-3">
              <label class="mb-2"  for="address">{{ t('Address')}}</label>
              <input class="form-control"  type="text" id="address" aria-label="{{ t('Aria address')}}">
            </div>
            <div class="mb-3">
              <label class="mb-2"  for="address-details">{{ t('Address details')}}</label>
              <input class="form-control"  type="text" id="address-details" aria-label="{{ t('Aria address details')}}">
            </div>
            <div class="mb-3">
              <label class="mb-2"  for="city">{{ t('City')}}</label>
              <input class="form-control"  type="text" id="city" aria-label="{{ t('Aria city')}}">
            </div>
            <div class="mb-4">
              <label class="mb-2"  for="zip-code">{{ t('Zipcode')}}</label>
              <input class="form-control"  type="text" pattern="[A-F][0-9]{5}" id="zip-code" aria-label="{{ t('Aria zipcode')}}">
            </div>
            <div class="mb-3">
              <select name="country" aria-label="{{ t('Aria country')}}">
                <option v-for="country in countries" :key="country.id" value="{{ country.val }}">{{ country.name }}</option>
              </select>
            </div>
            <div class="mb-3">
              <label class="mb-2"  for="phone">{{ t('Phone')}}</label>
              <input class="form-control"  type="tel" name="phone" aria-label="{{ t('Aria phone')}}">
            </div>
          </fieldset>
          <div class="mb-3">
            <button type="button" class="btn btn-primary">{{ t('Register')}}</button>
          </div>
        </form>
        <p><small>{{ t('Obligatory') }}</small></p>
      </article>
    </div>
  </section>
</template>

<script>

import { useI18n } from 'vue-i18n';

export default {
  data(){
    return {
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
      ]
    }
  },
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
    "Address details": "Address details",
    "City": "City",
    "Zipcode": "Zip code", 
    "Country": "Country",
    "Phone": "Phone number",
    "Register": "Register",
    "Aria email": "Enter your email",
    "Aria password": "Create your password",
    "Aria confirm password": "Confirm your password",
    "Aria civility": "Enter your Civility",
    "Aria lastname": "Enter Your lastname",
    "Aria firstname": "Enter Your firstname",
    "Aria address": "Enter Your address",
    "Aria address details": "Enter Your address details",
    "Aria city": "Enter Your city",
    "Aria zipcode": "Enter Your zipcode",
    "Aria country": "Enter Your country",
    "Aria phone": "Enter Your phone",
    "Obligatory": "*You must fill all the fields"
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
    "Address details": "Complément d'adresse",
    "City": "Ville",
    "Zipcode": "Code postal", 
    "Country": "Pays",
    "Phone": "Numéro de téléphone",
    "Register": "Enregistrer",
    "Aria email": "Entrez votre adresse email",
    "Aria password": "Créez votre mot de passe",
    "Aria confirm password": "Confirmez votre mot de passe",
    "Aria civility": "Entrez votre Civilité",
    "Aria lastname": "Entrez Votre nom",
    "Aria firstname": "Entrez Votre prénom",
    "Aria address": "Entrez Votre adresse",
    "Aria address details": "Entrez votre Complément d'adresse",
    "Aria city": "Entrez Votre ville",
    "Aria zipcode": "Entrez Votre code postal",
    "Aria country": "Entrez Votre pays",
    "Aria phone": "Entrez Votre numéro de téléphone",
    "Obligatory": "* Vous devez remplir tous les champs"
  }
}
</i18n>