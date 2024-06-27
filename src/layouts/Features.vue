<script setup>
import { computed } from 'vue';


const props = defineProps({
    title: {
        type: String,
        default: "Features Title",
    },
    subtitle: {
        type: String,
        required: false,
    },
    backgroundColor: {
        type: String,
    },
    textColor: {
        type: String,
    },
    cardBackgroundColor: {
        type: String,
    },
    cardTextColor: {
        type: String,
    },
    features: {
        type: Array,
        default: () => [
            {
                title: "Feature 1",
                description: "Testo testo testo",
                icon: "https://cdn-icons-png.flaticon.com/512/25/25231.png"

            },
        ],
    },
})
const emit = defineEmits(["delete"]);


const columnNumber = computed(() => {
  const featuresNumber = props.features.length;
  if (featuresNumber % 2 === 0) {
      return 2;
  } else if (featuresNumber % 3 === 0) {
      return 3;
  } else {
      return 3;
  }
})
</script>

<template>
  <div class="component">
    <h3>{{title}}</h3>
    <p v-if="subtitle">{{subtitle}}</p>
    <div class="features-container">
      <div v-for="feature in features" class="feature">
        <img :src="feature.icon" :alt="feature.title">
        <h4>{{feature.title}}</h4>
        <p>{{feature.description}}</p>
      </div>
    </div>


    <div class="hover">
      <button class="button button-secondary" @click.stop="$emit('delete')">Elimina</button>
    </div>
  </div>
</template>

<style scoped>
.component {
  padding: 1rem;
  text-align: center;
  color: v-bind(textColor);
  background-color: v-bind(backgroundColor);
}

.features-container{
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(v-bind(columnNumber), 1fr);
  row-gap: 30px;
  column-gap: 40px;

  .feature{
    background-color: v-bind(cardBackgroundColor);
    color:v-bind(cardTextColor);
    padding: 20px;
    border-radius: 10px;

    img {
      width: 50px;
      height: 50px;
    }
  }
}
</style>