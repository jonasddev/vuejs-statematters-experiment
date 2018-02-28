<template>
  <div class="hello">
    <h1>Product Listing Component 1</h1>
    <ProductListing/>

    <h1>Product Listing Component 2</h1>
    <ProductListing/>
  </div>
</template>

<script>
  import products from '../dao/products'
  import ProductListing from './ProductsListing.vue'
  export default {
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        products: products.state
      }
    },
    methods: {
      increase: id => products.increaseInventory(id),
      decrease: id => products.decreaseInventory(id),
    },
    components: {
      ProductListing
    }
  }
</script>
