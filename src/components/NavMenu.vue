<script>
import NavBar from './NavBar.vue'
import Socials from './Socials.vue'
import LogoAndName from './LogoAndName.vue'
export default {
    name: 'NavMenu',
    mounted(){
        setTimeout(()=>{
          const menu = document.getElementsByClassName("menu")[0];
          if(menu){ menu.focus(); }
        });
    },
    methods:{
        closeNavMenu(){
            this.$emit('closeNavMenu');
        }
    },
    components:{
        NavBar,LogoAndName,Socials
    }
  }
</script>

<template>
    <div class="menu"  tabindex="0" @keydown.esc="closeNavMenu()">
        <div class="combo-nav">
          <LogoAndName name="BAND NAME" img="/src/assets/logo.svg" :isColumn="true" />
          <footer>
            <Socials size="3x"/>
          </footer>
        </div>
        <NavBar class="navbar-menu" @navClicked="closeNavMenu()"/>
    </div>
</template>

<style scoped>

    .menu{
        opacity: 0;
        height: 0;
        display: none;
        transition: all .3s;
        padding: 2em;
        z-index: 5;
        width: 100%;
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        background-color: #3d3d3d;

    }
    .combo-nav{
        opacity: 0;
        height: 0;
        display: none;
        transition: all .3s;
        padding: 1em;
        width: 100%;

    }
    @media screen and (max-width: 800px) {
    .menu{
        opacity: 1;
        height: 100%;
        display: flex; 
        flex-direction: column;
        align-items: center;
        justify-content: center;
       
    }
    .combo-nav{
        opacity: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        height: 100%;
        border-bottom: 2px solid var(--color-border);
    }
}

    @media (min-width: 800px) and (max-width: 1080px) {
    .menu{
        opacity: 1;
        height: 100%;
        display: flex; 
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }
    .combo-nav{
        opacity: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        height: 100%;
        border-right: 2px solid var(--color-border);
    }
 
}

</style>
