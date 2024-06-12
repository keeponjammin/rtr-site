<script>
export default {
    name: 'NavBar',
    methods:{
        navClicked(){
            this.$emit('navClicked');
            window.scrollTo({top: 0, left: 0, behavior: 'smooth'});

        }
    }
  }
</script>

<template>
    <nav>
        <RouterLink to="/" @click="navClicked()"><font-awesome-icon class="icon" :icon="['fas', 'home']" :size="size"/>&nbsp;Home</RouterLink>
        <RouterLink to="/biography"  @click="navClicked()"><font-awesome-icon class="icon" :icon="['fas', 'book-open']" :size="size"/>&nbsp;Biography</RouterLink>
        <RouterLink to="/discography"  @click="navClicked()"><font-awesome-icon class="icon" :icon="['fas', 'music']" :size="size"/>&nbsp;Discography</RouterLink>
        <RouterLink to="/gallery"  @click="navClicked()"><font-awesome-icon class="icon" :icon="['fas', 'images']" :size="size"/>&nbsp;Gallery</RouterLink>
        <RouterLink to="/contact"  @click="navClicked()"><font-awesome-icon class="icon" :icon="['fas', 'comment-dots']" :size="size"/>&nbsp;Contact</RouterLink>
    </nav>
</template>
<style scoped>
    nav {
        font-size: 16px;
        text-align: center;
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 1em;
    }

    nav a.router-link-exact-active {
        color: yellowgreen;
        background-color: rgba(153, 205, 50, 0.353);
    }

    nav a.router-link-exact-active:hover {
        background-color: rgba(153, 205, 50, 0.353);

    }

    nav a {
        display: inline-block;
        padding: 1rem;
        border-left: 1px solid var(--color-border);
        display: flex;
        align-items: center;
        font-size: large;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
    }

    nav a:first-of-type {
        border: 0;
    }

    @media screen and (max-width: 1080px) {
        nav {
            font-size: 16px;
            text-align: center;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 1em;
        }

        nav a.router-link-exact-active {
            color: yellowgreen;
            background-color: rgba(153, 205, 50, 0.353);
        }

        nav a.router-link-exact-active:hover {
            background-color: rgba(153, 205, 50, 0.353);

        }

        nav a {
            display: inline-block;
            padding: 1rem;
            border-top: 1px solid var(--color-border);
            border-left: 0;
            display: flex;
            align-items: center;
            font-size: large;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 100%;
        }
        
    }

</style>
