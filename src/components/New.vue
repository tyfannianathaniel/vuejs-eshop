<template>
    <section>
        <!-- Background img -->
        <h2>{{ collection }}</h2>
        <p>{{ msg }}</p>
        <button>Découvrir</button>
    </section>
</template>

<script>
export default {
    name:'New',
    props: {
        collection: String,
        msg: String
    }

}
</script>