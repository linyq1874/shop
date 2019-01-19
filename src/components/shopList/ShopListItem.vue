<template>
  <div class="item">
    <img class="item-img" alt="img" />
    <div class="item-content">
      <div class="item-content-detail">
        <h2>
          <span class="hot">品牌</span>
          <span class="title">{{itemInfo.title}}</span>
        </h2>
        <div class="grade">
          <Star class="star" :goal="itemInfo.goal"></Star>
          <span class="sales">月销{{itemInfo.sales}}件</span>
        </div>
        <p class="tip">{{itemInfo.tip}}</p>
        <p class="distance">距离 {{itemInfo.distance|distance}}</p>
      </div>
      <div class="item-content-more">
        <span class="tag">
          <span class="tag-item">保</span>
          <span class="tag-item">准</span>
          <span class="tag-item">快</span>
        </span>
        <p class="flag">送必达</p>
      </div>
    </div>
  </div>
</template>

<script>
import Star from "@/components/star/Star";
export default {
  name: "shopListItem",
  components: {
    Star
  },
  props: {
    itemInfo: {
      type: Object,
      default() {
        return {
          title: "锄禾日当午，汗滴禾下土",
          goal: 4,
          sales: 1000,
          tip: "￥20起送",
          distance: 1
        };
      }
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~@/styles/mixins'

.item
  clearFix()

  &-img
    float left
    width 120px
    height 133px
    border 1px solid

  &-content
    overflow hidden
    height 133px
    margin-left 130px
    display flex

    // align-items center
    &-detail
      width 80%
      display flex
      flex-direction column
      justify-content space-around

      h2
        .hot
          background $minorColor
          position absolute
          font-size 1.4rem
          margin-top 0.2rem

        .title
          font-size 1.8rem
          margin-left 4rem
          display inline-block
          width 80%
          ellipsis()

      .grade
        color #888
        font-size 1.4rem
        padding 1rem 0

        .star
          display inline-block
          width 120px

      .tip
        color #888
        font-size 1.4rem

      .distance
        color $mainColor

    &-more
      flex 1
      font-size 1.4rem
      padding-top 1.5rem

      .tag-item
        background $mainColor

      .tag-item + .tag-item
        margin-left 0.3rem

      .flag
        color $mainColor
        padding-top 3rem
</style>
