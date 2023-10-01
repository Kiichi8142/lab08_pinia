<script setup>
import { useCartStore } from '../store/cartStore';

const cartStore = useCartStore()

</script>

<template>
    <p>Shopping Cart</p>
    <div v-for="item in cartStore.data">
        <p>{{ item.id }}</p>
    </div>
</template>