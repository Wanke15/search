<template>
  <div>
    <div v-for="p in products" :key="p.id">
      <product-card :p_data="p"></product-card>
    </div>
  </div>
</template>

<script>
import ProductCard from "./ProductCard.vue";
export default {
  data() {
    return {
      products: [
        { id: "id1", name: "新书", price: 99.9 , color:"red"},
        { id: "id2", name: "新书2", price: 23.5, color: "blue"}
      ]
    };
  },
  components: { ProductCard }
};
</script>

<style>
</style>