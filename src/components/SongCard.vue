<script>
import Loader from '../components/Loader.vue'
export default {
    name: 'SongCard',
    data(){
      return{
        isLoading:true,
        
      }
    },
    props:{
      img: "",
      title:"",
      author:""
    },
    components: {
      Loader
    },
    methods: {
      doEffect(event){
        if(event.type ==="mouseenter"){
          event.target.childNodes[0].removeAttribute("style")
        }else{
          event.target.childNodes[0].setAttribute("style","filter: grayscale(1);")
        }
      }
    },
  }
</script>

<template>
<div class="card"  @mouseenter="doEffect($event)"  @mouseleave="doEffect($event)">
        <img v-show="!isLoading" :src="img" @loadstart="isLoading=true" @load="isLoading=false" 
        loading="lazy" style="filter:grayscale(1)" @error="this.style.display='none'" />
        <Loader id="loader" v-if="isLoading"/>
        <div v-else class="info">
          <h3 class="minititle">{{ title }}</h3>
          <p>{{ author }}</p>
        </div>
  </div>
</template>
<style scoped>
 .card{
    transition: all .3s;
    display: flex;
    flex-direction: column;
    margin: 20px;
    overflow: hidden;
    align-items: space-around;
    justify-content: flex-end;
    border-radius: 10px;
    border:  1px solid var(--vt-c-indigo);
    min-width: 6em;
    min-height: 6em;
  }

  #loader{
    min-height: 100%;
    min-width: 100%;
  }
  .card:hover{
   scale: 1.1;
  }
  img{
    max-width: 25vh;
    min-width: 25vh;
    height: 20vh;
    object-fit: cover;
  }
  .info{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 20px;
    background-color: var(--color-background-mute);
  }
  .minititle{
    font-weight: bold;
    color:greenyellow;
  }
</style>
