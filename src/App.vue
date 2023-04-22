<template>
  <bannerPage/>
  <MainContainer/>
  <FooterCopyright/>

</template>

<script>


import bannerPage from "@/components/banner-page.vue";
import FooterCopyright from "@/components/footer-copyright.vue";
import MainContainer from "@/MainContainer.vue";



export default {
  name: 'App',
  components: {
    MainContainer,
      bannerPage,

      FooterCopyright,
  }
}
</script>

<style lang="scss">
@import '/src/assets/all_css';
</style>
