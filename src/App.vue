<template>
    <AboutMePage/>
  <FooterCopyright/>
</template>

<script>

import FooterCopyright from "@/components/footer-copyright.vue";
import AboutMePage from "@/components/About-me-page.vue";

export default {
  name: 'App',
  components: {
      AboutMePage, FooterCopyright

  }
}
</script>

<style lang="scss">
@import '/src/assets/all_css';
</style>
