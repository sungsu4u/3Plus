<script setup lang="ts">

import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router';

import ToolBar from '@/components/ToolBar.vue';
import ConcertCard from '/src/views/Ticket/components/ConcertCard.vue';

// 콘서트 정보를 저장한 JSON 파일 읽어 오기
import concerts from '@/data/Ticket/Concerts.json';

import { getStorage, saveStorage, clearStorage } from '@/global/utility.js';


const router = useRouter()
const route = useRoute()

// 첫 실행때 환경을 만들기 위한 명령
// 디버깅 상황에서만 사용한다.
// clearStorage('regticket');

// 등록된 티켓이 있는지 확인
var regticket = getStorage('regticket');
if (regticket == null) {
  // 아직 등록된 티켓에 대한 정보를 만든 적이 없을 경우 

  // 더미 오브젝트를 만들고 저장하여 이후에 import한 utility 라이브러리에서 undefined 에러가 발생하지 않게 한다.
  regticket = [ ];
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
  saveStorage('regticket', regticket);
}
 
// JSON 형태로 등록된 티켓 정보를 읽어와 사용할 수 있게 변수에 할당한다.
regticket = JSON.parse(getStorage('regticket'));



// var regConcerts = concerts.filter(concert => regticket.find(ticket => concert.id == ticket.id))


const regConcertList = computed(() => {

    var regConcerts = [];

    for (const c in concerts) {
      for (const t in regticket) {
        if (concerts[c].id == regticket[t].id) {
          regConcerts.push(concerts[c]);
        }
      }
    }

    return regConcerts;
});

const unregConcertList = computed(() => {

    var unregConcerts = [];

    for (const c in concerts) {

      var found = false;

      for (const t in regticket) {
        if (concerts[c].id == regticket[t].id) {
          found = true;
        }
      }

      if (found == false) {
        unregConcerts.push(concerts[c]);
      }
    }

    return unregConcerts;
});


</script>

<template>
  <div class="container">
    <div class="header">
      <div class="title">티켓등록</div>
    </div>

    <div class="ticket">
      <div class="registered">
        <div class="regheader">티켓 등록된 공연</div>

        <div v-if="regConcertList.length > 0">

          <div class="CardContainer" v-for="concert in regConcertList">
            <ConcertCard 
                :key="concert.id" 
                :ticket="regticket.filter(x => x.id == concert.id)[0]"
                :concert="concert">
            </ConcertCard>
          </div>
        </div>
        <div v-else class="noConcert">
          티켓 등록된 공연이 없습니다.<br/>
          아래 공연 목록을 선택하고 티켓정보를 등록해 주세요.
        </div>

      </div>
      <div class="registered">
        <div class="regheader">티켓 미등록된 공연</div>

        <div class="CardContainer" v-for="concert in unregConcertList">
          <ConcertCard 
              :key="concert.id" 
              :ticket="regticket.filter(x => x.id == concert.id)[0]"
              :concert="concert">
          </ConcertCard>
        </div>

      </div>
    </div>

  </div>

  <ToolBar />

</template>

<style scoped>
.container {

  position: fixed;
  width: 100vw;
  /* border: 1px solid red;*/ /* for demo purposes */

  top: 0;
  right: 0;
  left: 0;
  bottom: 90px;

  display: flex;
  flex-direction: column;
  align-items: center;


  /* overflow-y: scroll; */

  /* for demo purposes 
  border: 1px solid red;
  */
}

.header {
  position: fixed;

  top: 30px;
  left: 20px;
  right: 20px;

  height: 60px;

  /* for demo purposes 
  border: 1px solid red;
  */
}

.title {
  position: absolute;
  width: fit-content;
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

.ticket {
  position: fixed;
  width: 100%;

  top: 134px;
  bottom: 92px;

  display: flex;
  flex-direction: column;
  align-items: center;

  overflow-y: scroll;

  /* for demo purposes 
  border: 1px solid green;
  */
}

.registered {
  width: 100%;

  /* for demo purposes 
  border: 1px solid green;
  */
}

.regheader {

  width: 80%;
  height: 46px;

  padding: 12px 12px 12px 20px;

  justify-content: center;
  align-items: center;

  font-weight: 800;
  font-size: 18px;
  line-height: 22px;
  /* identical to box height */


  color: #000000;

  /* for demo purposes 
  border: 1px solid green;
  */
}

.CardContainer {
  position: relative;
  width: 100%;

  /* for demo purposes 
  border: 1px solid green;
  */
}

.noConcert {
  position: relative;
  width: 100%;
  height: 150px;

  font-weight: 400;
  font-size: 13px;
  line-height: 16px;

  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  letter-spacing: -0.5px;

  color: #777777;

}


</style>