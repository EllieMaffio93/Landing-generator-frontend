<script setup>
import { computed, ref } from 'vue';
import { DEFAULT_COMPONENT } from '../utils/props';

const props = defineProps({
  selectedComponent: Object,
});
const emit = defineEmits(["save", "addNew", "delete"]);

const newComponent = ref("");
const selectedProps = computed(() => {
  return DEFAULT_COMPONENT[props.selectedComponent.name].props;
});
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
        <input v-if="selectedProps[prop].type === 'text'" :name="prop" type="text" v-model="selectedComponent.props[prop].value">
        <select v-if="selectedProps[prop].type === 'select'" :name="prop" v-model="selectedComponent.props[prop].value">
          <option v-for="option in selectedProps[prop].options" :value="option">{{ option }}</option>
        </select>
        <ul v-if="selectedProps[prop].type === 'list'">
          <li v-for="(item, index) in selectedComponent.props[prop]" :key="index">
            <input type="text" v-model="item.title">
            <input type="text" v-model="item.description">
            <input type="text" v-model="item.icon">
          </li>
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