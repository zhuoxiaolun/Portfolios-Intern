<template>
  <bannerPage/>
  <HomePage/>
  <FooterCopyright/>
</template>

<script>


import bannerPage from "@/components/banner-page.vue";
import FooterCopyright from "@/components/footer-copyright.vue";
import HomePage from "@/components/home-page.vue";



export default {
  name: 'App',
  components: {
      bannerPage,
      HomePage,
      FooterCopyright,
  }
}
</script>

<style lang="scss">
@import '/src/assets/all_css';
</style>
