<template>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvas" aria-labelledby="side panel">
    <div class="offcanvas-header">
        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
        <div>
            <ul class="nav nav-tabs nav-justified" id="overlay-tab" role="tablist">
                <li class="nav-item" role="presentation">
                  <button class="nav-link" id="account-tab" data-bs-toggle="tab" data-bs-target="#account" type="button" role="tab" aria-controls="" aria-selected="false" >Compte</button>
                </li>
                <li class="nav-item" role="presentation">
                  <button class="nav-link" id="cart-tab" data-bs-toggle="tab" data-bs-target="#cart" type="button" role="tab" aria-controls="" aria-selected="false" >Panier</button>
                </li>
            </ul>
            <div class="tab-content" id="overlay-tab-content">
                <div class="tab-pane fade" id="account" role="tabpanel" aria-labelledby="account-tab"><LoginForm/><SignInFormGoto/></div>
                <div class="tab-pane fade" id="cart" role="tabpanel" aria-labelledby="cart-tab"><Cart/></div>
            </div>
        </div>
        <div>
            <!--
                - ajouter au store un panier
                - ajouter à cet onglet le nombre de produits dans le panier
                - ajouter à cet onglet la liste des produits dans le panier
                - ajouter à cet onglet un bouton 'finaliser mes achats'

            -->

        </div>
    </div>
    </div>
</template>

<script>
import LoginForm from '@/components/LoginForm.vue'
import SignInFormGoto from '@/components/SignInFormGoto.vue'
import Cart from '@/components/Cart.vue'

export default {
    components: {
        LoginForm,
        SignInFormGoto,
        Cart,
    },
}
</script>

<style>
  .sidePanelForms {
    width: 80%;
    margin: auto;
  }
</style>