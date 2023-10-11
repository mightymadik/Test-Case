<template>
    <div class="py-5 custom-mt-80">
        <h1>
            <strong>Избранное</strong>
        </h1>
    </div>
    <PhotoGallery :isFavouritesPhotoes="true" />
</template>

<script>
import PhotoGallery from "@/components/PhotoGallery.vue";

export default {
    name: "FavouritePhotoesView",
    components: {
        PhotoGallery
    },
};
</script>
