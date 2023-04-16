<template>
  <bannerPage/>
  <HomePage/>
</template>

<script>




import bannerPage from "@/components/banner-page.vue";
import HomePage from "@/components/home-page.vue";

export default {
  name: 'App',
  components: {
      bannerPage,
      HomePage,

  }
}
</script>

<style lang="scss">
@import '/src/assets/all_css';
</style>
