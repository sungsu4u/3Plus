<script setup lang="ts">

import ToolBar from '@/components/ToolBar.vue';

</script>

<template>
  <div class="container">
    <h1>Skin</h1>
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

  /* overflow-y: scroll; */
  
}


</style>