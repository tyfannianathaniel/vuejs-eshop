<template>
    <section id="newsletter">
        <h2>Newsletter</h2>
        <p>Rejoignez-nous pour recevoir les nouveautés et bons plans.</p>

        <form method="POST" class="">
            <input type="email" name="newsemail" placeholder="Votre email" aria-label="Entrez votre email pour souscrire à la newsletter">
            <input type="submit" value="M'inscrire" aria-label="Souscrire à la newsletter">
        </form>
    </section>
</template>

<script>
export default {
    name:'Newsletter'
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