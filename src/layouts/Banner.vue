<template>
    <div class="banner-container">
        {{ text }}
    </div>
</template>

<script setup>
const props = defineProps({
    text: {
        type: String,
        default: "Banner",
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
.banner-container {
    width: 100%;
    height: 50px;
    background-color: v-bind(backgroundColor);
    color: v-bind(color);
}
</style>