<template>
  <span class="container">
    <i
      class="iconfont icon-star2"
      v-for="(item, index) in starData"
      :key="'star'+index"
      :class="[index < goal ? 'icon-star2' : 'icon-star']"
    ></i>
    <span class="text">{{goal}}分</span>
  </span>
</template>

<script>
export default {
  name: "star",
  props: {
    goal: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      starData: []
    };
  },
  mounted() {
    let arr = new Array(5);
    arr.fill(1);
    this.starData = arr;
  }
};
</script>

<style lang="stylus" scoped>
.container
  color orange
  .text
    margin-left .5rem
</style>
