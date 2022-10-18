<template>
  <div id="app">
    <h3><font :color="p_data.color">商品ID：{{ p_data.id }}</font></h3>
    <h3>商品名称：{{ p_data.name }}</h3>
    <h3>商品价格：{{ p_data.price }}</h3>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  props: ["p_data"]
  // 采用计算属性计算color: 根据商品ID HASH得到十六进制颜色
  // color
};
</script>

<style>
</style>