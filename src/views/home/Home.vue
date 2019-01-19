<template>
  <div class="container">
    <header-top title="你的笑像一条恶犬，撞乱我的心扉">
      <i class="header-icon iconfont icon-sousuo" slot="left"></i>
      <span class="header-more" slot="right">登录/注册</span>
    </header-top>
    <!-- 首页导航菜单 -->
    <section class="item">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <ul>
              <li v-for="(item,index) in navData" :key="'slide1'+index">
                <i class="iconfont" :class="item.icon"></i>
                <span class="navName">{{item.name}}</span>
              </li>
            </ul>
          </div>
          <div class="swiper-slide">
            <ul>
              <li v-for="(item,index) in navData" :key="'slide1'+index">
                <i class="iconfont" :class="item.icon"></i>
                <span class="navName">{{item.name}}</span>
              </li>
            </ul>
          </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
      </div>
    </section>
    <!-- 首页附近商家 -->
    <section class="item">
      <div class="item-header">
        <i class="item-header-icon iconfont icon-goutongye_santiaogang_tiaozhuanxuanzehaizi"></i>
        <span class="item-header-text">附近商家</span>
        <span class="item-header-controlbox">
          <span class="controlbox-tag">排序：</span>
          <span class="item-header-controlbox-label" v-for="(item,index) in orderList" :key="'order' + index">
            <label :for="item.value" :class="{'active': filterVal == item.value}">{{item.name}}</label>
            <input type="radio" name="order" :value="item.value" :id="item.value" v-model="filterVal">
          </span>  
        </span>
      </div>
      <shop-list :sort="filterVal"></shop-list>
    </section>
  </div>
</template>
<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
import HeaderTop from "@/components/headerTop/HeaderTop";
import ShopList from "@/components/shopList/ShopList";

export default {
  name: "home",
  components: {
    HeaderTop,
    ShopList
  },
  data() {
    return {
      navData: [
        {
          name: "盗将行",
          icon: "icon-icon-test"
        },
        {
          name: "不染",
          icon: "icon-waimai"
        },
        {
          name: "消愁",
          icon: "icon-caomei"
        },
        {
          name: "老中医",
          icon: "icon-putaogan"
        },
        {
          name: "演员",
          icon: "icon-yaoguo"
        },
        {
          name: "梦回家乡",
          icon: "icon-badanmu"
        },
        {
          name: "水星记",
          icon: "icon-xiaweiyiguo"
        },
        {
          name: "丑八怪",
          icon: "icon-waimaisongquan"
        }
      ],
      filterVal: "goal",
      orderList: [
        {
          name: "评分",
          value: "goal"
        },
        {
          name: "销量",
          value: "sales"
        },
        {
          name: "距离",
          value: "distance"
        }
      ]
    };
  },
  mounted() {
    new Swiper(".swiper-container", {
      loop: true, // 循环模式选项
      // autoplay: true,
      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination"
      }
    });
  },
  methods: {
    changeOrder() {
      console.log(this.filterVal);
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~@/styles/mixins.styl'

>>>.swiper-pagination-bullet-active
  background $mainColor

.container
  height 100%
  overflow auto

  .item
    &:nth-of-type(1)
      height 35%
      position relative
      top 9%

      .swiper-container
        height 100%

        .swiper-slide
          > ul
            display flex
            flex-wrap wrap
            justify-content center
            align-items center
            height 100%

            li
              width 25%
              height 50%
              display flex
              flex-direction column
              align-items center
              justify-content center
              cursor pointer

              > .iconfont
                font-size 4rem
                color $minorColor
                margin-bottom 0.5rem

              > .navName
                font-size 1.4rem

    &:nth-of-type(2)
      position relative
      top 9%
      top-border-1px($BGColor)

      .item-header
        height 4rem
        font-size 1.5rem
        color #ccc
        display flex
        align-items center

        &-icon
          position absolute
          margin-top 1px

        &-text
          margin 0 3.6rem

        &-controlbox
          vertical-align middle
          &-label
            > label
              cursor pointer

            > .active
              color $mainColor

            > input
              visibility hidden
</style>
