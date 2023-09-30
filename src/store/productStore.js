import { defineStore } from "pinia";

export const useProductStore = defineStore("product", {
	state: () => ({
		data: [
			{
				id: 1,
				name: "Star Anise, Whole",
				price: "$7.53",
				img: new URL("../assets/img/star_anise.webp", import.meta.url).href,
			},
			{
				id: 2,
				name: "Flour - Teff",
				price: "$9.38",
				img: new URL("../assets/img/flour.webp", import.meta.url).href,
			},
			{
				id: 3,
				name: "Wine - Fat Bastard Merlot",
				price: "$3.31",
				img: new URL("../assets/img/wine.webp", import.meta.url).href,
			},
			{
				id: 4,
				name: "Alize Sunset",
				price: "$7.24",
				img: new URL("../assets/img/alize.webp", import.meta.url).href,
			},
			{
				id: 5,
				name: "Beef - Top Butt Aaa",
				price: "$9.03",
				img: new URL("../assets/img/beef.webp", import.meta.url).href,
			},
			{
				id: 6,
				name: "Vinegar - Balsamic",
				price: "$3.65",
				img: new URL("../assets/img/vinegar.webp", import.meta.url).href,
			},
			{
				id: 7,
				name: "Pear - Packum",
				price: "$4.44",
				img: new URL("../assets/img/pear.webp", import.meta.url).href,
			},
			{
				id: 8,
				name: "Emulsifier",
				price: "$1.53",
				img: new URL("../assets/img/emulsulfier.webp", import.meta.url).href,
			},
			{
				id: 9,
				name: "Yeast Dry - Fermipan",
				price: "$2.07",
				img: new URL("../assets/img/yeast.webp", import.meta.url).href,
			},
			{
				id: 10,
				name: "Sausage - Chorizo",
				price: "$6.25",
				img: new URL("../assets/img/sausage.webp", import.meta.url).href,
			},
		],
	}),
});
