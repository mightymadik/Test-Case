<template>
    <section class="bg-image d-flex align-items-center search-block-bg-image">
        <div class="container py-lg-5">
            <div class="row justify-content-center">
                <div class="col-lg-6 col-md-8">
                    <div class="input-group border border-dark">
                        <input v-model="value" @keydown.enter ="$emit('update:currentSearch', value)" type="text" class="form-control form-control-lg border-0 rounded-0 focus-border" placeholder="Поиск" aria-label="Search Input">
                        <span class="input-group-text bg-white border-0 rounded-0" @click="$emit('update:currentSearch', value)">
                            <i class="bi bi-search"></i>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


<script>
export default {
    props: ['currentSearch'],
    emits: ['update:currentSearch'],
    data() {
        return {
            value: ''
        }
    },
}
</script>

<style scoped>
.focus-border:focus {
    outline: none;
    box-shadow: none;
}
.search-block-bg-image {
    background: url('../assets/mainPageBackground.png');
    height: 260px;
    background-size: cover;
}

@media (max-width: 768px) {
    .form-control-lg {
        height: 50px;
        font-size: 18px;
    }
}
</style>