<script setup>
import { useSlots } from 'vue';

const props = defineProps({
    component: String,
})

const slots = useSlots();
//console.log(slots.default()[0].children[0].children[0]);
</script>

<template>
    <component :is="component">

    </component>
</template>