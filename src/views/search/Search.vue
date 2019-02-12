<template>
  <main>
    <header-top title="搜索"/>
    <div class="search">
      <input type="text">
      <input type="password" name="" id="">

      <div v-for="(i,index) in 6" :key="index">test</div>
    </div>

    
  </main>
</template>
<script>
import HeaderTop from "@/components/headerTop/HeaderTop";

export default {
  name: "search",
  components: {
    HeaderTop
  },
  data() {
    return {};
  }
};
</script>

<style lang="stylus" scoped>
main 
  height 100%
  overflow hidden
  .search
    position relative
    top 12%
</style>
