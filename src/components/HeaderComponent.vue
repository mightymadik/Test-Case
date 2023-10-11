<template>
    <header class="HeaderComponent">
        <div class="navbar bg-black shadow-sm p-3" style="z-index: 1; display: flex; justify-content: space-between;">
            <!-- Logo on the left side -->
            <div class="custom-header-part">
                <RouterLink :to="{ name: 'HomeView'}">
                    <img src="../assets/logo.png" alt="Logo" class="logo-img">
                </RouterLink>
            </div>
            <!-- Action buttons on the right side -->
            <div class="custom-header-part">
                <RouterLink :to="{ name: 'HomeView'}" v-if="$route.path !== '/'">
                    <button class="btn btn-primary border-0 bg-black">
                        <i class="bi bi-search"></i>
                        <label class="ms-1 label-to-be-hidden">
                            Поиск
                        </label>
                    </button>
                </RouterLink>
                <RouterLink :to="{ name: 'FavouritePhotoesView'}">
                    <button class="btn btn-primary border-0 bg-black">
                        <i class="bi bi-heart"></i>
                        <label class="ms-1 label-to-be-hidden">
                            Избранное
                        </label>
                    </button>
                </RouterLink>
            </div>
        </div>
    </header>
</template>

<style scoped>
.logo-img {
    height: 55px;
    width: auto;
}
.HeaderComponent {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #ffffff;
    z-index: 1;
}

.HeaderComponent .navbar {
    min-height: 80px;
}
.custom-header-part{
    margin: 0 3rem 0 3rem;
}
@media screen and (max-width: 767px) {
    .logo-img {
        height: 42px;
    }
    .custom-header-part{
        margin: 0 1rem 0 1rem;
    }
    .label-to-be-hidden{
        display: none;
    }
}
</style>