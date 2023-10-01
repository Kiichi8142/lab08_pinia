import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
	state: () => ({
		data: [],
	}),
	getters: {
		getTotalCount() {
			return this.data.length;
		},
	},
	actions: {
		addItem(item) {
			this.data.push(item);
		},
	},
});
