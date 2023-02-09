<script setup lang="ts">

const { color } = defineProps([ 'color' ])

// console.log("Ring: " + color)

</script>


<template>
    <div>
        <svg width="198" height="198" viewBox="0 0 198 198" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="99" cy="99" r="91.5" stroke="url(#paint0_linear_533_24591)" stroke-width="15"/>
            <defs>
                <linearGradient id="paint0_linear_533_24591" x1="0" y1="0" x2="198" y2="198" gradientUnits="userSpaceOnUse">
                    <stop :stop-color="color"/>
                    <stop offset="1" :stop-color="color"/>
                </linearGradient>
            </defs>
        </svg>
            
    </div>

</template>

