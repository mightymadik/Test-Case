<template>
    <HeaderComponent />
    <router-view />
    <ScrollToTopButton />
</template>

<script>
import HeaderComponent from "./components/HeaderComponent";
import ScrollToTopButton from './components/ScrollToTopButton.vue';

export default {
    name: "App",
    components: {
        HeaderComponent,
        ScrollToTopButton
    },
    provide() {
        return {
            unsplashURL: 'https://api.unsplash.com',
            unsplashAccessKey: process.env.VUE_APP_UNSPLASH_ACCESS_KEY
        }
    }
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

.btn-warning{
    background-color: #fff200;
}

.custom-mt-80 {
    margin-top: 80px;
}

::-webkit-scrollbar {
  width: 7px;
}
::-webkit-scrollbar-track {
  background: #f1f1f1;
}
::-webkit-scrollbar-thumb {
  background: #888;
}
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
