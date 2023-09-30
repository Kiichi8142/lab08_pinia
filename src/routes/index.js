import { createRouter, createWebHistory } from "vue-router";

const Home = () => import("../views/Home.vue");
const ProductDetail = () => import("../views/ProductDetail.vue");
const Product = () => import("../views/Products.vue");

const routes = [
	{ path: "/", component: Product },
	{ path: "/products/:id", name: "product", component: ProductDetail },
];

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes,
});

export default router;
