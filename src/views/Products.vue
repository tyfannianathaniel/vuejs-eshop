<template>
  <section class="mb-5">
    <h1>This is a product page. Product ID: {{$route.params.id}}</h1>
    <div class="row">
      <!-- Div photos -->
      <div class="col-md-6 mb-4 mb-md-0">

        <!-- Div photo principale -->
        <div class="col-12 mb-0">
          <figure class="view main-img">
            <a href="#"
              data-size="710x823">
              <img src="../../public/assets/images/placeholder.png"
                class="img-fluid ">
            </a>
          </figure>
        </div>

        <!-- Div photos miniatures -->
        <div class="col-12">
          <div class="row">
            <div class="col-3">
              <div class="view gallery-item">
                <img src="../../public/assets/images/placeholder.png"
                  class="img-fluid">
                <div class="mask rgba-white-slight"></div>
              </div>
            </div>
            <div class="col-3">
              <div class="view gallery-item">
                <img src="../../public/assets/images/placeholder.png"
                  class="img-fluid">
                <div class="mask rgba-white-slight"></div>
              </div>
            </div>
            <div class="col-3">
              <div class="view gallery-item">
                <img src="../../public/assets/images/placeholder.png"
                  class="img-fluid">
                <div class="mask rgba-white-slight"></div>
              </div>
            </div>
            <div class="col-3">
              <div class="view gallery-item">
                <img src="../../public/assets/images/placeholder.png"
                  class="img-fluid">
                <div class="mask rgba-white-slight"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Div de présentation -->
      <div class="col-md-6">

        <h5>Veste en jean Noir</h5>
        <p class="mb-2 text-muted text-uppercase small">Shirts</p>
        <p><span class="mr-1"><strong>12.99€</strong></span></p>
        <p class="pt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, sapiente illo. Sit
          error voluptas repellat rerum quidem, soluta enim perferendis voluptates laboriosam. Distinctio,
          officia quis dolore quos sapiente tempore alias.</p>
        <div class="table-responsive">
          <table class="table table-sm table-borderless mb-0">
            <tbody>
              <tr>
                <th class="pl-0 w-25" scope="row"><strong>Marque</strong></th>
                <td>Byamba</td>
              </tr>
              <tr>
                <th class="pl-0 w-25" scope="row"><strong>Couleur</strong></th>
                <td>Noir</td>
              </tr>
            </tbody>
          </table>
        </div>
        <hr>
        <div class="table-responsive mb-2">
          <table class="table table-sm table-borderless">
            <tbody>
              <tr>
                <td class="pl-0 pb-0 w-25">Quantité</td>
                <td class="pb-0">Sélectionnez votre taille</td>
              </tr>
              <tr>
                <td class="pl-0">
                  <div class="def-number-input number-input mb-0">
                    <input class="quantity" min="0" name="quantity" value="1" type="number">
                  </div>
                </td>
                <td>
                  <div class="mt-1">
                    <div class="form-check form-check-inline pl-0">
                      <input type="radio" class="form-check-input" id="small" name=""
                        checked>
                      <label class="form-check-label small text-uppercase card-link-secondary"
                        for="small">Small</label>
                    </div>
                    <div class="form-check form-check-inline pl-0">
                      <input type="radio" class="form-check-input" id="medium" name="">
                      <label class="form-check-label small text-uppercase card-link-secondary"
                        for="medium">Medium</label>
                    </div>
                    <div class="form-check form-check-inline pl-0">
                      <input type="radio" class="form-check-input" id="large" name="">
                      <label class="form-check-label small text-uppercase card-link-secondary"
                        for="large">Large</label>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <button type="button" class="btn btn-light btn-md mr-1 mb-2"><i
            class="pr-2"></i>Ajouter au panier</button>
      </div>
    </div>

  </section>
</template>

<script>
export default {
  name:'Products',
  computed: {
    product(){
      return this.$store.state.products
    }
  },
  created(){
        this.$store.dispatch("fetchProducts").then(() =>{})
    }

}
</script>
