<template>
  <footer>
    <nav>
      <ul>
        <router-link
          tag="li"
          :to="item.path"
          v-for="(item,index) in routerLink"
          :key="index"
          class="navItem"
          active-class="active"
        >
          <i class="iconfont" :class="item.icon"></i>
          <span class="navName">{{item.name}}</span>
        </router-link>
      </ul>
    </nav>
  </footer>
</template>
<script>
export default {
  name: "footerGuide",
  data() {
    return {
      routerLink: [
        {
          name: "首页",
          path: "/home",
          icon: "icon-shouye"
        },
        {
          name: "搜索",
          path: "/search",
          icon: "icon-sousuo"
        },
        {
          name: "订单",
          path: "/order",
          icon: "icon-dingdan"
        },
        {
          name: "我的",
          path: "/profile",
          icon: "icon-icon_zhanghao"
        }
      ]
    };
  }
};
</script>

<style lang="stylus" scoped>
@import '~@/styles/mixins.styl'

footer
  top-border-1px($BGColor)
  display flex
  align-items center

  nav
    width 100%
    height 80%

    ul
      display flex
      justify-content space-between

      .navItem
        text-align center
        width 25%
        height 100%
        cursor pointer
        color #888

        .iconfont
          display block
          font-size 3rem
          padding-bottom 0.5rem

        .navName
          font-size 1.4rem

      .active
        color $mainColor
</style>
