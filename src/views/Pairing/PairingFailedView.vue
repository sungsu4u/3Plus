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

const componentKey = ref(0);

const color = "#DBDBDB";


</script>

<template>
  <div class="container">
    <Header />

    <div class="description">
        연결에 실패했습니다.<br/>
        응원봉을 가깝게 위치한 뒤에<br/>
        다시 시도해 보세요.
    </div>
    <div class="detail">
        응원봉의 배터리가 충분한지<br/>
        그리고 블루투스가 켜져 있는지 확인해 주세요.
    </div>

    <div class="ring">
        <!-- <HaloRingSpinning /> -->
        <Ring :key="componentKey" :color="color" />

    </div>

    <div class="button">
        <button class="btnRetry" @click="router.push('/pairing')">다시 시도</button>
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
    bottom: 54px;
    width: 80%;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;

    /* for test purposes 
    border: 1px solid black; 
    */
}

.btnRetry {
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

    /* for test purposes 
    border: 1px solid black; 
    */
}


</style>