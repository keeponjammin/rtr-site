<script>
import GalleryItem from '../components/GalleryItem.vue';
export default {
    name: 'GallerySection',
    props:{
      mediaList:[],
    },components:{
      GalleryItem
    }
}
</script>

<template>
  <div v-if="mediaList.length > 1" class="gallery-section">
      <GalleryItem v-for="item in mediaList" :url="item?.url" :isVideo="item?.isVideo"/>
  </div>
  <div v-else class="not-found-images">
        <font-awesome-icon :icon="['fas', 'face-frown']" size="6x" />
        <h2>Not found any media</h2>
  </div>
</template>
<style scoped>
  .gallery-section{
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    margin: 15px auto;
    width: 80%;
  }
  .not-found-images{
    margin: 200px 0;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 90%;
    width: 80%;
    gap: 8px;
  }

  @media screen and (max-width: 500px) {
    .gallery-section{
      margin: 0;
      width: 100%;
    }
  }
</style>
