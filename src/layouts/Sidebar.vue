<script setup>
import { computed, ref } from 'vue';
import { DEFAULT_COMPONENT } from '../utils/props';
import { toast } from 'vue3-toastify';

const props = defineProps({
  selectedComponent: Object,
});
const emit = defineEmits(["save", "addNew", "delete", "addNewItem", "deleteItem"]);

const newComponent = ref("");
const selectedProps = computed(() => {
  return DEFAULT_COMPONENT[props.selectedComponent.name].props || {};
});
const showNewItem = ref(false);
const newItem = ref({
  title: "",
  description: "",
  icon: "",
});

const showNewFeature = () => {
  showNewItem.value = true;
}

const addNewItem = () => {
  if(props.selectedComponent.props.features.length < selectedProps.value.features.max) {
    emit('addNewItem', newItem.value);
    showNewItem.value = false;
    newItem.value = {
      title: "",
      description: "",
      icon: "",
    }
  } else {
    toast.error('Hai raggiunto il numero massimo di features');
  }
}

const deleteItem = (index) => {
  if (props.selectedComponent.props.features.length > selectedProps.value.features.min){
    emit('deleteItem', index)
  } else {
    toast.error('Devi avere almeno due feature');
  }
} 
</script>

<template>
  <div class="sidebar">
    <button class="button button-primary save-btn" @click="$emit('save')">Salva</button>

    <div class="block">
      <select v-model="newComponent">
        <option value="" disabled>Seleziona un componente</option>
        <option v-for="name in Object.keys(DEFAULT_COMPONENT)" :value="name">{{name}}</option>
      </select>
      <button class="button button-secondary add-new-btn" @click="$emit('addNew', newComponent)">Aggiungi</button>
    </div>
    <div class="block" v-if="selectedComponent">
      <div v-for="prop in Object.keys(selectedProps)" :key="prop">
        <label :for="prop">{{ prop }}</label>
        <input v-if="selectedProps[prop].type === 'text'" :name="prop" type="text" v-model="selectedComponent.props[prop]">
        <select v-if="selectedProps[prop].type === 'select'" :name="prop" v-model="selectedComponent.props[prop]">
          <option v-for="option in selectedProps[prop].options" :value="option">{{ option }}</option>
        </select>
        <ul v-if="selectedProps[prop].type === 'list'">
          <li v-for="(item, index) in selectedComponent.props[prop]" :key="index">
            <input type="text" v-model="item.title">
            <input type="text" v-model="item.description">
            <input type="text" v-model="item.icon">
            <button @click="deleteItem(index)">Elimina</button>
          </li>
          <li v-if="showNewItem">
            <input type="text" v-model="newItem.title">
            <input type="text" v-model="newItem.description">
            <input type="text" v-model="newItem.icon">
          </li>
          <button v-if="showNewItem" @click="addNewItem">Salva</button>
          <button @click="showNewFeature">Aggiungi feature</button>
        </ul>
      </div>
      <button class="button button-secondary delete-btn" @click="$emit('delete')">Elimina</button>
    </div>
  </div>
</template>

<style scoped>
.sidebar {
  height: 100%;
  width: 20%;
  flex-basis: 20%;
  padding: 20px;
  background-color: #00cec9;

  .save-btn {
    margin-bottom: 20px;
  }

  .add-new-btn {
    margin-top: 10px;
  }

  .delete-btn {
    margin-top: 10px;
  }

  .block {
    margin-bottom: 20px;
  }
}
</style>