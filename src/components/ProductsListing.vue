<template>
  <div class="products">
    <ul>
      <li v-for="product in products.all">
        {{ product.title }} - {{ product.price }} - {{ product.inventory }}
        <button @click="increase(product.id)"> + </button>
        <button @click="decrease(product.id)"> - </button>
      </li>
    </ul>
  </div>
</template>

<script>
  import products from '../dao/products'
  export default {
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        products: products.state
      }
    },
    methods: {
      increase: id => products.mutations.increaseInventory(id),
      decrease: id => products.mutations.decreaseInventory(id),
    }
  }
</script>
