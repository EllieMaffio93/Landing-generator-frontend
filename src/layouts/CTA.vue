<template>
    <div class="cta-container component">
        <span v-if="text">{{ text }}</span>
        <button><a :href="link">{{ buttonText }}</a></button>

        <div class="hover">
            <button class="button button-secondary" @click.stop="$emit('delete')">Elimina</button>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    text: {
        type: String,
        required: false,
    },
    backgroundColor: {
        type: String,
        required: true,
        default: "#4c64f2",
    },
    color: {
        type: String,
        required: true,
        default: "#fff",
    },
    link: {
        type: String,
        required: true,
        default: "#",
    },
    buttonText: {
        type: String,
        required: true,
        default: "Pulsante",
    },
    buttonTextColor: {
        type: String,
        required: false,
        default: "#fff",
    },
    buttonBackgroundColor: {
        type: String,
        required: false,
        default: "#4c64f2",
    },
})

</script>

<style>
.cta-container {
    height: 75px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    background-color: v-bind(backgroundColor);
    color: v-bind(color);
    font-size: 2rem;

    button {
        width: fit-content;
        padding: 6px 24px;
        background-color: v-bind(buttonBackgroundColor);
        color: v-bind(buttonTextColor);
        border-radius: 3px;
        border: 0;

        a {
            text-decoration: none;
            color: v-bind(buttonTextColor);
        }
    }
}
</style>