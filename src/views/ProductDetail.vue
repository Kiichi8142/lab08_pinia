<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
const id = parseInt(route.params.id)
</script>

<template>
    <h1>{{ id }}</h1>
</template>