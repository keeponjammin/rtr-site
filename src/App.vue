<script>
import { RouterView } from 'vue-router'
import NavMenu from './components/NavMenu.vue'
import NavBar from './components/NavBar.vue'
import Socials from './components/Socials.vue'

export default {
    name: 'App',
    components: {
      NavMenu,NavBar,Socials
    },
    data(){
      return{
        isTopOfPage:true,
        showNavMenu:false,
        fadeInElements:[]
      }
    },
    beforeUpdate(){
      this.fadeInElements = Array.from(document.getElementsByClassName('fade-in'));
      document.addEventListener('scroll', this.handleScroll);
      this.handleScroll();
    },
    
    unmounted(){
      document.removeEventListener('scroll', this.handleScroll)
    },
    beforeMount(){
      onscroll = (event)=>{
          this.isTopOfPage = window.scrollY === 0;
    }
    },
    methods:{
      scrollTop(){
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      },
      toogleNavMenu(){
        this.showNavMenu= !this.showNavMenu;
      },
      handleScroll(){
        console.log(this.fadeInElements);
        this.fadeInElements.forEach((item, index) => {
          console.log(item);
          if (this.isElemVisible(item)) {
            item.style.opacity = '1';
            this.fadeInElements.splice(index, 1);
            }
        });
      },
      isElemVisible(element){
          const buffer = 200;
          const rect = element.getBoundingClientRect();
          const elemTop = rect.top + buffer;
          const elemBottom = rect.bottom;
          return elemTop < window.innerHeight && elemBottom >= 0;
      },
    }
  }

</script>

<template>
  <header :class="{'header-scroll' : !isTopOfPage}">
    <span class="subtitle">BAND NAME</span>
    <NavBar class="header-navbar" />
  </header>
  <RouterView />
  <Transition name="slide-fade">
    <button v-if="!isTopOfPage" @click="scrollTop()" class="fab"><font-awesome-icon class="icon"  :icon="['fas', 'arrow-up']" size="xl"/></button>
  </Transition>
  <button @click="toogleNavMenu()" class="nav-btn" :class="{'nav-menu-btn':showNavMenu}">
    <div></div>
    <div></div>
    <div></div>
  </button>
  <Transition name="slide-fade">
      <NavMenu v-if="showNavMenu" @closeNavMenu="toogleNavMenu()"/>
  </Transition>
  <footer>
    <div class="footer-container">
      <Socials size="3x"/>
    </div>
  </footer>

</template>

<style scoped>

.header-navbar{
    opacity: 1;
    height: 100%;
    display: flex;
}
.logo {
  display: block;
  margin: 0 auto 2rem;
}

footer{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.footer-container{
  width: 30%;
  padding: 10px;
}
.nav-content{
  width:100%;
  height:100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
.nav-btn{
  display: 0;
  height: 0;
  opacity: 0;
}

.fab{
  min-height: 4em;
  min-width: 4em;
  position: fixed;
  right: 2em;
  bottom: 2em;
  border-radius: 10px;
  border:0;
  background-color: #fafafa;
  color: yellowgreen;
  scale: 1;
  z-index: 2;
  transition: all .3s;
}
.fab:hover{
  background-color: hsla(160, 100%, 57%, 0.2);
  color: var(--color-heading);
}
.fab:active{
  scale:1.2;
}

.slide-fade-enter-active {
  transition: all .3s ease-out;
}

.slide-fade-leave-active {
  transition: all .3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

@media screen and (max-width: 1080px) {
  .header-navbar{
    opacity: 0;
    height: 0;
    display: none;
  }
  .nav-btn{
    background-color: transparent;
    z-index: 10;
    min-height: 3em;
    min-width: 3em;
    gap: .55rem;
    position: fixed;
    right: 1.35em;
    top: 1.35em;
    border-radius: 10px;
    border:0;
    color: yellowgreen;
    scale: 1;
    transition: all .3s;
    opacity: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .nav-btn > div{
    background-color: white;
    height: 2px;
    width: 100%;
    border-radius: 5px;
    transition: all .3s;
    transform-origin: left;
  }
  .nav-menu-btn div:first-child{
    transform: rotate(45deg);
  }
  .nav-menu-btn div:nth-child(2){
    opacity: 0;
  }
  .nav-menu-btn div:last-child{
    transform: rotate(-45deg);
  }
}

</style>
