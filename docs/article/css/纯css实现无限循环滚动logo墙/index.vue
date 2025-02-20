<template>
  <div class="wall" style="--duration:10s">
    <div class="wall-item"></div>
    <div class="wall-item"></div>
    <div class="wall-item"></div>
    <div class="wall-item"></div>
    <div class="wall-item"></div>
    <div class="wall-item"></div>
    <div class="wall-item"></div>
    <div class="wall-item"></div>
    <div class="wall-item"></div>
  </div>
  <div class="wall" data-direction="reverse" style="--wall-item-number:9">
    <div class="wall-item"></div>
    <div class="wall-item"></div>
    <div class="wall-item"></div>
    <div class="wall-item"></div>
    <div class="wall-item"></div>
    <div class="wall-item"></div>
    <div class="wall-item"></div>
    <div class="wall-item"></div>
    <div class="wall-item"></div>
  </div>
</template>

<style scoped lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  --wall-item-height: 90px;
  --wall-item-width: 160px;
  --wall-item-number: 9;
  --duration: 16s;
}

@keyframes scrolling {
  to {
    transform: translateX(calc(var(--wall-item-width) * -1));
  }
}

.wall {

  margin: 30px auto;
  height: var(--wall-item-height);
  // width: 80vw;
  position: relative;
  mask-image: linear-gradient(90deg, hsl(0 0% 0% / 0),
      hsl(0 0% 0% / 1) 20%,
      hsl(0 0% 0% / 1) 80%,
      hsl(0 0% 0% / 0));
}

.wall .wall-item {
  position: absolute;
  top: 0;
  left: 0;
  transform: translateX(calc(var(--wall-item-width) * var(--wall-item-number)));
  height: var(--wall-item-height);
  width: var(--wall-item-width);
  background-image: linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%);
  animation: scrolling var(--duration) linear infinite;
  cursor: pointer;
}

.wall[data-direction="reverse"] .wall-item {
  animation-direction: reverse;
  background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
}

.wall .wall-item:nth-child(1) {
  animation-delay: calc((var(--duration) / var(--wall-item-number)) * (var(--wall-item-number) - 1) * -1);
}

.wall .wall-item:nth-child(2) {
  animation-delay: calc((var(--duration) / var(--wall-item-number)) * (var(--wall-item-number) - 2) * -1);
}

.wall .wall-item:nth-child(3) {
  animation-delay: calc((var(--duration) / var(--wall-item-number)) * (var(--wall-item-number) - 3) * -1);
}

.wall .wall-item:nth-child(4) {
  animation-delay: calc((var(--duration) / var(--wall-item-number)) * (var(--wall-item-number) - 4) * -1);
}

.wall .wall-item:nth-child(5) {
  animation-delay: calc((var(--duration) / var(--wall-item-number)) * (var(--wall-item-number) - 5) * -1);
}

.wall .wall-item:nth-child(6) {
  animation-delay: calc((var(--duration) / var(--wall-item-number)) * (var(--wall-item-number) - 6) * -1);
}

.wall .wall-item:nth-child(7) {
  animation-delay: calc((var(--duration) / var(--wall-item-number)) * (var(--wall-item-number) - 7) * -1);
}

.wall .wall-item:nth-child(8) {
  animation-delay: calc((var(--duration) / var(--wall-item-number)) * (var(--wall-item-number) - 8) * -1);
}

.wall .wall-item:nth-child(9) {
  animation-delay: calc((var(--duration) / var(--wall-item-number)) * (var(--wall-item-number) - 9) * -1);
}

.wall:has(.wall-item:hover) .wall-item {
  animation-play-state: paused;
}
</style>