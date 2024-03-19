<template>
    <div class="cta-container">
        {{ text }}
    </div>
</template>

<script setup>
const props = defineProps({
    text: {
        type: String,
        default: "Banner Text",
    },
    backgroundColor: {
        type: String,
        required: false,
        default: "#4c64f2",
    },
    color: {
        type: String,
        required: false,
        default: "#fff",
    },
})

</script>

<style>
.cta-container {
    height: 75px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    background-color: v-bind(backgroundColor);
    color: v-bind(color);
    font-size: 2rem;
}
</style>