<script>
import Welcome from '../components/Welcome.vue'
import LastNews from '../components/LastNews.vue'
import GallerySection from '../components/GallerySection.vue'
import InfoRef from '../components/InfoRef.vue'
import ShapeDivider from '../components/ShapeDivider.vue'
export default {
    name: 'HomeView',
    data(){
      return{
        mediaList:[{
        url: "https://picsum.photos/700/600",
        isVideo:false
      },
      {
        url: "https://picsum.photos/700/600",
        isVideo:false
      },
      {
        url: "https://picsum.photos/700/600",
        isVideo:false
      }]
      }
    },
    components: {
      Welcome, LastNews, GallerySection, InfoRef, ShapeDivider
    },
  }
</script>

<template>
  <main>
    <Welcome id="welcome"/>
    <div class="container fade-in">
      <InfoRef
      text="We tell you from general information to the most shocking and funny anecdotes. You will be able to know better how the members work, their likes, concerns..."
      textButton="Let's meet better!"/>
    </div>
    <div class="container fade-in">
      <LastNews/>
      <div class="container">
        <InfoRef
        text="In the gallery you will find photos of all our important moments and video-compilations of the best moments"
        textButton="See more!"/>
      </div>
      <ShapeDivider/>
    </div>
    <span class="subtitle">Photos & Videos</span>
      <GallerySection class="fade-in" :mediaList="mediaList"/>
      <div class="container">
        <InfoRef class="fade-in"
        text="In the gallery you will find photos of all our important moments and video-compilations of the best moments"
        textButton="See more!"/>
      <ShapeDivider/>

    </div>
    <div class="container fade-in">
      <InfoRef 
      text="Currently, we mix up the covers with own songs. We have a repertoire of songs that`s we know play."
      textButton="Check it out!"/>
    </div>
    <div class="container fade-in">
      <InfoRef
      text="The band is hardworking daily to offer a good show. The band wants to people feel good vibes and desire to dance and sing."
      textButton="Contact now!"/>
      <ShapeDivider/>
    </div>
  </main>
</template>
<style scoped>
main{
  width: 100%;
}
  #welcome{
    height: 99vh;
  }
  .container{
    padding: 20px;
    display: flex;
    flex-direction: column;
  }
</style>
