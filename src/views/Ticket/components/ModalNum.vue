<script setup lang="ts">


    const { showNum, num, numList } = defineProps(['showNum', 'num', 'numList'])

    console.log("num : " + num)
    console.log("numList : " + numList)

</script>

<template>
    <div v-if="showNum" class="modal-mask">

        <div class="modal-container">

            <div class="header">
                <div class="title">
                    좌석 번호
                </div>
                <div class="close" @click="$emit('close')">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 4L16 16" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M4 16L16 4" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
    
            <div class="selection">

                <div v-for="num in numList">
                    <div class="item" @click="$emit('selectAndClose', num)">
                        {{ num }} 번
                    </div>
                </div>
            </div>
    
            <div class="footer">
                <button class="btnClose" @click="$emit('close')">선택 닫기</button>
            </div>

        </div>
        
    </div> 
</template>

<style scoped>

.modal-mask {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;

    background: rgba(0,0,0,.6);

    display: flex;
    flex-direction: column;
    justify-content: flex-end;
}

.modal-container {
    background: white;
    padding: 1rem;

    width: 100%;
    max-height: 86%;

    border-top-left-radius: 20px;
    border-top-right-radius: 20px;

}
.header {
    height: 50px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;

    margin-right: 20px;

    align-items: center;

    /* for test purposes 
    border: 1px solid black; 
    */
}

.title {
    position: relative;
    width: fit-content;
    height: 24px;
    left: 20px;

    font-weight: 800;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: -0.5px;

    color: #000000;

    /* for test purposes 
    border: 1px solid red; 
    */
}

.selection {
    position: relative;

    padding: 10px;

    width: 100%;
    /* max-height: 300px; */
    height: fit-content;
    max-height: 300px;



    overflow-y: scroll;
        
    /* for test purposes 
    border: 1px solid black; 
    */
}

.item {
    padding: 19px 30px;
    gap: 20px;

    width: 100%;
    height: 58px;

    font-weight: 400;
    font-size: 17px;
    line-height: 20px;
    letter-spacing: -0.5px;

    color: #777777;
    background-color: white;
}

.btnClose {
    border-radius: 15px; 
    border: none;

    height: 60px;
    width: 100%;
    display: inline-block;

    color: white;
    background-color: black;
    padding: 0;

    text-align: center;
    vertical-align: baseline;
    text-decoration: none;
    font-size: 16px;
    
    /* for test purposes 
    border: 1px solid black; 
    */
}

.footer {
    position: relative;
    height: fit-content;
    padding: 20px 0 20px 0;

    /* bottom: 0; */

    /* for test purposes 
    border: 1px solid red; 
    */
}

</style>