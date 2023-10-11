<template>
    <div class="py-5">
        <div class="container">
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 g-3">
                <!-- Show photos if photoArray has photos, else show a message -->
                    <div v-for="(photo, index) in formattedPhotoArray" :key="index" class="col">
                        <RouterLink :to="{ name: 'PhotoView', params: { id: photo.id } }">
                            <PhotoComponent :url="photo.url" />
                        </RouterLink>
                    </div>
                <div v-if="!photoArray.length">
                    <p v-if="errorEmptySearch || isFavouritesPhotoes">По Вашему запросу ничего не найдено.</p>
                    <p v-else>Загрузка...</p>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>

import PhotoComponent from "./PhotoComponent";
import axios from 'axios';

export default {
    inject: ['unsplashURL', 'unsplashAccessKey'],
    props: ['currentSearch', 'isFavouritesPhotoes'],
    data: function(){
        return {
            photoArray: [],
            errorEmptySearch: false
        }
    },
    components: {
        PhotoComponent
    },
    watch: {
        currentSearch: {
            handler: function (newSearch) {
                if(newSearch)
                    this.searchPhotosByString(newSearch);
            },
            immediate: true
        }
    },
    mounted() {
        if (this.isFavouritesPhotoes) {
            this.getFavouritePhotoes()
        } else {
            this.getRandomPhotoes()
        }
    },
    methods: {
        getFavouritePhotoes(){
            this.photoArray = JSON.parse(localStorage.getItem('favouritePhotoes')) || [];
        },
        async getRandomPhotoes(){
            const response = await axios.get(this.unsplashURL + '/photos/random?count=8', {
                headers: {
                    Authorization: this.unsplashAccessKey,
                },
            });
            this.photoArray = response.data;
        },
        async searchPhotosByString(newSearch){
            this.errorEmptySearch = false;
            const response = await axios.get(this.unsplashURL + `/search/photos?query=${newSearch}&per_page=8`, {
                headers: {
                    Authorization: this.unsplashAccessKey,
                },
            });
            this.photoArray = response.data.results;
            if(!response.data.results.length){
                this.errorEmptySearch = true;
            }
        }
    },
    computed: {
        formattedPhotoArray(){
            if(this.photoArray.length > 0){
                return this.photoArray.map((photo) => {
                    return {
                        id: photo.id,
                        url: photo.url || photo.urls?.regular
                    }
                })
            }
            return [];
        }
    }
};
</script>