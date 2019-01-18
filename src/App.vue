<template>
  <div id="app">
    <main>
      <keep-alive>
        <router-view/>
      </keep-alive>
    </main>

    <footer-guide/>
  </div>
</template>
<script>
import FooterGuide from "./components/footerGuide/FooterGuide";
export default {
  name: "app",
  components: {
    FooterGuide
  }
};
</script>

<style lang="stylus" scoped>
#app
  position fixed
  top 0
  height 100%
  width 100%
  overflow hidden

  main
    height 90%

  footer
    height 10%
</style>
 