<script setup lang="ts">

//////////////////////////////////////////////////////////////////////////////
//
//  Connection Completed
//  - After pairing, checking B, R, G lighing on the penlight
//

import { ref, watch } from 'vue';
import Header from './Header.vue'

// import HaloRingSpinning from './components/HaloRingSpinning.vue';
import Ring from './components/Ring.vue';


import { useRouter } from 'vue-router';
import CheckCircleFilled from '@ant-design/icons-vue/lib/icons/CheckCircleFilled';


const router = useRouter()

// const colorList = [`rgba(0, 0, 128, 1)`, `rgba(128, 0, 0, 1)`, `rgba(0, 128, 0, 1)` ];
const colorList = ["#FF0000", "#00FF00", "#0000FF" ];
const color = ref(colorList[0])
const componentKey = ref(0);

const forceRerender = () => {
  componentKey.value += 1;
};


var colorIndex = 1;

const timerColorChanging = setInterval(() => {


    color.value = colorList[colorIndex];
    forceRerender();
    colorIndex++;
    if (colorIndex >= colorList.length) { colorIndex = 0; }
}, 1000);


</script>

<template>
  <div class="container">
    <Header />

    <div class="description">
        연결이 완료되었습니다.<br/>
        응원봉이 화면과 같은 색으로<br/>
        동작하고 있나요?<br/>
    </div>
    <div class="detail">
        만약 응원봉이 같은 색으로 동작하지 않는다면<br/>
        연결을 다시 시도해 주세요.
    </div>

    <div class="ring">
        <!-- <HaloRingSpinning /> -->
        <Ring :key="componentKey" :color="color" />

    </div>

    <div class="button">
        <button class="btnRetry" @click="router.push('/pairing')">다시 시도</button>
        <button class="btnCompleted" @click="router.push('/home')">네, 연결 완료</button>
    </div>

  </div>


</template>

<style scoped>
.container {

  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  
  position: fixed;
  width: 100vw;
  /* border: 1px solid red;*/ /* for demo purposes */

  top: 0;
  right: 0;
  left: 0;
  bottom: 90px;

  /* overflow-y: scroll; */
  
}

.description {
    width: 100%;

    padding: 10px 0 0 30px;
    font-size: 22px;
    font-weight: 800;

    
    
    /* for test purposes 
    border: 1px solid black; 
    */
}

.detail {
    width: 100%;
    
    padding: 20px 0 0 30px;
    font-size: 14px;
    font-weight: 400;
    
    /* for test purposes 
    border: 1px solid black; 
    */
}


.ring {
    position: fixed;
    top: 45%;

    height: 200px;
    width: 200px;


    /* for test purposes 
    border: 1px solid black; 
    */
}

.button {
    position: fixed;
    bottom: 36px;
    width: 80%;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    /* for test purposes 
    border: 1px solid black; 
    */
}

.btnRetry {
    border-radius: 15px; 
    border-width: 2px;
    border-color: black;

    height: 52px;
    width: 48%;

    /* inline-size: min-content; */
    
    overflow-wrap: normal;

    color: black;
    background-color: white;
    padding: 0;
    text-align: center;
    vertical-align: baseline;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;

    /* for test purposes 
    border: 1px solid black; 
    */
}

.btnCompleted {
    border-radius: 15px; 
    border: none;

    height: 52px;
    width: 48%;

    /* inline-size: min-content; */

    overflow-wrap: normal;

    color: white;
    background-color: black;
    padding: 0;
    text-align: center;
    vertical-align: baseline;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    
    /* for test purposes 
    border: 1px solid black; 
    */
}


</style>