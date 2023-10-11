<template>
    <div class="card shadow-sm">
        <img :src="url" class="bd-placeholder-img card-img-top card-img-bottom" role="img" aria-label="Photo" preserveAspectRatio="xMidYMid slice" focusable="false" />
        <!-- You can add other content or captions related to the photo here if needed -->
    </div>
</template>

<script>
export default {
    props: {
        url: {
            type: String,
            required: true
        }
    },
}
</script>

<style scoped>
.card-img-top {
    width: 100%;
    height: 275px; /* adjust this value to control the height of the images */
    object-fit: cover;
}
</style>