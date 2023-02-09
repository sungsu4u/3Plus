<script setup lang="ts">


import Header from './Header.vue'

// import HaloRingSpinning from './components/HaloRingSpinning.vue';
// import HaloRing from './components/HaloRing.vue';
import BlueRingPulsing from './components/BlueRingPulsing.vue';

import { useRouter } from 'vue-router';

const router = useRouter()


</script>

<template>
  <div class="container">
    <Header />

    <div class="description">
        먼저 응원봉의 버튼을<br />
        길게 눌러 주세요.
    </div>
    <div class="detail">
        응원봉이 파란색으로 깜박이면<br />
        아래의 연결하기 버튼을 눌러주세요.
    </div>

    <div class="ring">
        <BlueRingPulsing />
    </div>

    <div class="button">
        <button class="btnOK" @click="router.push('/pairing2')">연결하기</button>
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
    justify-content: center;
}

.btnOK {
    border-radius: 15px; 
    border: none;

    height: 52px;
    width: 100%;

    color: white;
    background-color: black;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
}


</style>