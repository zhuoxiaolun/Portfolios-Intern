<template>
  <div class="about-bar">
      <div class="about-font">
      ABOUT ME
      </div>
  </div>
  <div class="about">
    <div class="about-title">
      <div class="title" v-for="(titleObj, index) in titleObjects" :key="index">
        <p class="about-en-title">
          {{titleObj["en"]}}
        </p>
        <p class="about-ch-title">
          {{titleObj["ch"]}}
        </p>
      </div>
    </div>


    <div class="about-profile">
      <img class="about-photo" src="../assets/images/about-me-photo.png">
      <div class="about-experience">
        <div class="job">
          <p class="job-ch">{{aboutProfile.job_ch}}</p>
          <p class="job-en">{{aboutProfile.job_en}}</p>
        </div>
        <div class="name">
         <p class="name-ch">{{aboutProfile.name_ch}}</p>
         <p class="name-en">{{aboutProfile.name_en}}</p>
        </div>
        <div class="education">
          <p class="education-ch">{{aboutProfile.education_ch}}</p>
          <p class="education-en">{{aboutProfile.education_en}}</p>
        </div>
        <div class="school">
        <p >{{aboutProfile.senior_school}}</p>
        <p >{{aboutProfile.collage_school}}</p>
        </div>

      </div>
    </div>

    <div class="about-description">
      <p>
        我是一位對網頁設計和網站開發充滿熱情的初學者，透過自學的方式深入探索這個領域，
        我喜歡挑戰自己，不斷學習新知識和技能，透過智慧轉化成就。<br>
        在過去自學過程，我學習了HTML、CSS、JavaScript等語言和相關基本技術，我相信透過不斷地學習和實踐，
        我能夠迅速學習和掌握新的技能和工具，並為網站的設計和開發帶來創新和美感。
      </p>
    </div>

    <div class="about-professional-items">
      <div class="about-professional-items-title">
        <p class="item-title-ch">{{professionalItems.Title.ch}}</p>
        <p class="item-title-en">{{professionalItems.Title.en}}</p>
      </div>
      <p class="about-professional-items-item" v-for="(item, key) in professionalItems.Items" :key="key">
        {{item}}
      </p>
    </div>

    <div class="about-content">
      <div class="about-content-title">
        <p class="content-title-ch">{{contentInformation.Title.ch}}</p>
        <p class="content-title-en">{{contentInformation.Title.en}}</p>
      </div>

      <p class="about-content-phone">{{contentInformation.Phone}}</p>
      <p class="about-content-email">{{contentInformation.Email}}</p>

    </div>
      <div class="about-bottom">
          <div class="about-sentences">
              <p>Insightful wisdom, inspiring ideas,</p>
              <p>learning knowledge, and innovative design.</p>
          </div>
          <div class="about-btn">
              <img  src="../assets/images/go-port.png" class="about-btn"/>
          </div>
      </div>
  </div>

</template>

<script setup>
import {onMounted, ref} from "vue";


onMounted(()=>{
  TitleSetup();
  SetupAboutProfile();
  SetupProfessionalItem();
  SetupContentInformation();
});

const title_ch = [
  '智慧是創造的基石',
  '設計是智慧的載體',
  '現實是設計的體現',
  '而我透過設計將智慧轉化為現實'
];
const titles_en = [
  'Wisdom is the cornerstone of creation',
  'Design is the carrier of wisdom',
  'Reality is the embodiment of design',
  'I transform wisdom into reality through design'
];

const titleObjects = ref([]);
const aboutProfile = ref( {
  job_en: String,
  job_ch: String,
  name_en: String,
  name_ch: String,
  education_en: String,
  education_ch: String,
  senior_school: String,
  collage_school: String,
});
const professionalItems = ref({
  Title:{
    en: String,
    ch: String
  },
  Items: [],
});
const contentInformation = ref({
  Title: {
     en:String,
     ch:String
   },
  Phone: String,
  Email: String
})

function TitleSetup(){
  for (let i=0;i<titles_en.length;i++){
    titleObjects.value.push({en: titles_en[i], ch: title_ch[i]});
  }
}

const SetupAboutProfile = (()=>{
  aboutProfile.value = {
    job_en: "Designer",
    job_ch: "設計師",
    name_en: "Zhuo Xiao-Lun",
    name_ch: "卓筱倫",
    education_en: "Education",
    education_ch: "學歷",
    senior_school: "市立大甲高級中學 美工科畢業",
    collage_school: "國立雲林科技大學 視覺傳達設計系",
  }
});

const SetupProfessionalItem = (()=>{

    professionalItems.value={
      Title:{en: "Professional specialty", ch: "專業項目"},
      Items:["視覺傳達設計", "數位媒體設計", "品牌識別設計"]
    }
});

const SetupContentInformation=(()=>{
  contentInformation.value = {
    Title:{en: "Contact information", ch: "聯絡方式"
     },
    Phone:"0979-380-188",
    Email: "zhuoxl3729@gmail.com"
  }
});

</script>

