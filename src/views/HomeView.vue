<template>
    <main>
        <HomePageSearchBlock 
            :currentSearch="searchText"
            @update:currentSearch="newValue => currentSearch = newValue"
            class="custom-mt-80"
        />
        <PhotoGallery :currentSearch="currentSearch" :isFavouritesPhotoes="false" />
    </main>
</template>

<script>
import HomePageSearchBlock from "@/components/HomePageSearchBlock.vue";
import PhotoGallery from "@/components/PhotoGallery.vue";

export default {
    name: "HomeView",
    components: {
        HomePageSearchBlock,
        PhotoGallery
    },
    data: function(){
        return {
            currentSearch: ''
        }
    },
};
</script>
