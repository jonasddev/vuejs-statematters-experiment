<template>
  <div class="hello">
    <h1>Product Listing Component 1</h1>
    <ProductListing/>

    <h1>Product Listing Component 2</h1>
    <ProductListing/>
  </div>
</template>

<script>
  import ProductListing from './ProductsListing.vue'
  export default {
    components: {
      ProductListing
    }
  }
</script>
