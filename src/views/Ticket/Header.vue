<script setup lang="ts">

const hasHistory = () => { return window.history.length > 2 }


</script>

<template>
    <div class="header" 
        @click="hasHistory()
        ? $router.go(-1)
        : $router.push('/')"
    >
        <div class="back">
            <!-- &lt;  -->
            <svg width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 1L1 10L10 19" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
                
        </div>   
    </div>
</template>

<style scoped>

.header {
    height: 60px;
    width: 100vw;
    padding: 0 0 0 20px;

    display: flex;

    /* for test purposes 
    border: 1px solid black; 
    */
}

.back {
    /*
    font-size: 30px;
    color: black;
    background-color: white;
    font-weight: bold;
    */

    align-self: flex-end;

    /* for test purposes 
    border: 1px solid black; 
    */
}

</style>

