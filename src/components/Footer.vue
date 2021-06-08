<template>
    <footer>
        <Reassurance />
        <Newsletter />
        <SocialMedia />
    </footer>
</template>

<script>

import Reassurance from '@/components/Reassurance.vue';
import Newsletter from '@/components/Newsletter.vue';
import SocialMedia from '@/components/SocialMedia.vue';

export default {
    name: 'Footer',
    components: {
        Reassurance,
        Newsletter,
        SocialMedia
    }
}
</script>