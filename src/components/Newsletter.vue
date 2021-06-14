<template>
    <section id="newsletter" class="container py-3 my-3 text-center">
        <h2>Newsletter</h2>
        <p>Rejoignez-nous pour recevoir les nouveautés et bons plans.</p>

        <form method="POST">
            <input class="me-1 px-4 rounded-pill border border-1 border-secondary" type="email" name="newsemail" placeholder="Votre email" aria-label="Entrez votre email pour souscrire à la newsletter">
            <input class="px-3 rounded-pill border border-1 border-white" type="submit" value="M'inscrire" aria-label="Souscrire à la newsletter">
        </form>
    </section>

</template>

<script>
export default {
    name:'Newsletter'
}
</script>

<style scoped>

</style>