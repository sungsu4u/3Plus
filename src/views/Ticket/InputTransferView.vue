<script setup lang="ts">
import Header from './Header.vue'

import { getStorage, saveStorage, clearStorage } from '@/global/utility.js';

import { useRoute, useRouter } from 'vue-router';
import { ref, computed } from 'vue';

import HaloRing from './components/HaloRing.vue';


// 콘서트 정보를 저장한 JSON 파일 읽어 오기
import concerts from '@/data/Ticket/Concerts.json';
import seats from '@/data/Ticket/Seats.json'


const router = useRouter()
const route = useRoute()

// URL에서 콘서트 ID를 분리
const concertId = route.params.id
// console.log("concertId:" + concertId)


// 첫 실행때 환경을 만들기 위한 명령
// 디버깅 상황에서만 사용한다.
// clearStorage('regticket');

// 등록된 티켓이 있는지 확인
var regticket = getStorage('regticket');
if (regticket == null) {
  // 아직 등록된 티켓에 대한 정보를 만든 적이 없을 경우 

  // 더미 오브젝트를 만들고 저장하여 이후에 import한 utility 라이브러리에서 undefined 에러가 발생하지 않게 한다.
  regticket = [ ];
//   regticket = [
//     {
//         "id" : "SKZ_2ND_220429_1",
//         "zone" : "F",
//         "row" : "12",
//         "num" : "51"
//     }, 
//     {
//         "id" : "SKZ_2ND_230429_2",
//         "zone" : "D",
//         "row" : "11",
//         "num" : "50"
//     },
//     { 
//         "id" : "SKZ_2ND_230430_3",
//         "zone" : "G",
//         "row" : "14",
//         "num" : "54"
//     }
//   ];
  saveStorage('regticket', regticket);
}
 
// JSON 형태로 등록된 티켓 정보를 읽어와 사용할 수 있게 변수에 할당한다.
regticket = JSON.parse(getStorage('regticket'));

var ticket = regticket.filter(t => t.id == concertId)[0];

console.log("ConcertId : " + concertId);
console.log("Registered TicketId : ");
console.log(ticket)

if (ticket == undefined) {
    ticket = {};
    ticket.id = concertId;

    console.log("New TicketId : ");
    console.log(ticket)
}

// 좌석 정보 추출과 정리


// 콘서트 정보 추출

const concert = concerts.filter(t => t.id == concertId)[0];

console.log("concert id : " + concertId);

// console.log("Seats:");
// console.log(seats.filter(s => s[0] == "A" && s[1] == 1))
// console.log(seats.filter(s => s[0] == "A" && s[1] == 1).length)


// 포스터 이미지를 지정 
// 나중에는 이미지 리스트 중에 선택하게 될 것이나 현재는 1개만 지정하여 사용한다.
// JSON 파일에는 포스터 파일명이 지정된 필드가 이미 준비되어 있다.
var posterImg = '/src/data/Ticket/SKZ_2ND_23.jpg';
const getPosterImg = computed(() => `background-image: url('${posterImg}');`);



// 일정 대기 시간 후 자동으로 다음 페이지로 이동
const waitWhile = () => {
    router.replace('/inputtransfercompleted/' + concertId)
}

// for demo purposes
setTimeout(waitWhile, 2000);



</script>

<template>
    <div class="container">
        <div class="header">

        </div>

        <div class="description">
            입력하신 티켓정보를<br/>
            스마트폰에서 응원봉으로<br/>
            전송 중입니다.
        </div>
        <div class="detail">
            잠시만 기다려 주십시오.
        </div>

        <div class="confirmContainer">
            <div class="ring">
            <!-- <HaloRingSpinning /> -->
            <HaloRing />
    </div>
        </div>

        <div class="btnContainer">

        </div>

    </div>



</template>

<style scoped>


.header {
    height: 60px;
    width: 100vw;

    /* for test purposes 
    border: 1px solid black; 
    */
}


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
    bottom: 0;


    /* for test purposes 
    border: 1px solid pink; 
    */
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
    
    padding: 20px 20px 0px 30px;  /* T, R, B, L */
    font-size: 14px;
    font-weight: 400;
    
    /* for test purposes 
    border: 1px solid black; 
    */
}

.confirmContainer {

    position: relative;

    width: 100vw;
    height: 100%;

    /* bottom: 0; */

    display: flex;
    flex-direction: column;
    justify-content: center; /* 수직 방향 중앙 정렬 */
    align-items: center; /* 수평 방향 중앙 정렬 */
    
    /* overflow-y: scroll; */
    /* overflow: hidden; */
        
    /* for test purposes 
    border: 1px solid red; 
    */
}



.btnContainer {
    position: relative;
    bottom: 36px;
    width: 80%;
    height: 72px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    /* for demo purposes 
    border: 1px solid green;
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