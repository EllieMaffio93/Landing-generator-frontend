<script setup>
import { computed, ref, onMounted } from 'vue';
import draggable from 'vuedraggable'
import axios from 'axios';

const DEFAULT_COMPONENT = {
  CTA: {
    name: "CTA",
    props: {
      title: undefined,
      backgroundColor: undefined,
      color: undefined,
    },
  },
  Banner: {
    name: "Banner",
    props: {
      text: undefined,
      backgroundColor: undefined,
      color: undefined,
    },
  }
}

//OLD LAYOUT REF
// {
//     id: 1,
//     component: "CallToAction",
//     props: {
//       title: undefined,
//       backgroundColor: undefined,
//       color: undefined,
//     },
//   },
//   {
//     id: 2,
//     component: "Banner",
//     props: {
//       text: undefined,
//       backgroundColor: undefined,
//       color: undefined,
//     },
//   }

const exampleLayout = [
  {
    name: "Banner",
    props: {
      text: undefined,
      backgroundColor: undefined,
      color: undefined,
    },
  },
  {
    name: "CTA",
    props: {
      title: undefined,
      backgroundColor: undefined,
      color: undefined,
    },
  },
]

const layout = ref(exampleLayout);

onMounted(async () => {
  //const response = await axios.get('http://localhost:3030/landings/65f01dea8d351cd26a309a51');
  //const template = JSON.parse(response.data.template);
  //console.log(template.components);
  //layout.value = template.components;
})

const selectedComponent = ref(null);
const newComponent = ref("");

const selectComponent = (item) => {
  selectedComponent.value = item;
}

const addNewComponent = () => {
  layout.value.push({
    ...DEFAULT_COMPONENT[newComponent.value],
    props: {
      ...DEFAULT_COMPONENT[newComponent.value].props
    }
  });
}

const dragging = ref(false);
</script>

<template>
  <div>
    <draggable
      :list="layout"
      item-key="id"
      class="drop__area"
      ghost-class="ghost"
      @start="dragging = true"
      @end="dragging = false"
    >
      <template #item="{ element, i }">
        <component
          :is="element.name"
          :id="i"
          v-bind="element.props"
          @click="selectComponent(element)"
        />
      </template>
    </draggable>

    <!-- <div class="drop__area">
      <component draggable v-for="item in layout" :is="item.component" :key="item.component" :id="item.id" v-bind="item.props" @click="selectComponent(item)" />
    </div> -->
    <div class="add-new">
      <select v-model="newComponent">
        <option value="" disabled>Seleziona un componente</option>
        <option value="CTA">CTA</option>
        <option value="Banner">Banner</option>
      </select>
      <button @click="addNewComponent">Aggiungi</button>
    </div>
    <div class="props" v-if="selectedComponent">
      <div v-for="prop in Object.keys(selectedComponent.props)" :key="prop">
        <label :for="prop">{{ prop }}</label>
        <input :id="prop" type="text" v-model="selectedComponent.props[prop]">
      </div>
    </div>
    <!--
    <CallToAction :title="cta.title" :background-color="cta.backgroundColor" :color="cta.color" />
    <input type="text" v-model="cta.title">
    <input type="text" v-model="cta.backgroundColor">
    <input type="text" v-model="cta.color">
    <Banner :text="banner.text" :background-color="banner.backgroundColor" :color="banner.color" />
    -->
    <pre>{{ layout }}</pre>
  </div>
  
</template>

<style scoped>

</style>
