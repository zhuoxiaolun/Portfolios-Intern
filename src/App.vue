<template>
  <bannerPage/>
  <PortfoliosPage/>
  <FooterCopyright/>
</template>

<script>



import PortfoliosPage from "@/components/myPortfolios-page.vue";
import bannerPage from "@/components/banner-page.vue";
import FooterCopyright from "@/components/footer-copyright.vue";


export default {
  name: 'App',
  components: {
      bannerPage,
    PortfoliosPage,
      FooterCopyright,
  }
}
</script>

<style lang="scss">
@import '/src/assets/all_css';
</style>
