

<template>
<div>
    <svg viewBox="0 0 100 100">

        <foreignObject class="logoBack"  x="0" y="0" width="100" height="100">
            <div class="logoGradient" xmlns="http://www.w3.org/1999/xhtml"></div>
        </foreignObject>

        <g class="logoBlend">
            <rect x="0" y="0" width="100" height="100" />
            <path d="M 50 96 a 46 46 0 0 1 0 -92 46 46 0 0 1 0 92" />
        </g>

  </svg>
</div>


    <!-- <svg width="198" height="198" viewBox="0 0 100 100">

        <foreignObject class="logoBack" x="0" y="0" width="100" height="100">
          <div class="logoGradient" xmlns="http://www.w3.org/1999/xhtml"></div>
        </foreignObject>
    
        <g class="logoBlend">
            <rect x="0" y="0" width="100" height="100" />
            <path d="M 50 96 a 46 46 0 0 1 0 -92 46 46 0 0 1 0 92" />
        </g>
    </svg> -->
        
</template>

<style scoped>
svg {
  max-width: 240px;
}

foreignObject.logoBack {
  transform-origin: 50px 50px;
  animation: colorRotate 7.5s infinite linear;
}

div.logoGradient {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: conic-gradient(from 270deg, #ff4800 10%, #dfd902 35%, #20dc68, #0092f4, #da54d8 72% 75%, #ff4800 95%);
}

g.logoBlend {
  mix-blend-mode: lighten;
}

g.logoBlend > rect {
  fill: white;
}

g.logoBlend > path {
  stroke: black;
  stroke-width: 8;
  stroke-dasharray: 288.5;
  stroke-linecap: round;
  fill: none;
  transform-origin: 50px 50px;
  animation:
    pathStroke 3.75s infinite ease-in-out,
    pathRotate 7.5s infinite cubic-bezier(1,.5,0,.5);
}

@keyframes colorRotate {
  from { transform: rotate(270deg); }
  to { transform: rotate(-90deg); }
}

@keyframes pathStroke {
  0% {  stroke-dashoffset: -288.5; }
  40%, 70% { stroke-dashoffset: 0; }
  100% { stroke-dashoffset: 288.5; }
}

@keyframes pathRotate {
  0% {  transform: rotate(0deg); }
  50% { transform: rotate(-540deg); }
  100% { transform: rotate(-1080deg); }
}


/*

svg {
    max-width: 240px;
  }
  
  foreignObject.logoBack {
    transform-origin: 50px 50px;
    animation: colorRotate 7.5s infinite linear;
  }
  
  div.logoGradient {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: conic-gradient(from 270deg, #ff4800 10%, #dfd902 35%, #20dc68, #0092f4, #da54d8 72% 75%, #ff4800 95%);
  }
  
  g.logoBlend {
    mix-blend-mode: lighten;
  }
  
  g.logoBlend > rect {
    fill: white;
  }
  
  g.logoBlend > path {
    stroke: black;
    stroke-width: 8;
    stroke-dasharray: 288.5;
    stroke-linecap: round;
    fill: none;
    transform-origin: 50px 50px;
    animation:
      pathStroke 3.75s infinite ease-in-out,
      pathRotate 7.5s infinite cubic-bezier(1,.5,0,.5);
  }
  
  @keyframes colorRotate {
    from { transform: rotate(270deg); }
    to { transform: rotate(-90deg); }
  }
  
  @keyframes pathStroke {
    0% {  stroke-dashoffset: -288.5; }
    40%, 70% { stroke-dashoffset: 0; }
    100% { stroke-dashoffset: 288.5; }
  }
  
  @keyframes pathRotate {
    0% {  transform: rotate(0deg); }
    50% { transform: rotate(-540deg); }
    100% { transform: rotate(-1080deg); }
  }
  */


</style>