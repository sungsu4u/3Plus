<script setup lang="ts">

//////////////////////////////////////////////////////////////////////////////
//
//  Waiting Pairing
//  - While pairing, Rainbow ring will rotate.
//

import Header from './Header.vue';

// import HaloRingSpinning from './components/HaloRingSpinning.vue';
import HaloRing from './components/HaloRing.vue';

import { useRouter } from 'vue-router';

const router = useRouter()

const waitWhile = () => {
    router.push('/pairing3')
}

// for demo purposes
setTimeout(waitWhile, 2000);



</script>

<template>
  <div class="container">

    <Header />

    <div class="description">
        연결 중입니다.<br/>
        응원봉과 스마트폰을<br/>
        최대한 가까이 붙여주세요.
    </div>
    <div class="detail">
        응원봉의 배터리가 충분한지<br/>
        그리고 블루투스가 켜져 있는지 확인해 주세요.
    </div>

    <div class="ring">
        <!-- <HaloRingSpinning /> -->
        <HaloRing />
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


</style>