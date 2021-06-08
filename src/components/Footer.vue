<template>
    <footer>
        <Reassurance />
        <Newsletter />
    </footer>
</template>

<script>

import Reassurance from '@/components/Reassurance.vue';
import Newsletter from '@/components/Newsletter.vue';

export default {
    name: 'Footer',
    components: {
        Reassurance,
        Newsletter
    }
}
</script>