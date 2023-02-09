<script setup lang="ts">
import Header from './Header.vue'
import ModalZone from './components/ModalZone.vue'
import ModalRow from './components/ModalRow.vue'
import ModalNum from './components/ModalNum.vue'
import { getStorage, saveStorage, clearStorage } from '@/global/utility.js';

import { useRoute, useRouter } from 'vue-router';
import { ref, computed } from 'vue';



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

// 구역 정보
const zones = {}; // 배열이 아니라 오브젝트의 key에 zone 정보를 할당하여 중복을 걸러낸다.

for (const s in seats) {
    zones[seats[s][0]] = zones[seats[s][0]] ?? {};  // 새로운 zone일 경우 Row를 할당하기 전에 빈 오브젝트를 생성해서 컴파일러 오류를 방지한다.
    zones[seats[s][0]][seats[s][1]] = 0; // Row도 오브젝트의 중간 key로 할당하여 중복을 제거한다.  0 대신에 다른 값을 할당해도 된다.

    // 제일 좋은 방법은 "구역" key가 "열"을 배열로 가지고 있는 것이지만 추가 연산의 부담이 있고, 실제 사용하지 않을 값이라 이렇게 마무리한다.
}

console.log(JSON.stringify(zones, null, 2));

// // 최종적으로 사용될 zone의 list를 얻는 코드
const zoneList = Object.keys(zones);
// console.log(JSON.stringify(zoneList, null, 2));


// 좌석열 정보
const row = { "1" : 0,  "2" : 0,  "3" : 0,  "4" : 0,  "5" : 0,  "6" : 0,  "7" : 0,  "8" :  0, "9" : 0, "10" : 0, 
             "11" : 0, "12" : 0, "13" : 0, "14" : 0, "15" : 0, "16" : 0, "17" : 0, "18" : 0, "19" : 0, "20" : 0, 
             "21" : 0 };

// for (const s in seats) {
//     zones[seats[s][0]] = zones[seats[s][0]] ?? {};  // 새로운 zone일 경우 Row를 할당하기 전에 빈 오브젝트를 생성해서 컴파일러 오류를 방지한다.
//     zones[seats[s][0]][seats[s][1]] = 0; // Row도 오브젝트의 중간 key로 할당하여 중복을 제거한다.  0 대신에 다른 값을 할당해도 된다.

//     // 제일 좋은 방법은 "구역" key가 "열"을 배열로 가지고 있는 것이지만 추가 연산의 부담이 있고, 실제 사용하지 않을 값이라 이렇게 마무리한다.
// }

// console.log(JSON.stringify(row, null, 2));

// // 최종적으로 사용될 zone의 list를 얻는 코드
const rowList = Object.keys(row);
// console.log(JSON.stringify(zoneList, null, 2));


// 좌석번호 정보
const num = { "1" : 0,  "2" : 0,  "3" : 0,  "4" : 0,  "5" : 0,  "6" : 0,  "7" : 0,  "8" :  0, "9" : 0, "10" : 0 };

// for (const s in seats) {
//     zones[seats[s][0]] = zones[seats[s][0]] ?? {};  // 새로운 zone일 경우 Row를 할당하기 전에 빈 오브젝트를 생성해서 컴파일러 오류를 방지한다.
//     zones[seats[s][0]][seats[s][1]] = 0; // Row도 오브젝트의 중간 key로 할당하여 중복을 제거한다.  0 대신에 다른 값을 할당해도 된다.

//     // 제일 좋은 방법은 "구역" key가 "열"을 배열로 가지고 있는 것이지만 추가 연산의 부담이 있고, 실제 사용하지 않을 값이라 이렇게 마무리한다.
// }

// console.log(JSON.stringify(row, null, 2));

// // 최종적으로 사용될 zone의 list를 얻는 코드
const numList = Object.keys(num);
// console.log(JSON.stringify(zoneList, null, 2));



let showZone = ref(false);
let showRow = ref(false);
let showNum = ref(false);

const closeHandler = () => {
    showZone.value = false;
    showRow.value = false;
    showNum.value = false;
}

const selectZoneAndCloseHandler = (e) => {
    showZone.value = false;

    if (ticket == null) {
        ticket = {}
    }
    
    ticket.zone = e;
    ticket.row = null;
    ticket.num = null;
    
    // updateRegTicket(ticket);

    console.log(JSON.stringify(ticket, null, 2));
}

const selectRowAndCloseHandler = (e) => {
    showRow.value = false;

    ticket.row = e;
    ticket.num = null;
    // updateRegTicket(ticket);

    console.log(JSON.stringify(ticket, null, 2));
}

const selectNumAndCloseHandler = (e) => {

    console.log("selectNumAndCloseHandler(" + e + ")")
    showNum.value = false;

    ticket.num = e;
    updateRegTicket(ticket);

    console.log(JSON.stringify(ticket, null, 2));
}

const updateRegTicket = (t) => {

    console.log("updateRegTicket >>")

    // 모든 항목이 다 있는지 확인
    if (ticket && ticket.id && ticket.zone && ticket.row && ticket.num) {
        
        // 아무것도 하지 않는다.
        console.log("Just OK and pass.")

    } else {

        console.log("New, but not completed. No update.")
        return;

    }
    
    // 새로운 티켓인지 아닌지에 따라 다르게 처리
    if (regticket.filter(t => t.id == concertId)[0] == undefined) {  // 새로운 티켓인 경우
        
        regticket.push(ticket); // 배열에 단순히 추가만 한다.

        console.log("* Updated added one *")

    } else { // 기존의 것을 업데이트 해야 할 경우

        // 배열을 훝어서 찾는다.
        for (const r in regticket) {
            if (regticket[r].id == ticket.id) {

                // 각 항목을 복사하고,
                regticket[r].zone = ticket.zone;
                regticket[r].row = ticket.row;
                regticket[r].num = ticket.num;

                console.log("* Updated existing one * " + r)
            }
        }
    }

    // 저장한다.
    // clearStorage('regticket');
    saveStorage('regticket', regticket);

    console.log("Show regticket after update >>")
    // console.log(JSON.stringify(getStorage('regticket'), null, 2));
    console.log(regticket);
    console.log("<< Show regticket after update")
    
} 


const clickZone = () => {
    showZone.value = true;
}

const clickRow = () => {
    if (ticket && ticket.zone) {
        showRow.value = true;
    }
}

const clickNum = () => {
    if (ticket && ticket.zone && ticket.row) {
        showNum.value = true;

    }
}

// console.log("Seats:");
// console.log(seats.filter(s => s[0] == "A" && s[1] == 1))
// console.log(seats.filter(s => s[0] == "A" && s[1] == 1).length)

</script>

<template>
    <div class="container">
        <Header />

        <div class="description">
            공연 티켓정보를<br />
            아래에서 직접 선택해 주세요.
        </div>
        <div class="detail">
            아래의 티켓정보가 입력됩니다.
        </div>

        <div class="selection">
            <div class="title">
                구역
            </div>
            
            <div class="btnDrop" @click="clickZone">
                <div v-if="ticket && ticket.zone">
                    {{ ticket.zone }}
                </div>
                <div v-else>
                    구역을 선택해 주세요.
                </div>
                <div>
                    <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="16" height="10" fill="white"/>
                        <path d="M2 2L8 8L14 2" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
            <div class="title">
                좌석열
            </div>
            <div class="btnDrop" @click="clickRow">
                <div v-if="ticket && ticket.zone && ticket.row">
                    {{ ticket.row }}
                </div>
                <div v-else-if="ticket == null || ticket.zone == null">
                    구역을 선택한 후 좌석 열을 선택해 주세요.
                </div>
                <div v-else>
                    좌석 열을 선택해 주세요.
                </div>
                <div>
                    <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="16" height="10" fill="white"/>
                        <path d="M2 2L8 8L14 2" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
            <div class="title">
                좌석번호
            </div>
            <div class="btnDrop" @click="clickNum">
                <div v-if="ticket && ticket.zone && ticket.row && ticket.num">
                    {{ ticket.num }}
                </div>
                <div v-else-if="ticket == null || ticket.zone == null || ticket.row == null">
                    구역과 좌석열을 선택한 후 좌석 번호를 선택해 주세요.
                </div>
                <div v-else-if="ticket && ticket.row == null">
                    좌석열을 선택한 후 좌석 번호를 선택해 주세요.
                </div>
                <div v-else>
                    좌석 번호를 선택해 주세요.
                </div>
                <div>
                    <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="16" height="10" fill="white"/>
                        <path d="M2 2L8 8L14 2" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
            <div class="btnContainer">
                <button class="btnNext" @click="router.push('/inputconfirm/'+ticket.id)">다음</button>
            </div>
        </div>





  </div>
          <!-- <ModalZone :showZone="showZone" @close="showZone=!showZone" :testVar="testVar"/> -->
          <ModalZone 
                :showZone="showZone" 
                @close="(e) => closeHandler(e)" 
                @selectAndClose="(e) => selectZoneAndCloseHandler(e)"
                :zone="ticket ? ticket.zone : null" 
                :zoneList="zoneList"
        />

        <ModalRow 
                :showRow="showRow" 
                @close="(e) => closeHandler(e)" 
                @selectAndClose="(e) => selectRowAndCloseHandler(e)"
                :row="ticket ? ticket.row : null" 
                :rowList="rowList"
        />

        <ModalNum 
                :showNum="showNum" 
                @close="(e) => closeHandler(e)" 
                @selectAndClose="(e) => selectNumAndCloseHandler(e)"
                :num="ticket ? ticket.num : null" 
                :numList="numList"
        />

        <!-- 
            <ConcertCard 
                    :key="concert.id" 
                    :ticket="regticket.filter(x => x.id == concert.id)[0]"
                    :concert="concert">
            </ConcertCard> 
        -->
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
    bottom: 0;

    overflow-y: scroll;

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

.selection {

    position: relative;

    width: 100vw;

    /* bottom: 0; */

    display: flex;
    flex-direction: column;

    overflow-y: scroll;
    /* overflow: hidden; */
        
    /* for test purposes 
    border: 1px solid red; 
    */
}

.title {

    padding: 30px 20px;
    gap: 10px;

    width: 100%;
    height: 41px;
    left: 0px;

    background: #FFFFFF;

    font-weight: 800;
    font-size: 14px;
    line-height: 17px;

    color: #000000;


    /* for test purposes 
    border: 1px solid red; 
    */
}

.btnDrop {

    display: flex;
    flex-direction: row;

    align-items: center;
    justify-content: space-between;

    background: #FFFFFF;
    border: 1px solid rgba(0,0,0,.15);
    border-radius: 12px;

    position: relative;

    height: 58px;
    width: calc(100vw - 40px);
    left: 20px;
    right: 20px;
    padding: 30px;

    font-weight: 400;
    font-size: 15px;
    line-height: 18px;
    letter-spacing: -0.3px;
    color: #C8C8C8;

    /* for test purposes 
    border: 1px solid red; 
    */
}



.btnContainer {
    position: relative;
    /* bottom: 36px; */
    width: 100%;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    /* for demo purposes 
    border: 1px solid green;
    */

}

.btnNext {
    border-radius: 15px; 
    /* border: none; */
    margin: 40px 0 20px 0;

    height: 52px;
    width: 80%;

    color: white;
    background-color: black;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    /* display: inline-block; */
    font-size: 16px;

    /* for demo purposes 
    border: 1px solid red;
    */
}



</style>