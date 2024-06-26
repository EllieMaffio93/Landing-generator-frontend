<script setup>
import { computed } from 'vue';

const props = defineProps({
    title: {
        type: String,
        default: "hero Title",
    },
    subtitle: {
        type: String,
        required: false,
    },
    backgroundColor: {
        type: String,
        default: "#f5f9ff",
    },
    color: {
        type: String,
        default: "#182aa1",
    },
    backgroundImage: {
        type: String,
        required: false,
    },
    type: {
        type: String,
        validator(value, _) {
            // The value must match one of these strings
            return ['small', 'medium', 'large'].includes(value)
        },
        default: "small",
    },
    contentImage: {
        type: String,
        required: false,
    },
    imageOrientation: {
        type: String,
        validator(value, _) {
            // The value must match one of these strings
            return ['left', 'right'].includes(value)
        },
        required: false,
    },
})

defineEmits(["delete"])

const classObject = computed(() => {
    return {
        'hero-container': true,
        [`is-${props.type}`]: ["small", "medium", "large"].includes(props.type),
        'content-reverse': props.imageOrientation === 'left'
    }
})

const textAlign = computed(() => {
    return props.imageOrientation === 'left' ? 'right' : 'left';
})
</script>

<template>
    <div class="component">
        <div :class="classObject">
            <div class="hero-heading">
                <p class="hero-title">{{ title }}</p>
                <p class="hero-subtitle">{{ subtitle }}</p>
            </div>
            <div v-if="contentImage" class="hero-image">
                <img :src="contentImage" alt="hero Image">
            </div>
        </div>
        <div class="hover">
            <button class="button button-secondary" @click.stop="$emit('delete')">Elimina</button>
        </div>
    </div>
</template>

<style>
.is-small{
    height: 400px;
}

.is-medium{
    height: 600px;
}

.is-large{
    height: 800px;
}

.content-reverse{
    flex-direction: row-reverse;
}

.hero-container {
    display: flex;
    justify-content: space-between;
    align-items:center;
    padding: 4rem;
    background-color: v-bind(backgroundColor);
    color: v-bind(color);

    .hero-heading {
        width: calc(100% / 2);
        text-align: center;

        .hero-title {
            font-size: 2.4rem;
        }

        .hero-subtitle {
            font-size: 1.8rem;
        }
    }
    .hero-image {
        width: calc(100% / 2);

        img {
            max-width: 80%;
        }
    }
}


</style>