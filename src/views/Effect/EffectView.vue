<script setup lan="ts">

import ToolBar from '@/components/ToolBar.vue';
import { getStorage, saveStorage, clearStorage, hslToRgb, rgbToHsl } from '@/global/utility.js';


import { defineComponent, ref, reactive } from 'vue'





const powerOn = ref(true);
const handlePowerChange = (e) => {
  console.log("PowerOn is " + e)
}

const effectMode = ref("ON");
// const effectMode = ref("Flash");
// const effectMode = ref("Dimming");
// const effectMode = ref("Party");
// const effectMode = ref("Rainbow");
// const effectMode = ref("Rotation");
// const effectMode = ref("Reverse");



const handleModeChange = (m) => {
  effectMode.value = m;
}

const color = reactive({
                hue: 50,
                saturation: 100,
                luminosity: 50,
                alpha: 1,
            });

const onInput = (hue) => {
                    color.hue = hue;
                    console.log("Color(Hue): " + color.hue)
                    
                }


const colorChangeTimer = setInterval(() => {
  color.hue = color.hue + speed.value;

  if (color.hue >= 360) { color.hue = color.hue - 360; }
  if (color.hue < 0) { color.hue = color.hue + 360; }
}, 50); // 0.05초 마다 실행 (초당 20번)


const colorMonitorTimer = setInterval(() => {
  console.log("speed : " + speed.value + 
              " / hue : " + color.hue + 
              " / brightness : " + brightness.value + 
              " / rgb : " + hslToRgb(color.hue/360, 1.0, brightness.value/100));

  console.log("RGB 255,0,0 => " + rgbToHsl(255, 0, 0))
}, 500); // 0.5초 마다 실행 (초당 2번)


const speed = ref(5);  // 

const updateSpeed = (s) => {
  speed.value = s;
  console.log("updateSpeed : " + s);
}

const formatTooltipForSpeed = (value) => `${value * 20}°/초`;


var brightness = ref(50);

const updateBrightness = (b) => {
  // console.log("updateBrightness : " + b);
}

const formatTooltipForBrightness = (value) => `${value}%`;

</script>

<template>

  <div class="container">
  
    <div class="header">
      <div class="title">
        조명제어
      </div>
    </div>

    <div class="subtitle">
      전원
    </div>

    <div class="poweContainer">

      <div>
        <div>
          <h3>
            <b>Power ON</b>
          </h3>
        </div>
        <div>
          <h4>전원이 켜졌습니다.</h4>  
        </div>
      </div>
      <div>
        <div>
          <NSwitch 
                v-model:value="powerOn" 
                size="large"
                @update:value="handlePowerChange" 
          />
        </div>
      </div>

    </div>

    <div class="subtitle">
      모드
    </div>

    <!-- 모드 선택을 위한 영역 -->
    <div class="modeSelect">

      <!-- ON 모드 ------------------------------------------------------------------------------------->
      <div class="mode" @click="handleModeChange('ON')">

        <!-- 선택된 상태 -->
        <div class="modeIcon" v-if="effectMode == 'ON'">

          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="24" cy="24" r="24" fill="black"/>
            <path d="M24 15.2732C20.3852 15.2732 17.4546 18.1855 17.4546 21.7777C17.4546 26.6426 21.2728 26.5445 21.2728 30.5459H26.7273C26.7273 26.5445 30.5455 26.6426 30.5455 21.7777C30.5425 18.1855 27.6119 15.2732 24 15.2732Z" fill="white" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linejoin="round"/>
            <path d="M21.2726 33.8181H26.7271" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>


        </div>

        <!-- 선택되지 않은 상태 -->
        <div class="modeIcon" v-else>

          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="24" cy="24" r="23.5" stroke="#F2F2F2"/>
            <path d="M24 15.2733C20.3852 15.2733 17.4546 18.1856 17.4546 21.7779C17.4546 26.6427 21.2728 26.5446 21.2728 30.546H26.7273C26.7273 26.5446 30.5455 26.6427 30.5455 21.7779C30.5425 18.1856 27.6119 15.2733 24 15.2733Z" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linejoin="round"/>
            <path d="M21.2726 33.8182H26.7271" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>

        </div>

        <!-- 모드 이름 -->
        <div class="modeName">
          ON
        </div>

      </div>

      <!-- Flash 모드 ------------------------------------------------------------------------------------->
      <div class="mode" @click="handleModeChange('Flash')">
        
        <!-- 선택된 상태 -->
        <div class="modeIcon" v-if="effectMode == 'Flash'">

          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="24" cy="24" r="24" fill="black"/>
            <path d="M18.0001 24.6243L26.4001 12.5449L25.2001 21.7086H30.0001L21.6001 35.454L22.8001 24.6243H18.0001Z" fill="white" stroke="white" stroke-width="1.5" stroke-linejoin="round"/>
          </svg>

        </div>

        <!-- 선택되지 않은 상태 -->
        <div class="modeIcon" v-else>

          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="24" cy="24" r="23.5" stroke="#F2F2F2"/>
            <path d="M18.0001 24.6241L26.4001 12.5448L25.2001 21.7084H30.0001L21.6001 35.4539L22.8001 24.6241H18.0001Z" stroke="black" stroke-width="1.5" stroke-linejoin="round"/>
          </svg>


        </div>

         <!-- 모드 이름 -->
         <div class="modeName">
          Flash
        </div>

      </div>


      <!-- Dimming 모드 ------------------------------------------------------------------------------------->   
      <div class="mode" @click="handleModeChange('Dimming')">
        
        <!-- 선택된 상태 -->
        <div class="modeIcon" v-if="effectMode == 'Dimming'">

          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="24" cy="24" r="24" fill="black"/>
            <circle cx="24" cy="24" r="4.25" fill="white" stroke="white" stroke-width="1.5"/>
            <circle cx="24" cy="24" r="9.25" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-dasharray="2 5"/>
          </svg>


        </div>
        
        <!-- 선택되지 않은 상태 -->
        <div class="modeIcon" v-else>

          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="24" cy="24" r="23.5" stroke="#F2F2F2"/>
            <circle cx="24" cy="24" r="4.25" stroke="black" stroke-width="1.5"/>
            <circle cx="24" cy="24" r="9.25" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-dasharray="2 5"/>
          </svg>

        </div>

        <!-- 모드 이름 -->
        <div class="modeName">
          Dimming
        </div>

      </div>


      <!-- Party 모드 -------------------------------------------------------------------------------------> 
      <div class="mode" @click="handleModeChange('Party')">
        
        <!-- 선택된 상태 -->
        <div class="modeIcon" v-if="effectMode == 'Party'">

          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="24" cy="24" r="24" fill="black"/>
            <path d="M23.9999 15.2732L27.0008 20.961L33.3375 22.0574L28.8554 26.669L29.7708 33.0344L23.9999 30.1968L18.2289 33.0344L19.1443 26.669L14.6622 22.0574L20.999 20.961L23.9999 15.2732Z" fill="white" stroke="white" stroke-width="1.5" stroke-linejoin="round"/>
          </svg>


        </div>
        
        <!-- 선택되지 않은 상태 -->
        <div class="modeIcon" v-else>

          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="24" cy="24" r="23.5" stroke="#F2F2F2"/>
            <path d="M23.9999 15.2733L27.0008 20.9611L33.3375 22.0575L28.8554 26.6692L29.7708 33.0346L23.9999 30.1969L18.2289 33.0346L19.1443 26.6692L14.6622 22.0575L20.999 20.9611L23.9999 15.2733Z" stroke="black" stroke-width="1.5" stroke-linejoin="round"/>
          </svg>

        </div>

        <!-- 모드 이름 -->
        <div class="modeName">
          Party
        </div>

      </div>



      <!-- Rainbow 모드 -------------------------------------------------------------------------------------> 
      <div class="mode" @click="handleModeChange('Rainbow')">
        
        <!-- 선택된 상태 -->
        <div class="modeIcon" v-if="effectMode == 'Rainbow'">

          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="24" cy="24" r="24" fill="black"/>
            <path d="M18.7 28.0973C19.2565 28.3021 19.6984 28.7439 19.9032 29.3005H18.7V28.0973Z" stroke="white" stroke-width="1.4"/>
            <path d="M24.0779 30.0005C24.0779 26.6438 21.3567 23.9226 18 23.9226" stroke="white" stroke-width="1.5"/>
            <path d="M28.1299 30.0005C28.1299 24.4059 23.5946 19.8706 18 19.8706" stroke="white" stroke-width="1.5"/>
            <path d="M32.1818 30.0002C32.1818 22.1678 25.8324 15.8184 18 15.8184" stroke="white" stroke-width="1.5"/>
          </svg>

        </div>
        
        <!-- 선택되지 않은 상태 -->
        <div class="modeIcon" v-else>

          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="24" cy="24" r="23.5" stroke="#F2F2F2"/>
            <path d="M18.7 28.0974C19.2565 28.3022 19.6984 28.7441 19.9032 29.3006H18.7V28.0974Z" stroke="black" stroke-width="1.4"/>
            <path d="M24.0779 30.0007C24.0779 26.6439 21.3567 23.9227 18 23.9227" stroke="black" stroke-width="1.5"/>
            <path d="M28.1299 30.0004C28.1299 24.4058 23.5946 19.8705 18 19.8705" stroke="black" stroke-width="1.5"/>
            <path d="M32.1818 30.0002C32.1818 22.1678 25.8324 15.8184 18 15.8184" stroke="black" stroke-width="1.5"/>
          </svg>

        </div>

        <!-- 모드 이름 -->
        <div class="modeName">
          Rainbow
        </div>

      </div>




      <!-- Rotation 모드 -------------------------------------------------------------------------------------> 
      <div class="mode" @click="handleModeChange('Rotation')">
        
        <!-- 선택된 상태 -->
        <div class="modeIcon" v-if="effectMode == 'Rotation'">

          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="24" cy="24" r="24" fill="black"/>
            <mask id="mask0_533_26854" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="8" y="8" width="32" height="32">
              <circle cx="24" cy="24" r="16" fill="white"/>
            </mask>
            <g mask="url(#mask0_533_26854)">
              <path d="M14.6009 23.5022C14.8526 18.6489 18.7996 14.7276 23.7413 14.5918C27.4145 14.4907 30.6539 16.5083 32.2876 19.5352" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
              <path d="M12.604 23.059L14.5663 25.0973L16.6046 23.1351" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M33.4034 24.4976C33.1517 29.3508 29.2047 33.2721 24.263 33.408C20.5899 33.509 17.3504 31.4915 15.7167 28.4646" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
              <path d="M35.2938 25.0236L33.437 23.0949L31.5083 24.9517" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
          </svg>


        </div>
        
        <!-- 선택되지 않은 상태 -->
        <div class="modeIcon" v-else>

          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="24" cy="24" r="23.5" stroke="#F2F2F2"/>
            <mask id="mask0_533_26736" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="8" y="8" width="32" height="32">
              <circle cx="24" cy="24" r="16" fill="white"/>
            </mask>
            <g mask="url(#mask0_533_26736)">
              <path d="M14.6009 23.5022C14.8526 18.6489 18.7996 14.7276 23.7413 14.5918C27.4145 14.4907 30.6539 16.5083 32.2876 19.5352" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
              <path d="M12.604 23.0588L14.5663 25.0971L16.6046 23.1348" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M33.4034 24.4977C33.1517 29.3509 29.2047 33.2722 24.263 33.4081C20.5899 33.5091 17.3504 31.4916 15.7167 28.4647" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
              <path d="M35.2938 25.0235L33.437 23.0948L31.5083 24.9516" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
          </svg>

        </div>

        <!-- 모드 이름 -->
        <div class="modeName">
          Rotation
        </div>

      </div>




      <!-- Reverse 모드 -------------------------------------------------------------------------------------> 
      <div class="mode" @click="handleModeChange('Reverse')">
        
        <!-- 선택된 상태 -->
        <div class="modeIcon" v-if="effectMode == 'Reverse'">

          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="24" cy="24" r="24" fill="black"/>
            <circle cx="19.5" cy="24" r="7.25" stroke="white" stroke-width="1.5"/>
            <circle cx="28.5" cy="24" r="7.25" stroke="white" stroke-width="1.5"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M24 30.6154C21.8872 29.1754 20.5 26.7498 20.5 24.0001C20.5 21.2504 21.8872 18.8247 24 17.3848C26.1128 18.8247 27.5 21.2504 27.5 24.0001C27.5 26.7498 26.1128 29.1754 24 30.6154Z" fill="white"/>
          </svg>


        </div>
        
        <!-- 선택되지 않은 상태 -->
        <div class="modeIcon" v-else>

          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="24" cy="24" r="23.5" stroke="#F2F2F2"/>
            <circle cx="19.5" cy="24" r="7.25" stroke="black" stroke-width="1.5"/>
            <circle cx="28.5" cy="24" r="7.25" stroke="black" stroke-width="1.5"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M24 30.6153C21.8872 29.1753 20.5 26.7496 20.5 24C20.5 21.2503 21.8872 18.8246 24 17.3846C26.1128 18.8246 27.5 21.2503 27.5 24C27.5 26.7496 26.1128 29.1753 24 30.6153Z" fill="black"/>
          </svg>

        </div>

        <!-- 모드 이름 -->
        <div class="modeName">
          Reverse
        </div>

      </div>



    </div>
    

    <div class="subtitle">
      컬러
    </div>

 
    <div class="colorpickerContainer">
      <color-picker v-bind="color" @input="onInput"></color-picker>

    </div>


    <div class="subtitle">
      속도 조절
    </div>

    <div class="speedControlPanel">

        <n-slider 
            :default-value="5" 
            v-model:value="speed"
            :step="1" 
            :min="-20"
            :max="20"
            :format-tooltip="formatTooltipForSpeed" 
        >
            <template #thumb>
              <svg width="50" height="50" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_533_26510)">
                  <circle cx="22" cy="19" r="14" fill="white"/>
                </g>
                <defs>
                  <filter id="filter0_d_533_26510" x="0" y="0" width="44" height="44" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="3"/>
                    <feGaussianBlur stdDeviation="4"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_533_26510"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_533_26510" result="shape"/>
                  </filter>
                </defs>
              </svg>

            </template>
        </n-slider>

    </div>



    <div class="subtitle">
      밝기 조절
    </div>


    <div class="brightnessControlPanel">
      
      <n-slider 
            :default-value="50" 
            v-model:value="brightness"
            :step="10" 
            :format-tooltip="formatTooltipForBrightness" 
      >
            <template #thumb>
              <svg width="50" height="50" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_533_26510)">
                  <circle cx="22" cy="19" r="14" fill="white"/>
                </g>
                <defs>
                  <filter id="filter0_d_533_26510" x="0" y="0" width="44" height="44" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="3"/>
                    <feGaussianBlur stdDeviation="4"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_533_26510"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_533_26510" result="shape"/>
                  </filter>
                </defs>
              </svg>

            </template>

      </n-slider>

    </div>

    <div class="subtitle">
      
    </div>

  </div>

  <ToolBar />

</template>

<style scoped>


.container {

  position: fixed;
  width: 100%;

  top: 0;
  right: 0;
  left: 0;
  bottom: 90px;

  display: flex;
  flex-direction: column;
  
  align-items: center;

  overflow-y: scroll;
  overflow-x: hidden;

  /* for demo purposes 
  border: 1px solid red;
  */
}

.header {
  position: relative;

  top: 30px;
  width: 100%;
  padding: 0 20px 0 20px;

  height: 60px;

  /* for demo purposes 
  border: 1px solid red;
  */
}

.title {
  position: relative;
  min-width: fit-content;
  height: 29px;
  left: 20px;
  top: calc(50% - 29px/2 + 0.5px);

  font-weight: 900;
  font-size: 24px;
  line-height: 29px;
  color: #000000;

  /* for demo purposes 
  border: 1px solid red;
  */
}


.subtitle {

  position: relative;
  width: 100%;
  height: 46px;

  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px 20px;

  margin: 30px 0 0 0;


  background: #FFFFFF;

  font-weight: 800;
  font-size: 18px;
  line-height: 22px;
  /* identical to box height */

  color: #000000;

  /* for demo purposes 
  border: 1px solid red;
  */
}

.poweContainer {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 50px 30px;

  min-width: 336px;
  width: 90%;
  height: 70px;

  background: #FFFFFF;
  border: 1px solid #F2F2F2;
  box-shadow: 0px 8px 15px rgba(129, 143, 179, 0.15);
  border-radius: 12px;

  /* for demo purposes 
  border: 1px solid blue;
  */
}

.modeSelect {

  position: relative;
  width: 100vw;
  height: 100px;
  min-height: 100px;
  left: 0;
  

  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: space-between;
  padding: 30px 0 30px 20px;

  gap: 20px;

  overflow-x: scroll;
  overflow-y: hidden;

  /* for demo purposes 
  border: 1px solid blue;
  */
}

/* Hide scrollbar for Chrome, Safari and Opera */
.modeSelect::-webkit-scrollbar {
    display: none;
}

.mode {

  width: 60px;
  height: 74px;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
  padding: 0;
  gap: 12px;

  /* for demo purposes 
  border: 1px solid blue;
  */
}

.modeIcon {
  width: 48px;
  height: 48px;

  filter: drop-shadow(0px 6px 10px rgba(0, 0, 0, 0.2));

}

.modeName {
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  letter-spacing: -0.5px;

  color: #000000;
}


.colorpickerContainer {

  width: 100%;
  height: 300px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  /* for demo purposes 
  border: 1px solid blue;
  */
}

.speedControlPanel {
  width: 90%;
  height: 60px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  /* for demo purposes 
  border: 1px solid blue;
  */
}


.brightnessControlPanel {
  width: 90%;
  height: 60px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  /* for demo purposes 
  border: 1px solid blue;
  */
}

</style>