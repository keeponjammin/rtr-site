<script>
export default {
    name: 'LogoAndName',
    data(){
      return{
      }
    },
    props:{
      img: "",
      name:"",
      isColumn:false,
    },
    components: {
    },
    methods: {

    },
  }
</script>

<template>
    <div class="name-container" :class="{'column': isColumn, 'row':!isColumn}">
        <img :src="img"/>
        <span class="">{{ name }}</span>
    </div>

</template>
<style scoped>
    .name-container {
        display: flex;
        width: 100%;
        height: 100%;
        align-items: center;
        justify-content: center;
    }
    .row{
        flex-direction: row;
    }
    .column{
        flex-direction: column;
    }
    span{
        padding: 1em;
        font-size: medium;
    }
    img{
        max-height: 200px;
    }
</style>
