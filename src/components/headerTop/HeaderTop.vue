<template>
  <header>
    <slot name="left"></slot>
    <slot name="right"></slot>
    <div class="header-title">
      <h1 class="header-title-content">{{title}}</h1>
    </div>
  </header>
</template>

<script>
export default {
  name: "headerTop",
  props: {
    title: String
  }
};
</script>

<style lang="stylus" scoped>
@import '~@/styles/mixins.styl'

header
  bottom-border-1px($BGColor)
  background $mainColor
  position fixed
  height 8%
  width 100%
  left 0
  top 0
  color #fff
  z-index 9

  .header-icon
    float left
    width 20%
    height 100%
    font-size 2rem
    line-height 100%
    display flex
    align-items center
    justify-content center
    cursor pointer

  .header-more
    float right
    width 25%
    height 100%
    font-size 1.6rem
    display flex
    align-items center
    justify-content center
    cursor pointer

  .header-title
    height 100%
    flex 1
    margin 0 25% 0 20%
    font-size 1.8rem
    display flex
    align-items center
    justify-content center

    &-content
      ellipsis()
</style>
