<script setup>
defineProps({
    title: {
        type: String,
        default: "CTA Title",
    },
    subtitle: {
        type: String,
        required: false,
        default: "CTA Subtitle",
    },
    backgroundColor: {
        type: String,
        default: "#f5f9ff",
    },
    color: {
        type: String,
        default: "#182aa1",
    },
})
</script>

<template>
    <div class="banner-container">
        <div class="banner-heading">
            <p class="banner-title">{{ title }}</p>
            <p class="banner-subtitle">{{ subtitle }}</p>
        </div>
    </div>
</template>

<style>
.banner-container {
    display: flex;
    min-height: 250px;
    padding: 4rem;
    background-color: v-bind(backgroundColor);
    color: v-bind(color);

    .banner-heading {
        width: 100%;

        .banner-title {
            font-size: 2.4rem;
        }

        .banner-subtitle {
            font-size: 1.8rem;
        }
    }
}


</style>