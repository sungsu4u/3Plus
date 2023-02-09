<script setup lang="ts">
    import { computed } from 'vue'
    import { useRouter } from "vue-router"
    const router = useRouter()
    const { ticket, concert } = defineProps(['ticket', 'concert'])

    const navigateToInput = () => {
        //   router.push(`/input/${quiz.id}`)
        }

    // 포스터 이미지를 지정 
    // 나중에는 이미지 리스트 중에 선택하게 될 것이나 현재는 1개만 지정하여 사용한다.
    // JSON 파일에는 포스터 파일명이 지정된 필드가 이미 준비되어 있다.
    var posterImg = 'src/data/Ticket/SKZ_2ND_23.jpg';
    const getPosterImg = computed(() => `background-image: url('${posterImg}');`);
</script>

<template>
    <div class="card">
        <div class="concertContainer">

            <div class="concertInfo">
                <div class="title">
                    {{ concert.title }}
                </div>
                <div class="title">
                    {{ concert.subtitle }}
                </div>
                <div class="date">
                    {{ concert.date }}
                </div>
                <div class="place">
                    {{ concert.place }}
                </div>
                <!-- 티켓 정보 표시 -->
                <div  v-if="ticket" class="ticket">{{ ticket.zone }}구역 {{ ticket.row }}열 {{ ticket.num }}번</div>

            </div>
            <div class="posterimg" :style="getPosterImg"></div>
        </div>
        <RouterLink :to="`/input/${concert.id}`">
            <div  v-if="ticket" class="ticketInput">
                티켓정보 수정하기
            </div>
            <div  v-else class="ticketInput">
                티켓정보 입력하기
            </div>
        </RouterLink>
    </div>

</template>

<style scoped>

.card {

    /* width: 100%; */
    margin: 20px 20px 20px 20px;

    box-sizing: border-box;
    
    background: #FFFFFF;
    border: 1px solid #F2F2F2;
    box-shadow: 0px 8px 15px rgba(129, 143, 179, 0.15);
    border-radius: 15px;
    
    display: flex;
    flex-direction: column;


    /* for demo purposes 
    border: 1px solid purple; 
    */
}

.concertContainer {

    margin: 20px 20px 20px 20px;

    display: flex;
    flex-direction: row;


    align-items: center;
    justify-content: center;
        
    

    /* for demo purposes 
    border: 1px solid purple; 
    */
}
.concertInfo {
    display: flex;
    flex-direction: column;

    width: calc(100% - 78px);
    margin-right: 10px;

    /* for demo purposes 
    border: 1px solid blue; 
    */
}


.title {
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: -0.5px;

    color: #000000;
}

.date {
    margin-top: 5px;

    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: #000000;
}

.place {
    margin-top: 2px;

    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: #000000;
}

.posterimg {
  /* position: absolute; */
  width: 68px;
  height: 98px;



  /* for test purposes 
  border: 1px solid blue; 
  */
}

.ticketInput {
    width: 100%;
    height: 48px;

    display: flex;

    align-items: center;
    justify-content: center;


    font-weight: 800;
    font-size: 13px;
    line-height: 16px;
    color: #000000;

    border: 1px solid transparent; 
    border-top-width: 1px;
    border-top-color: rgba(0, 0, 0, 0.05); 

    /* for demo purposes 
    border: 1px solid pink; 
    */
}

.ticket {

    width:fit-content;

    display: flex;
    align-items: center;
    justify-content: center;

    margin: 5px;

    border-radius: 5px;

    color: #FFFFFF;
    background: #3F75FF;

    padding: 4px 5px 4px 5px;
    /*
    */

    font-size: 10px;
    font-weight: 700;
    line-height: 12px;
    letter-spacing: -0.5px;

    /* for test purposes 
    border: 1px solid red; 
    */

}

</style>