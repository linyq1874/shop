<template>
  <div class="wrapper">
    <shop-list-item
      class="item"
      v-for="(item,index) in shopList"
      :key="'shopListItem'+index"
      :itemInfo="item"
    ></shop-list-item>
  </div>
</template>

<script>
import ShopListItem from "./ShopListItem";
export default {
  name: "shopList",
  components: {
    ShopListItem
  },
  props: {
    sort: {
      type: String,
      default: "goal"
    }
  },
  data() {
    return {
      shopList: [
        {
          title: "锄禾日当午，汗滴禾下土",
          goal: 1,
          sales: 100,
          tip: "￥20起送",
          distance: 100
        },
        {
          title: "床前明月光，疑是地上霜",
          goal: 4,
          sales: 1000,
          tip: "￥20起送",
          distance: 101
        },
        {
          title: "春眠不觉晓，处处闻啼鸟",
          goal: 2,
          sales: 300,
          tip: "￥20起送",
          distance: 0.5
        },
        {
          title: "天王盖地虎，小鸡炖蘑菇",
          goal: 4,
          sales: 2000,
          tip: "￥20起送",
          distance: 0.1
        }
      ]
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.shopList = this.getSort();
    },
    getSort() {
      let data = this.shopList,
        sort = this.sort,
        fixData = [];
      fixData = data.sort((a, b) => {
        return b[sort] - a[sort];
      });

      return fixData;
    }
  },
  watch: {
    sort(val) {
      this.shopList = this.getSort();
    }
  }
};
</script>

<style lang="stylus" scoped>
.wrapper
  .item
    cursor pointer

  .item + .item
    margin-top 1rem
</style>
