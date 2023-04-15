<template>
  <div class="home">
    <div class="home-left">
      <div class="home-circlar">
        <svg viewBox="0 0 100 100">
          <path d="M 50 50 m -50 0 a 50 50 0 1 1 100 0 a 50 50 0 1 1 -100 0 z" id="home-circlar" />
          <text fill="#FE600F"><textPath xlink:href="#home-circlar">Insightful wisdom Inspiring ideas </textPath></text>
        </svg>
      </div>


        <img src="../assets/images/me-photo.png" class="home-photo" >
    </div>
    <div class="home-right">
      <div class="home-slogan">
        <p>Transforming <span class="home-wisdom">&nbsp;wisdom</span> </p>
        <p>into reality</p>
        <p>through design</p>
      </div>
      <img  src="../assets/images/home-continue.png" class="home-btn"/>
    </div>
  </div>
</template>

<script>
import {onMounted} from "vue";

export default {
    name: "HomePage",
    props:{
    },
    methods: {
    }
}

onMounted( ()=>{
});
</script>
