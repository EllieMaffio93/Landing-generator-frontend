<script setup>
import {ref, onMounted} from "vue"
import draggable from 'vuedraggable'
import {getLanding} from '../api/landings';
import { useRoute, useRouter } from "vue-router";
import { updateLanding } from "../api/landings";
import Sidebar from "../layouts/Sidebar.vue";
import { toast } from 'vue3-toastify';

import {DEFAULT_COMPONENT} from '../utils/props.js';

const route = useRoute();
const router = useRouter();
const layout = ref({
  title: "",
  components: [],
});

const selectedComponent = ref(null);
const selectedIndex = ref(-1);
const dragging = ref(false);

onMounted(async () => {
  const response = await getLanding(route.params.id);
  layout.value.title = response.title;
  layout.value.components = JSON.parse(response.template).components;
  setInterval(saveLayout, 60000);
})

const selectComponent = (item, index) => {
  selectedComponent.value = item;
  selectedIndex.value = index;
}

const addNewComponent = (newComponentName) => {
  if (!newComponentName) return;

  const newComponent = {
    name: newComponentName,
    props: {}
  }
  const props = DEFAULT_COMPONENT[newComponentName].props;
  Object.keys(props).forEach((key) => {
    newComponent.props[key] = props[key].value;
  });
  layout.value.components.push(newComponent);
}

const saveLayout = async () => {
  const response = await updateLanding(route.params.id, layout.value);
  toast.success('Layout aggiornato!');
}

const deleteComponent = (index = -1) => {
  const currentIndex = index !== -1 ? index : selectedIndex.value;
  layout.value.components.splice(currentIndex, 1);
  selectedIndex.value = -1;
  selectedComponent.value = null;
}
</script>

<template>
  <button @click="router.push(`/dashboard/projects`)">All projects</button>
  <div class="project-view">
    <Sidebar :selectedComponent="selectedComponent" @addNew="addNewComponent" @save="saveLayout" @delete="deleteComponent"/>

    <div class="project">
      <draggable
        :list="layout.components"
        item-key="id"
        class="drop__area"
        ghost-class="ghost"
        @start="dragging = true"
        @end="dragging = false"
      >
        <template #item="{ element, index }">
          <component
            :is="element.name"
            :id="index"
            v-bind="element.props"
            @click="selectComponent(element, index)"
            @delete="deleteComponent(index)"
          />
        </template>
      </draggable>
    </div>
  </div>
</template>

<style scoped>
.project-view {
  width: 100%;
  height: 100%;
  display: flex;
  overflow-y: scroll;
}

.project {
  width: 80%;
  flex-basis: 80%;
}
</style>