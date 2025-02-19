<template>
  <div class="container">
    <button id="toggleButton" @click="toggleButton">
      <span id="arrow" class="arrow">▼</span>
    </button>
  </div>

</template>

<script setup>
function toggleButton() {
  const arrow = document.getElementById('arrow');
  arrow.classList.toggle('rotate');
}
</script>

<style scoped lang="scss">
.container {
  text-align: center;
  margin-top: 50px;
}

#toggleButton {
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  outline: none;
}

.arrow {
  display: inline-block;
  transition: transform 0.3s ease;
}

.arrow.rotate {
  transform: rotate(180deg);
}
</style>