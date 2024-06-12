<script>
export default {
    name: 'Socials',
    props: {
        size:"xl"
    },
  }
</script>

<template>
    <span class="minititle">Follow us on:</span>
    <div class="socials">
        <font-awesome-icon class="icon" id="twitter" :icon="['fab', 'twitter']" :size="size"/>
        <font-awesome-icon class="icon" id="fb" :icon="['fab', 'facebook']"  :size="size"/>
        <font-awesome-icon class="icon" id="soundcloud" :icon="['fab', 'soundcloud']" :size="size"/>
        <font-awesome-icon class="icon" id="spotify" :icon="['fab', 'spotify']"  :size="size"/>
        <font-awesome-icon class="icon" id="yt" :icon="['fab', 'youtube']" :size="size"/>
        <font-awesome-icon class="icon" id="ig" :icon="['fab', 'instagram']" :size="size"/>
    </div>

</template>
<style scoped>
    .socials{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
    }
    .icon{
        padding: 5px;
        margin: 5px;
        cursor: pointer;
        aspect-ratio: 1/1;
        background: #5f5f5f;
        transition: all .3s;
    }
    .icon:hover{
        scale: 1.2;
        color: white;
    }
    #ig:hover{
        background:radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%);
    }
    #yt:hover{
        background:linear-gradient(120deg, #db6d6d, #ff0000);
    }
    #spotify:hover{
        background: linear-gradient(120deg, #1ccc5b, #058d35, #025016);
    }
    #soundcloud:hover{
        background:linear-gradient(120deg, #ff8800, #ff3300);
    }
    #fb:hover{
        background:linear-gradient(120deg, #3b5998, #237db9);
    }
    #twitter:hover{
        background:linear-gradient(120deg,  #00ACEE, #36D8FF);
    }
</style>
