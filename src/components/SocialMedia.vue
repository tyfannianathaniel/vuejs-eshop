<template>
    <section id="socialmedia" class="py-3 my-3 text-center">
        <ul class="d-inline-flex list-unstyled">
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
            <li class="nav-item">
                <router-link class="nav-link pe-0" to="#">
                    <svg class="bi" width="21" height="21" fill="currentColor"><use xlink:href="assets/bootstrap-icons.svg#linkedin"/></svg>
                </router-link>
            </li>
        </ul>
    </section>
</template>

<script>
export default {
    name: 'SocialMedia'
}
</script>