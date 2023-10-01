import { createRouter, createWebHistory } from "vue-router";

const Home = () => import("../views/Home.vue");
const ProductDetail = () => import("../views/ProductDetail.vue");
const Product = () => import("../views/Products.vue");
const Cart = () => import("../views/Cart.vue");

const routes = [
	{ path: "/", component: Product },
	{ path: "/products/:id", name: "product", component: ProductDetail },
	{ path: "/cart", component: Cart },
];

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes,
});

export default router;
