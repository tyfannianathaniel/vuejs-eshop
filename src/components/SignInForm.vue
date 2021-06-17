<template>

  <section class="">

    <div class="p-3 bg-white mx-auto col-lg-7">

      <h2 class="text-center mb-5">{{ t('Create account') }}</h2>

      <p v-if="userExists" class="text-danger">{{ t('user already exists') }}</p>

      <form @submit.prevent="checkForm" id="SignInForm">

        <fieldset class="mb-4 row g-3">

        <!-- FIRSTNAME -->
          <div class="mb-3 col-md-6">
            <label class="mb-2" for="firstname">{{ t('Firstname')}}</label>
            <input class="form-control" type="text" id="firstname" v-model="form.firstname" aria-label="{{ t('Aria firstname')}}">
            <p v-show="this.errors.firstname" class="text-danger">{{ t('error firstname') }}</p>
          </div>

        <!-- LASTNAME -->
          <div class="mb-3 col-md-6">
            <label class="mb-2" for="lastname">{{ t('Lastname')}}</label>
            <input class="form-control" type="text" id="lastname" v-model="form.lastname" aria-label="{{ t('Aria lastname')}}">
            <p v-show="this.errors.lastname" class="text-danger">{{ t('error lastname') }}</p>
          </div>

        <!-- PASSWORD -->
          <div class="col-md-6 mb-3">
            <label class="mb-2" for="password">{{ t('Password')}}</label>
            <input class="form-control" name="password" v-model="form.password" type="password" aria-label="{{ t('Aria password')}}">
            <p v-show="this.errors.password" class="text-danger">{{ t('error password') }}</p>
          </div>

        <!-- PASSWORD CONFIRM -->
          <div class="col-md-6 mb-3">
            <label class="mb-2" for="passwordConfirm">{{ t('Confirm password')}}</label>
            <input class="form-control" name="passwordConfirm" v-model="form.passwordConfirm" type="password" aria-label="{{ t('Aria confirm password')}}">
            <p v-show="this.errors.passwordConfirm" class="text-danger">{{ t('error password confirm') }}</p>
          </div>

        <!-- EMAIL -->
          <div class="col-md-6 mb-3">
            <label class="mb-2" for="email">{{ t('Email address')}}</label>
            <input class="form-control" name="email" v-model="form.email" type="email" aria-label="{{ t('Aria email')}}">
            <p v-show="this.errors.email" class="text-danger">{{ t('error email') }}</p>
          </div>

        <!-- BIRTHDAY -->
          <div class="col-md-6 mb-3">
            <label class="mb-2" for="birthday">{{ t('Birthday')}}</label>
            <input class="form-control" name="birthday" v-model="form.birthday" type="date" aria-label="{{ t('Aria birthday')}}">
          </div>

        </fieldset>

        <div class="mb-3 float-end">
          <button type="submit" class="btn btn-primary">{{ t('Register')}}</button>
        </div>
      </form>

        <p>{{ t('Account') }}
          <router-link to="/login">{{ t('Connect') }}</router-link>
        </p>

    </div>
  </section>
</template>

<script>
import { useI18n } from 'vue-i18n';
import { mapActions } from 'vuex'

export default {
  data(){
    return {
      form: {
        firstname: null,
        lastname: null,
        password: null,
        passwordConfirm: null,
        email: null,
        birthday: null
      },
      errors:{},
      userExists: false
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

    ...mapActions( 'auth', [
      'REGISTER',
    ]),

    checkForm() {

      // ERROR IF EMPTY
      for (const input in this.form) {
        if (Object.hasOwnProperty.call(this.form, input)) {
          this.form[input] ? this.errors[input] = false : this.errors[input] = true
        }
      }

      // Validate email (REGEX) return valid.email = bool
      // Validate password (REGEX) return valid.password = bool
      // Validate passwordConfirm (match password) return valid.passwordConfirm = bool

      // IF ALL INPUT ARE FILLED
      // && valid.email === true
      // && valid.password === true
      // && valid.passwordConfirm === true
      // THEN this.register()
      // (remember birthday is not mandatory)

      if(
        this.form.firstname &&
        this.form.lastname &&
        this.form.password &&
        this.form.passwordConfirm &&
        this.form.email
      ) this.register()


    },
    async register(){
      try {
        await this.REGISTER(this.form)
        this.$router.push({name: 'Home'})
        this.userExists = false
      } catch( err ) {
        this.userExists = true
      }
    }
  }
}
</script>

<i18n>
{
  "en": {
    "Birthday": "Birthday",
    "Create account": "Create an account",
    "Email address": "Email Address",
    "Password": "Create a password",
    "Confirm password": "Confirm password",
    "Lastname": "Lastname",
    "Firstname": "Firstname",
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
    "Account": "Already have an account ? ",
    "Connect": "Sign in",
    "error firstname":"Firstname is required",
    "error lastname":"Lastname is required",
    "error password":"Password is required",
    "error password confirm":"Password confirmation is required",
    "error email":"Email is required",
    "user already exists": "Oops, this user already exists"
  },
  "fr": {
    "Birthday": "Date de Naissance",
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
    "Aria civility": "Entrez votre Civilité",
    "Aria lastname": "Entrez Votre nom",
    "Aria firstname": "Entrez Votre prénom",
    "Aria address": "Entrez Votre adresse",
    "Aria city": "Entrez Votre ville",
    "Aria zipcode": "Entrez Votre code postal",
    "Aria country": "Entrez Votre pays",
    "Account": "Vous avez déjà un compte ? ",
    "Connect": "Connectez vous",
    "error firstname":"Le prénom est requis",
    "error lastname":"Le nom est requis",
    "error password":"Le mot de passe est requis",
    "error password confirm":"Ne correspond pas au mot de passe",
    "error email":"Une adresse mail valide est requise",
    "user already exists": "Oups, cet utilisateur existe déjà"
  }
}
</i18n>