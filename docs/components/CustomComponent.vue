<template>
  <div class="custom-component">
   <div class="aa">
    custom-component
   </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.custom-component{
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: red;
  padding: 15px;
  .aa{
    padding: 20px;
    background-color: green;
  }
}
</style>