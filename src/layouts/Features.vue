<script setup>

const props = defineProps({
    title: {
        type: String,
        default: "Features Title",
    },
    subtitle: {
        type: String,
        required: false,
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
  </div>
</template>

<style scoped>
.component {
  padding: 1rem;
  text-align: center;
}

.features-container{
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 30px;
  column-gap: 40px;

  .feature{
    background-color: #f1f1f1;
    padding: 20px;
    border-radius: 10px;

    img {
      width: 50px;
      height: 50px;
    }
  }
}
</style>