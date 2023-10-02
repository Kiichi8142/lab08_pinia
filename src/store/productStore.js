import { defineStore } from "pinia";

export const useProductStore = defineStore("product", {
	state: () => ({
		products: [
			{
				id: 1,
				name: "Juice - Orange",
				price: "$43.45",
				desc_short: "Sprain of unspecified site of left knee",
				desc_long:
					"Insertion of Tissue Expander into Left Upper Leg Subcutaneous Tissue and Fascia, Open Approach",
				img: new URL("../assets/img/1.webp", import.meta.url).href,
			},
			{
				id: 2,
				name: "Beer - Camerons Cream Ale",
				price: "$1.89",
				desc_short: "Malignant neoplasm of unspecified ciliary body",
				desc_long:
					"Removal of Radioactive Element from Mediastinum, Open Approach",
				img: new URL("../assets/img/2.webp", import.meta.url).href,
			},
			{
				id: 3,
				name: "Vinegar - Champagne",
				price: "$47.28",
				desc_short: "Disp fx of base of 3rd MC bone, l hand, 7thK",
				desc_long:
					"Supplement Left Pelvic Bone with Synthetic Substitute, Open Approach",
				img: new URL("../assets/img/3.webp", import.meta.url).href,
			},
			{
				id: 4,
				name: "Energy Drink",
				price: "$42.63",
				desc_short: "Postproc hematoma of eye and adnexa fol other procedure",
				desc_long:
					"Bypass Left External Iliac Artery to Lower Extremity Artery, Open Approach",
				img: new URL("../assets/img/4.webp", import.meta.url).href,
			},
			{
				id: 5,
				name: "Beets",
				price: "$33.31",
				desc_short: "Osteonecrosis in diseases classd elswhr, ankle and foot",
				desc_long:
					"Reposition Right Fallopian Tube, Percutaneous Endoscopic Approach",
				img: new URL("../assets/img/5.webp", import.meta.url).href,
			},
			{
				id: 6,
				name: "Milk Powder",
				price: "$10.74",
				desc_short: "Osteitis deformans of left forearm",
				desc_long:
					"Insertion of Limb Lengthening External Fixation Device into Right Radius, Percutaneous Endoscopic Approach",
				img: new URL("../assets/img/6.webp", import.meta.url).href,
			},
			{
				id: 7,
				name: "Wine - Niagara Peninsula Vqa",
				price: "$4.94",
				desc_short: "Soccer field as place",
				desc_long:
					"Insertion of Intraluminal Device into Left Axillary Vein, Percutaneous Approach",
				img: new URL("../assets/img/7.webp", import.meta.url).href,
			},
			{
				id: 8,
				name: "Anchovy Paste - 56 G Tube",
				price: "$31.64",
				desc_short: "I/I react d/t implnt elec nstim of brain, lead, sequela",
				desc_long:
					"Supplement Trochlear Nerve with Autologous Tissue Substitute, Percutaneous Approach",
				img: new URL("../assets/img/8.webp", import.meta.url).href,
			},
			{
				id: 9,
				name: "Cherries - Frozen",
				price: "$32.82",
				desc_short:
					"Unsp inj unsp blood vess at shldr/up arm, right arm, sequela",
				desc_long: "Removal of Other Device on Left Inguinal Region",
				img: new URL("../assets/img/9.webp", import.meta.url).href,
			},
			{
				id: 10,
				name: "Chicken - Base",
				price: "$32.65",
				desc_short:
					"Retracted nipple associated with pregnancy, unsp trimester",
				desc_long:
					"Introduction of Other Therapeutic Substance into Central Artery, Open Approach",
				img: new URL("../assets/img/10.webp", import.meta.url).href,
			},
		],
	}),
	getters: {
		getProduct: (state) => {
			return (productId) =>
				state.products.find((product) => product.id === productId);
		},
	},
});
