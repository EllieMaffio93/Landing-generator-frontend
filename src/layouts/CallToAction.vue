<template>
    <div class="cta-container">
        {{ title }}
    </div>
</template>

<script setup>
defineProps({
    title: {
        type: String,
        default: "Call to Action",
    },
    backgroundColor: {
        type: String,
        default: "red",
    },
    color: {
        type: String,
        default: "white",
    },
})
</script>

<style>
.cta-container {
    width: 500px;
    height: 300px;
    background-color: v-bind(backgroundColor);
    color: v-bind(color);
}
</style>