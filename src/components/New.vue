<script>
export default {
    name: 'New',
    props:{img:'',title:'',description:''},
    data(){
      return {
      }
    },
  }
</script>

<template>
  <div class="new" :style="{ backgroundImage: `url('${img}')` }">
    <div class="data-info" >
      <p class="minititle">{{ title }}</p>
      <p class="description">{{ description }}</p>
      <p class="date">04 / 12 / 2023</p>
    </div>
  </div>

</template>
<style scoped>
  .new{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    min-height: 35em;
    max-width: 25em;
    background-color:#f2f2f2;
    cursor: pointer;
    transition: all .3s;
    background-repeat: no-repeat; background-size: contain;
  }
  .new:hover .data-info{
    height: 100%
  }
  .new:hover .data-info .description {
      opacity: 1;
      display: block;
      height: 100%;
  }
  .description{
    opacity: 0;
    height: 0;
    width: 100%;
    word-break: break-word;
    transition: all .3s;
  }
  .data-info{
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-between;
    width: 100%;
    height: 30%;
    background-color: gray;
    padding: 1rem;
    transition: all .3s;
  }

  .minititle{
    display: block;
    width: 100%;
    margin-bottom: 10px;
    text-transform: uppercase;
    font-size: large;
    font-weight: bold;
    text-align: center;
    transition: all .3s;
    background-color: transparent;
    border-bottom: 1px solid transparent;
    
  }

</style>
