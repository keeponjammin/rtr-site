<script>
import New from './New.vue'
export default {
    name: 'LastNews',
    data(){
      return {
        newsList:[
          {
            title:"sdfsdfgsdjkgdf",
            description:"asjfhdjasdfhkajsdhfjklahdsfjkhasdkjfahsdjkfahsjkldfhajdkshfakjsdfhajsdhfajksdlhfaskjdfhalkdfhaksdfhafdasdfasd",
            img:"/src/assets/logo.svg",
          },
          {
            title:"sdfsdfgsdjkgdf",
            description:"asjfhdjasdfhkajsdhfjklahdsfjkhasdkjfahsdjkfahsjkldfhajdkshfakjsdfhajsdhfajksdlhfaskjdfhalkdfhaksdfhafdasdfasd",
            img:"/src/assets/logo.svg",
          },
          {
            title:"sdfsdfgsdjkgdf",
            description:"asjfhdjasdfhkajsdhfjklahdsfjkhasdkjfahsdjkfahsjkldfhajdkshfakjsdfhajsdhfajksdlhfaskjdfhalkdfhaksdfhafdasdfasd",
            img:"/src/assets/logo.svg",
          },
        ]
      }
    },
    components:{
      New
    }
  }
</script>

<template>
    <span class="subtitle">Last news</span>
    <div class="news">
      <New v-for="item in newsList" :img="item.img" :title="item.title" :description="item.description" />
    </div>
</template>
<style scoped>
  .news{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    transition: all .3s;
    gap: 2em;
  }
</style>
