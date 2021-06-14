<template>
    <footer>
        <Reassurance />
        <Newsletter />
        <SocialMedia />
        <div class="sitcky-bottom bg-light position-absolute w-100 start-0 overflow-hidden">
          <Contact />
          <FooterMenu />
        </div>
    </footer>
</template>

<script>

import Reassurance from '@/components/Reassurance.vue';
import Newsletter from '@/components/Newsletter.vue';
import SocialMedia from '@/components/SocialMedia.vue';
import Contact from '@/components/Contact.vue';
import FooterMenu from '@/components/FooterMenu.vue';



export default {
    name: 'Footer',
    components: {
        Reassurance,
        Newsletter,
        SocialMedia,
        Contact,
        FooterMenu
    }
}
</script>