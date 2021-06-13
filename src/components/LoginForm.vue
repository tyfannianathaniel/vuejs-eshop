<template>
  <div class="text-center sidePanelForms my-5">

    <div class="pb-4">
      <span class="display-6 ">Connectez-vous</span>
      <p class="lead">Pour accéder à votre compte</p>
    </div>

    <form>
      <!-- take a look: https://www.npmjs.com/package/vee-validate -->
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Adresse mail*</label>
        <input type="email" class="form-control" placeholder="mon-adresse@mail.com" id="exampleInputEmail1" aria-describedby="emailHelp">
        <!-- <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> -->
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Mot de passe*</label>
        <input type="password" placeholder="••••••••" class="form-control" id="exampleInputPassword1">
      </div>
      <fieldset disabled>
        <button type="submit" class="btn btn-primary">Me Connecter</button>
      </fieldset>
    </form>

  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>