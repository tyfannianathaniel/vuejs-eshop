<template>
    <section id="newsletter">
        <h2>Newsletter</h2>
        <p>Rejoignez-nous pour recevoir les nouveautés et bons plans.</p>

        <form method="POST" class="">
            <input type="email" name="newsemail" placeholder="Votre email" aria-label="Entrez votre email pour souscrire à la newsletter">
            <input type="submit" value="M'inscrire" aria-label="Souscrire à la newsletter">
        </form>
    </section>
    <section id="socialmedia">
        <ul class="d-inline-flex">
            <li class="nav-item">
                <router-link class="nav-link pe-0" to="#">
                    <svg class="bi" width="21" height="21" fill="currentColor"><use xlink:href="assets/bootstrap-icons.svg#instagram"/></svg>
                </router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link pe-0" to="#">
                    <svg class="bi" width="21" height="21" fill="currentColor"><use xlink:href="assets/bootstrap-icons.svg#facebook"/></svg>
                </router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link pe-0" to="#">
                    <svg class="bi" width="21" height="21" fill="currentColor"><use xlink:href="assets/bootstrap-icons.svg#twitter"/></svg>
                </router-link>
            </li>
        </ul>
    </section>
</template>

<script>
export default {
    name:'Contact'
}
</script>

<style scoped>
    section{
        text-align: center;
    }

    form > input {
        margin-right: 20px;
    }

    input{
        border: 1px solid #e5e5e5;
        border-radius: 30px;
        padding: 0 30px;
    }

    ul{
        padding: 0;
    }
</style>