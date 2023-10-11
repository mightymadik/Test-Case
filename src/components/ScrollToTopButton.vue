<template>
    <transition name="fade">
        <button v-if="showButton" @click="scrollToTop" id="scrollToTopBtn" class="btn border border-gray border-1 bg-white">
            <i class="bi bi-arrow-up"></i>
        </button>
    </transition>
</template>
  
<script>
    export default {
        data() {
            return {
                showButton: false
            };
        },
        mounted() {
            window.addEventListener('scroll', this.handleScroll);
        },
        beforeUnmount() {
            window.removeEventListener('scroll', this.handleScroll);
        },
        methods: {
            handleScroll() {
                const scrollY = window.scrollY;
                this.showButton = scrollY > 200; // Adjust this value to control when the button appears
            },
            scrollToTop() {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }
    };
</script>
  
<style scoped>
    #scrollToTopBtn {
        position: fixed;
        bottom: 30px;
        right: 30px;
    }
    .fade-enter-active,
    .fade-leave-active {
        transition: opacity 0.5s; /* Adjust the duration for the fade-in/fade-out effect */
    }

    .fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
        opacity: 0;
    }
</style>