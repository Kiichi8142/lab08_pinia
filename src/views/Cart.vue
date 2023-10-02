<script setup>
import { storeToRefs } from 'pinia';
import { useCartStore } from '../store/cartStore';
import { useProductStore } from '../store/productStore';

const cartStore = useCartStore()
let { cart } = storeToRefs(cartStore)
const productStore = useProductStore()
const { getProduct } = storeToRefs(productStore)

function readInput(id, value) {
    cartStore.setItemCount(id, value)
}

function itemRemove(id) {
    cartStore.removeItem(id)
}

</script>

<template>
    <div class="p-4 max-w-7xl mx-auto flex flex-col lg:p-8">
        <p class="mx-4 lg:mx-0 text-2xl font-bold text-gray-900">Your cart</p>
        <div v-for="item in cart" class="flex flex-row mt-4">
            <img :src="getProduct(item.id).img" alt="" class="object-cover h-32 rounded-md">
            <div class="flex flex-col w-full p-4">
                <div class="flex flex-row justify-between h-full">
                    <div class="flex flex-col">
                        <p class="text-gray-900 font-medium">{{ getProduct(item.id).name }}</p>
                        <input @input="e => readInput(item.id, e.target.value)" :id="item.id + '-count'" min="1"
                            :value="item.count" type="number" class="border p-1 rounded-md w-12">
                    </div>
                    <div class="flex flex-col justify-between">
                        <p class="text-gray-900 font-medium">${{ (parseFloat(getProduct(item.id).price.replace('$',
                            '')) *
                            item.count).toFixed(2) }}
                        </p>
                        <p @click="itemRemove(item.id)" class="text-gray-400 hover:cursor-pointer">Remove</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>