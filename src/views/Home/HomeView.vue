<script setup lang="ts">

import { ref, computed } from 'vue';
import { useRouter } from "vue-router"

import { getStorage, saveStorage, clearStorage, hslToRgb, rgbToHsl } from '@/global/utility.js';
import moment from 'moment'

// 콘서트 정보를 저장한 JSON 파일 읽어 오기
import concerts from '@/data/Ticket/Concerts.json';

// 툴바 component를 읽어 온다.
import ToolBar from '@/components/ToolBar.vue';


// 배경 스킨을 지정한다.
var skin = "/src/data/Skin/01.jpg"
// 배경 스킨을 지정하는 style을 만들어 반환한다.
const getSkin = computed(() => `background-image: url('${skin}');`);
// 배경 디렉토리에 존재하는 jpg 파일들의 목록을 만든다.
const skins = import.meta.glob('/src/data/Skin/*.jpg')
// 가장 첫 스킨을 디폴트로 지정한다 (나중에 수정되어야 할 부분)
for (const s in skins) {
  skin = s;
  break;
}

// 포스터 이미지를 지정 
// 나중에는 이미지 리스트 중에 선택하게 될 것이나 현재는 1개만 지정하여 사용한다.
// JSON 파일에는 포스터 파일명이 지정된 필드가 이미 준비되어 있다.
var posterImg = 'src/data/Ticket/SKZ_2ND_23.jpg';
const getPosterImg = computed(() => `background-image: url('${posterImg}');`);

// 첫 실행때 환경을 만들기 위한 명령
// 디버깅 상황에서만 사용한다.
// clearStorage('regticket');

// 등록된 티켓이 있는지 확인
var regticket = getStorage('regticket');
if (regticket == null) {
  // 아직 등록된 티켓에 대한 정보를 만든 적이 없을 경우 

  // 더미 오브젝트를 만들고 저장하여 이후에 import한 utility 라이브러리에서 undefined 에러가 발생하지 않게 한다.
  regticket = [];

  saveStorage('regticket', regticket);
}
 

  // regticket = [
  //   {
  //       "id" : "SKZ_2ND_220429_1",
  //       "zone" : "F",
  //       "row" : "12",
  //       "num" : "51"
  //   }, 
  //   {
  //       "id" : "SKZ_2ND_230429_2",
  //       "zone" : "D",
  //       "row" : "11",
  //       "num" : "50"
  //   },
  //   { 
  //       "id" : "SKZ_2ND_230430_3",
  //       "zone" : "G",
  //       "row" : "14",
  //       "num" : "54"
  //   }
  // ];
  // saveStorage('regticket', regticket);

// JSON 형태로 등록된 티켓 정보를 읽어와 사용할 수 있게 변수에 할당한다.
regticket = JSON.parse(getStorage('regticket'));


console.log("concert len : " + concerts.length);
console.log(concerts);
console.log("regticket len : " + regticket.length );
// console.log("regticket len : " + ((typeof regticket === 'undefined')  ? 0 : regticket ));
console.log(regticket)

// for (var concert in concerts) {
//   console.log(concert.id);
// }
// console.log("concert len=" + concerts.length)
// console.log(concerts);
 
// var regticket = JSON.parse(getStorage('regticket'));

// if (regticket == null) {
//   console.log("regiticket is " + regticket);
// }
// regticket.sort();

// 현재 가장 가까운 공연일자 선택
var concert = {};
const today = new Date();
var concertDate = new Date();
var formatedDate = "";
var formatedTime = "";

for (const c in concerts) {

  concert = concerts[c];
  concertDate = new Date(concert.date);

  if (concertDate > today) {

    formatedDate = moment(concertDate).format("YY/MM/DD");
    formatedTime= moment(concertDate).format("HH:mm");
    // console.log(formatedDate + " " + formatedTime);

    console.log("selected concert[" + c + "]");
    console.log(concert);

    break;
  }
  
}




</script>

<template>

  <div class="container">

    <!-- 백그라운드 이미지와 데코레이션 레이어 -->
    <div class="skin" :style="getSkin"></div>
    <div class="dimfull"></div>
    <div class="dimgradient"></div>
    
    <!-- 헤더에 표시하는 타이틀과 기능키들 -->
    <div class="header">

      <!-- 타이틀 영역 -->
      <div class="headertitle">Stray Kids</div>

      <!-- 기능키들 영역 -->
      <div class="specialkeys">

        <!-- 기능키 1 (별모양) -->
        <div class="key">
          <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5376 1.77454C10.7372 1.40849 11.2628 1.40849 11.4624 1.77454L14.1621 6.72472C14.2379 6.86363 14.3721 6.96113 14.5276 6.99025L20.0697 8.02811C20.4796 8.10485 20.642 8.60473 20.3555 8.90771L16.4819 13.0049C16.3732 13.1199 16.3219 13.2777 16.3423 13.4346L17.0678 19.0262C17.1215 19.4397 16.6963 19.7486 16.3196 19.5698L11.2259 17.1519C11.0829 17.084 10.9171 17.084 10.7741 17.1519L5.68039 19.5698C5.30373 19.7486 4.87851 19.4397 4.93216 19.0262L5.65772 13.4346C5.67808 13.2777 5.62683 13.1199 5.51812 13.0049L1.64446 8.90771C1.35802 8.60473 1.52044 8.10485 1.93026 8.02811L7.47241 6.99025C7.62794 6.96113 7.76213 6.86363 7.83789 6.72472L10.5376 1.77454Z" stroke="white" stroke-width="1.8"/>
          </svg>
        </div>
        
        <!-- 기능키 2 (하트모양) -->
        <div class="key">
          <svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.3049 17.3246C10.6923 17.701 11.3056 17.7045 11.6938 17.329C13.4074 15.6711 17.7381 11.4787 18.2364 10.9694C21.0196 8.26526 21.1133 4.36349 19.1893 2.39695C16.9132 0.0705551 13.2266 0.693792 11 3.9387C8.77342 0.693792 5.08683 0.0705266 2.81069 2.39696C0.886673 4.36349 0.980388 8.26526 3.76361 10.9694L10.3049 17.3246Z" stroke="white" stroke-width="1.8"/>
          </svg>
        </div>
          
        <!-- 기능키 3 (수평3선) -->
        <div class="key">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 19H20" stroke="white" stroke-width="1.8" stroke-linecap="round"/>
            <path d="M4 12H20" stroke="white" stroke-width="1.8" stroke-linecap="round"/>
            <path d="M4 5H20" stroke="white" stroke-width="1.8" stroke-linecap="round"/>
          </svg>  
        </div>

        <!-- 툴팁 -->
        <div class="tooltip">

          <svg width="180" height="58" viewBox="0 0 180 58" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_b_533_24999)">

              <!-- 툴팁의 둥근 모서리 사각형 표시 -->
              <rect y="6" width="180" height="52" rx="10" fill="#454545" fill-opacity="0.7"/>

              <!-- 툴팁의 말풍선 포인터 표시 -->
              <path d="M146 6L151 0L156 6H146Z" fill="#454545" fill-opacity="0.7"/>
            </g>
            <defs>
              <!-- 툴팁 내부 영역의 Blur 처리된 배경색 표시 -->
              <filter id="filter0_b_533_24999" x="-15" y="-15" width="203" height="88" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="7.5"/>
                <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_533_24999"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_533_24999" result="shape"/>
              </filter>
            </defs>
          </svg>

          <!-- 툴팁 메세지 표시 -->
          <div class="tooltipmsg">
            새로운 스페셜키가 등록되었어요.<br/>
            특별한 응원봉을 만들어 보세요!
          </div>
        </div>
          
          
      </div>

    </div>

    <!-- 공연 정보 표시 영역 (공연 정보가 없을 경우) -->
    <div class="concert" v-if="concerts.length == 0">
      <div class="noConcertMsg">
        티켓을 등록할 공연이 없습니다.
      </div>
    </div>

    <!-- 공연 정보 표시 영역 (등록된 티켓이 없을 경우) -->
    <div class="concert" v-else-if="regticket.length == 0">
      <div class="noConcertMsg">
        등록된 티켓이 없습니다.<br/><br/>
        <RouterLink style="text-decoration: none; color: inherit;" to="/ticket">
            <h3>
              등록하기 >
            </h3>
        </RouterLink>
      </div>
    </div>

    <!-- 공연 정보 표시 영역 (공연 정보와 등록된 티켓이 있을 경우) -->
    <div class="concert" v-else> 

      <RouterLink to="/input" class="concert">

        <!-- 포스터 표시 -->
        <div class="posterimg" :style="getPosterImg"></div>
  
        <div class="concertdetail">
  
          <!-- 공연 타이틀 표시 -->
          <div class="concerttitle">{{concert.title}}</div>
  
          <!-- 공연 부제목 표시 -->
          <div class="concertsubtitle">{{concert.subtitle}}</div>
  
          <!-- 공연 일정에 대한 정보 표시 -->
          <div class="concertinfo">
            {{formatedDate}}•{{concert.nth}}회차 공연 {{formatedTime}}<br/>
            {{concert.place}}
          </div>
  
          <!-- 티켓 정보 표시 -->
          <div class="concertticketSelected" v-if="regticket.filter(x => x.id == concert.id).length > 0">
            {{ regticket.filter(x => x.id == concert.id)[0].zone }}구역 
            {{ regticket.filter(x => x.id == concert.id)[0].row }}열 
            {{ regticket.filter(x => x.id == concert.id)[0].num }}번
          </div>
          <div class="concertticketUnselected" v-else>티켓 미등록</div>
  
        </div>

      </RouterLink>

    </div>



    
  </div>

  <ToolBar />

</template>

<style scoped>
.container {

  position: fixed;

  top: 0;
  right: 0;
  left: 0;
  bottom: 201px;

  /* overflow-y: scroll; */

  /* for test purposes 
  border: 1px solid black; 
  */
}

.skin {

  position: fixed;
 
  top: 0;
  right: 0;
  left: 0;
  bottom: 201px;

  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  /* for test purposes 
  border: 1px solid red; 
  */
}

.dimfull {

  position: fixed;
 
  top: 0;
  right: 0;
  left: 0;
  bottom: 201px;

  background: rgba(0, 0, 0, 0.15);  

  /* for test purposes 
  border: 1px solid red; 
  */
}

.dimgradient {

  position: fixed;
 
  top: 0;
  right: 0;
  left: 0;
  bottom: 201px;

  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 41.67%, rgba(0, 0, 0, 0.4) 72.4%);

  /* for test purposes 
  border: 1px solid red; 
  */
}

.header {

  position: fixed;

  top: 30px;
  left: 20px;
  right: 20px;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: space-between;
  align-items: center;

  /* overflow-y: scroll; */

  /* for test purposes 
  border: 1px solid red; 
  */
}
.headertitle {

  font-size: 24px;
  font-weight: 900;
  color: white;

  width: 60%;

  /* overflow-y: scroll; */

  /* for test purposes 
  border: 1px solid green; 
  */
}
.specialkeys {

  width: 40%;
  height: 30px;

  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: end;


  /* overflow-y: scroll; */

  /* for test purposes 
  border: 1px solid yellowgreen; 
  */
}

.key {
  /* 각 키를 감싸는 스타일이지만 적용 못함 */

  width: 30px;
  height: 30px;

  margin: 10px;

  display: flex;
  align-items: center;
  justify-content: space-around;

  /*
  align-content: space-between;
  */

  /* overflow-y: scroll; */

  /* for test purposes 
  border: 1px solid yellow; 
  */
}
.tooltip {

  position: fixed;

  top: 70px;
  right: 15px;

  align-items: center;

  animation: fadeout 2s;
  animation-delay: 5s;
  animation-fill-mode: forwards;
  /*
  */

  /* overflow-y: scroll; */

  /* for test purposes 
  border: 1px solid red; 
  */
}
@keyframes fadeout {
  from {
      opacity: 1;
  }
  to {
      opacity: 0;
  }
}
.tooltipmsg {

  font-size: 12px;
  font-weight: 200;
  color: white;

  position: absolute;
  top: 12px;
  left: 10px;
  width: 94%;

  justify-content: center;


  /* overflow-y: scroll; */

  /* for test purposes 
  border: 1px solid green; 
  */
}

.concert {

  position: fixed;

  bottom: 92px;
  width: 100%;
  height: 140px;

  border-top-left-radius: 30px 30px;
  border-top-right-radius: 30px 30px;

  background-color: white;

  color: black;

  display: flex;
  flex-direction: row;
  align-items: center;
  
  /*
  border-radius: 30px;
  flex-wrap: wrap;
  align-content: space-between;
  align-items: center;
  */

  /* overflow-y: scroll; */

  /* for test purposes 
  border: 1px solid red; 
  */
}


.posterimg {
  position: absolute;
  width: 68px;
  height: 98px;
  top: 21px;
  left: 21px;

  /* for test purposes 
  border: 1px solid blue; 
  */
}


.concertdetail {

  position: absolute;
  left: 100px;
  right: 0px;
  top: 21px;
  bottom: 21px;

  display: flex;
  flex-direction: column;
  align-items: left;

  /* for test purposes 
  border: 1px solid red; 
  */
}

.concerttitle {
  width: 100%;

  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
}

.concertsubtitle {
  width: 100%;

  font-size: 16px;
  font-weight: 700;
  line-height: 17px;

  /* for test purposes 
  border: 1px solid red; 
  */
}


.concertinfo {
  width: 100%;

  margin-top: 2px;

  font-size: 12px;
  font-weight: 400;
  line-height: 14px;

  /* for test purposes 
  border: 1px solid red; 
  */
}

.concertticketSelected {

  width:fit-content;
  
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 5px;
  border-radius: 5px;

  color: #FFFFFF;
  background: #3F75FF;

  padding: 4px 5px 4px 5px;
  /*
  */

  font-size: 10px;
  font-weight: 700;
  line-height: 12px;

  /* for test purposes 
  border: 1px solid red; 
  */
}

.concertticketUnselected {

  width:fit-content;
  
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 5px;
  border-radius: 5px;

  color: #FFFFFF;
  background: #C8C8C8;

  padding: 4px 5px 4px 5px;
  /*
  */

  font-size: 10px;
  font-weight: 700;
  line-height: 12px;

  /* for test purposes 
  border: 1px solid red; 
  */
}

.noConcertMsg {
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  font-weight: 400;
  font-size: 13px;
  line-height: 16px;

  /* for test purposes 
  border: 1px solid red; 
  */
}

</style>