<template>
    <section>
        <vueper-slides autoplay :dragging-distance="20" fade :touchable="false">
        <vueper-slide class="text-decoration-none text-uppercase color fw-bolder"
            v-for="(slide, i) in slides"
            :key="i"
            :image="slide.image"
            :title="slide.title"
            :link="slide.link" />
        </vueper-slides>
    </section>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

export default {
    data() {
        return {
            autoPlaying: true,
            slides: [
                {
                    title: 'Découvrez notre collection de Tops',
                    image: require('@/assets/1.jpg'),
                    link: '/catalog'
                },
                {
                    title: 'Découvrez notre collection de Pantalons',
                    image: require('@/assets/2.jpg'),
                    link: '/catalog'
                },
                {
                    title: 'Découvrez notre collection d\'Accessoires',
                    image: require('@/assets/3.jpg'),
                    link: '/catalog'
                }

            ]
        }
    },
    components: { VueperSlides, VueperSlide }
}
</script>

<style scoped>

    .color {
        color: #FFF;
    }

</style>