import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import PhotoView from "../views/PhotoView.vue";
import FavouritePhotoesView from "../views/FavouritePhotoesView.vue";

const routes = [
    {
        path: "/",
        name: "HomeView",
        component: HomeView,
    },
    {
        path: "/picture/:id",
        name: "PhotoView",
        component: PhotoView,
    },
    {
        path: "/favourites",
        name: "FavouritePhotoesView",
        component: FavouritePhotoesView,
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;