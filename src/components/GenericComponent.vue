<script setup>
import { computed } from 'vue';
import ParentComponent from './ParentComponent.vue';

const props = defineProps({
    layout: Object,
})

const hasChildren = computed(() => {
    return props.layout.children && props.layout.children.length > 0;
});
</script>

<template>
    <ParentComponent :component="layout.component">
    </ParentComponent>
    <GenericComponent
        v-if="hasChildren"
        v-for="child in layout.children"
        :layout="child"
    />
</template>

<style scoped>

</style>
