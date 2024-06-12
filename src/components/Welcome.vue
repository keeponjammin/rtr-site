<script setup>
</script>

<template>
  <div id="welcome">
    <span class="title">BAND NAME</span>
    <img src="../assets/logo.svg" />
      <div class="arrow blink" style="bottom: 1.5em;"></div>
      <div class="arrow blink" style="bottom: 1em;"></div>
  </div>

</template>
<style scoped>
  #welcome{
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
    height: 100%;
    background-color: black;
  }
  img{
    width: 200px;
    height: 200px;
  }
  .arrow{
    display: block;
    position: absolute;
    content: '';
    width: 20px;
    height: 20px;
    transform: rotate(45deg);
    border-bottom: 3px solid white;
    border-right: 3px solid white;  
  }
</style>
