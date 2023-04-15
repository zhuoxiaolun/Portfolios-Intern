<template>
    <div class="home-left">
      <div class="home-circle">

          <svg viewBox="0 0 100 100">
            <path d="M 50 50 m -50 0 a 50 50 0 1 1 100 0 a 50 50 0 1 1 -100 0 z" id="circle" />
            <text><textPath xlink:href="#circle" >Insightful&nbsp;wisdom&nbsp;Inspiring&nbsp; ideas &nbsp;</textPath></text>
          </svg>
      </div>
        <img src="../assets/images/me-photo.png" class="home-photo">
    </div>
    <div class="home-right">
      <p class="home-slogan">
          Transforming
          <span class="home-wisdom">wisdom</span>

          into reality
          through design.
      </p>
    </div>
</template>

<script>
export default {
    name: "HomePage"
}
</script>
