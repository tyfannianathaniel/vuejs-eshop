<template>
    <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/catalog">Catalog</router-link> |
        <router-link to="/about">About</router-link> |
        <i class="bi-github" role="img" aria-label="GitHub"></i>
        <a
            href="#"

        >
        Sign in
        </a> |
        <button
            class="btn btn-primary"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasCart"
            aria-controls="offcanvasCart"
        >
        Voir le Panier
        </button>
    </div>
</template>

<script>
export default {
}
</script>

<style>
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>