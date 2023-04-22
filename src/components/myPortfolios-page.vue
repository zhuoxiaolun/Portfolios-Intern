<template>
<div class="portfolio">
    <div class="portfolio-font">
        PORTFOLIO
    </div>
    <div class="portfolio-work">
        <div class="portfolio-left-work-container">
            <router-link to="/fragrant" class="portfolio-left-work portfolio-relay" >
                <img class="portfolio-image" src="../assets/images/left/01.png" alt="01" />
                <div class="overlay">
                    <div class="overlay-font">
                        <p>品牌再造設計</p>
                        <p class="border">台中外埔忘憂谷</p>
                    </div>
                </div>

            </router-link>
            <router-link to="/" class="portfolio-left-work portfolio-relay">
                <img class="portfolio-image" src="../assets/images/left/02-photo.png" alt="02" />
                <div class="overlay">
                    <div class="overlay-font">
                        <p>個人網站設計</p>
                        <p class="border">ABOUT ZhuoXL</p>

                    </div>
                </div>
            </router-link>
            <router-link to="/peace-love" class="portfolio-left-work portfolio-relay">
                <img class="portfolio-image" src="../assets/images/left/03.png" alt="03" />
                <div class="overlay">
                    <div class="overlay-font">
                        <p>平面海報設計</p>
                        <p class="border">愛與和平</p>

                    </div>
                </div>
            </router-link>
            <router-link to="/elves" class="portfolio-left-work portfolio-relay">
                <img class="portfolio-image" src="../assets/images/left/04.png" alt="04" />
                <div class="overlay">
                    <div class="overlay-font">
                        <p>插畫創作</p>
                        <p class="border">精靈之境</p>
                    </div>
               </div>
            </router-link>
        </div>

        <router-link to="/paint-slip" class="portfolio-right-work-container">
            <div class="portfolio-right-work portfolio-relay">
                <img class="portfolio-image"  src="../assets/images/right/05.png" alt="05"  />
                <div class="overlay">
                    <div class="overlay-font">
                        <p>品牌設計企劃</p>
                        <p class="border">酗事繪畫工作室</p>
                    </div>

                </div>
            </div>
            <router-link to="/attack" class="portfolio-right-work portfolio-relay">
                <img class="portfolio-image" src="../assets/images/right/06.png" alt="06"  />
                <div class="overlay">
                    <div class="overlay-font">
                        <p>平面海報設計</p>
                        <p class="border">攻擊行動</p>
                    </div>

                </div>
            </router-link>
            <router-link to="/taiwan-culture" class="portfolio-right-work portfolio-relay">
                <img class="portfolio-image" src="../assets/images/right/07.png" alt="07"  />
                <div class="overlay">
                    <div class="overlay-font">
                        <p>平面海報設計</p>
                        <p class="border">老屋磚</p>
                    </div>
                </div>
            </router-link>
            <router-link to="/blender-art" class="portfolio-right-work portfolio-relay">
                <img class="portfolio-image" src="../assets/images/right/08.png" alt="08" />
                <div class="overlay">
                    <div class="overlay-font">
                        <p>3D建模設計</p>
                        <p class="border">BLENDER</p>
                    </div>
                </div>
            </router-link>
        </router-link>
    </div>
    <div class="portfolio-go">
    <router-link to="/home" class="portfolio-go-home">
        <img src="../assets/images/go-home.png " alt="home" class="go-home-btn"/>
    </router-link>
    </div>
</div>
</template>

<script>

export default {
  name: "PortfoliosPage",
  data(){
    return {
    }
  },
  methods: {
  }
}
</script>
