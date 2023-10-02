import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
	state: () => ({
		cart: [],
	}),
	getters: {
		getTotalCount() {
			return this.cart.length;
		},
	},
	actions: {
		addItem(itemData) {
			let cartItem = this.cart.find((item) => item.id === itemData.id);
			if (cartItem) {
				cartItem.count++;
			} else {
				this.cart.push(itemData);
			}
		},
		removeItem(id) {
			const itemIndex = this.cart.findIndex((item) => item.id === id);
			if (itemIndex !== -1) {
				this.cart.splice(itemIndex, 1);
			}
		},
		setItemCount(id, count) {
			let cartItem = this.cart.find((item) => item.id === id);
			if (cartItem) {
				cartItem.count = count;
			}
		},
	},
});
