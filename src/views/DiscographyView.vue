<script>
import SongCard from '../components/SongCard.vue'
export default {
    name: 'MusicView',
    data(){
      return{
        songList:[
          {
            title:"Seek And Destroy",
            author:"Metallica",
            img:"/videos/SeekAndDestroyMetallica.gif",
          },
          {
            title:"Heaven's On Fire",
            author:"KISS",
            img:"/videos/HeavenOnFireKISS.gif",
          },
          {
            title:"Can't Stop",
            author:"Red Hot Chili Peppers",
            img:"/videos/CantStopRHCP.gif",
          },
          {
            title:"Sweating Bullets",
            author:"Megadeth",
            img:"/videos/SweatingBulletsMegadeth.gif",
          },
          {
            title:"Holy Diver",
            author:"DIO",
            img:"/videos/HolyDiverDio.gif",
          },
          {
            title:"Speed King",
            author:"Deep Purple",
            img:"/videos/SpeedKingDeepPurple.gif",
          },
        ]
      }
    },
    components: {
      SongCard
    },
    methods: {
    },
  }
</script>
<template>
  <div class="music">
    <h1 class="title">Musical repertoire</h1>
    <h2 class="subtitle"> Our Covers </h2>
    <div class="repertorio">
        <SongCard  v-for="item in songList" :img="item.img" :title="item.title" :author="item.author" />
  </div>
  <h2 class="subtitle">Our Own Songs</h2>
  <span>Comming soon...</span>
  </div>
</template>

<style scoped>

  .music {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    width: 100%;
    padding: 20px;
    padding-top: 5rem;
  }
  .repertorio{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    transition: all .3s;
  }
</style>